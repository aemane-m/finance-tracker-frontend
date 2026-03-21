import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage implements OnInit {
  private categoriesService = inject(CategoriesService);
  private fb = inject(FormBuilder);

  loading = true;
  saving = false;
  error = '';
  query = '';
  iconSearch = '';
  activeTab: 'expenses' | 'income' = 'expenses';

  categories: Category[] = [];

  showForm = false;
  editingCategoryId: number | null = null;

  readonly iconBank: { icon: string; label: string }[] = [
    // Finance & Argent
    { icon: 'payments', label: 'Paiements' },
    { icon: 'savings', label: 'Épargne' },
    { icon: 'account_balance_wallet', label: 'Portefeuille' },
    { icon: 'credit_card', label: 'Carte' },
    { icon: 'currency_exchange', label: 'Change' },
    { icon: 'trending_up', label: 'Hausse' },
    { icon: 'trending_down', label: 'Baisse' },
    { icon: 'bar_chart', label: 'Graphique' },
    { icon: 'receipt_long', label: 'Reçu' },
    { icon: 'monetization_on', label: 'Monnaie' },
    // Travail & Revenus
    { icon: 'work', label: 'Travail' },
    { icon: 'business_center', label: 'Affaires' },
    { icon: 'laptop', label: 'Ordinateur' },
    { icon: 'attach_money', label: 'Salaire' },
    { icon: 'diversity_3', label: 'Équipe' },
    // Logement & Maison
    { icon: 'home', label: 'Maison' },
    { icon: 'apartment', label: 'Appartement' },
    { icon: 'electrical_services', label: 'Électricité' },
    { icon: 'water_drop', label: 'Eau' },
    { icon: 'wifi', label: 'Internet' },
    { icon: 'smartphone', label: 'Téléphone' },
    { icon: 'tv', label: 'Télévision' },
    // Alimentation
    { icon: 'restaurant', label: 'Restaurant' },
    { icon: 'local_cafe', label: 'Café' },
    { icon: 'local_pizza', label: 'Pizza' },
    { icon: 'local_grocery_store', label: 'Courses' },
    { icon: 'lunch_dining', label: 'Déjeuner' },
    { icon: 'cake', label: 'Pâtisserie' },
    // Transport
    { icon: 'directions_car', label: 'Voiture' },
    { icon: 'directions_transit', label: 'Transports' },
    { icon: 'local_gas_station', label: 'Essence' },
    { icon: 'train', label: 'Train' },
    { icon: 'flight', label: 'Avion' },
    { icon: 'two_wheeler', label: 'Moto' },
    { icon: 'pedal_bike', label: 'Vélo' },
    // Santé
    { icon: 'favorite', label: 'Santé' },
    { icon: 'local_hospital', label: 'Hôpital' },
    { icon: 'medication', label: 'Médicaments' },
    { icon: 'fitness_center', label: 'Sport' },
    { icon: 'spa', label: 'Bien-être' },
    // Shopping & Loisirs
    { icon: 'shopping_bag', label: 'Shopping' },
    { icon: 'shopping_cart', label: 'Panier' },
    { icon: 'checkroom', label: 'Vêtements' },
    { icon: 'sports_esports', label: 'Jeux vidéo' },
    { icon: 'movie', label: 'Cinéma' },
    { icon: 'theater_comedy', label: 'Spectacles' },
    { icon: 'music_note', label: 'Musique' },
    { icon: 'headphones', label: 'Podcast' },
    { icon: 'book', label: 'Livres' },
    // Enfants & Famille
    { icon: 'child_care', label: 'Enfants' },
    { icon: 'school', label: 'Éducation' },
    { icon: 'sports_soccer', label: 'Football' },
    { icon: 'toys', label: 'Jouets' },
    { icon: 'pets', label: 'Animaux' },
    // Cadeaux & Divers
    { icon: 'card_giftcard', label: 'Cadeau' },
    { icon: 'volunteer_activism', label: 'Don' },
    { icon: 'celebration', label: 'Fête' },
    { icon: 'travel_explore', label: 'Voyage' },
    { icon: 'category', label: 'Autre' },
  ];

  readonly presetColors: string[] = [
    '#0f766e', '#0284c7', '#7c3aed', '#db2777',
    '#ea580c', '#ca8a04', '#16a34a', '#dc2626',
    '#4f46e5', '#0891b2', '#059669', '#9333ea',
  ];

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    icon: ['category'],
    color: ['#0f766e'],
  });

  get name() { return this.form.controls.name; }
  get selectedIcon(): string { return this.form.controls.icon.value ?? 'category'; }
  get selectedColor(): string { return this.form.controls.color.value ?? '#0f766e'; }

  get filteredIcons(): { icon: string; label: string }[] {
    const q = this.iconSearch.trim().toLowerCase();
    if (!q) return this.iconBank;
    return this.iconBank.filter(i => i.label.toLowerCase().includes(q) || i.icon.includes(q));
  }

  get filteredCategories(): Category[] {
    const q = this.query.trim().toLowerCase();
    const source = this.activeTab === 'expenses' ? this.expenseCategories : this.incomeCategories;
    if (!q) return source;
    return source.filter((c) => c.name.toLowerCase().includes(q));
  }

  get expenseCategories(): Category[] {
    return this.categories.filter((c) => !this.isIncomeCategory(c));
  }

  get incomeCategories(): Category[] {
    return this.categories.filter((c) => this.isIncomeCategory(c));
  }

  ngOnInit(): void {
    void this.loadCategories();
  }

  async loadCategories(): Promise<void> {
    this.loading = true;
    this.error = '';
    try {
      this.categories = await firstValueFrom(this.categoriesService.getAll());
    } catch {
      this.error = 'Impossible de charger les catégories.';
    } finally {
      this.loading = false;
    }
  }

  selectIcon(icon: string): void {
    this.form.controls.icon.setValue(icon);
  }

  selectColor(color: string): void {
    this.form.controls.color.setValue(color);
  }

  openCreate(): void {
    this.showForm = true;
    this.editingCategoryId = null;
    this.iconSearch = '';
    this.form.reset({ name: '', icon: 'category', color: '#0f766e' }, { emitEvent: false });
  }

  openEdit(category: Category): void {
    this.showForm = true;
    this.editingCategoryId = category.id;
    this.iconSearch = '';
    this.form.reset(
      { name: category.name, icon: category.icon ?? 'category', color: category.color ?? '#0f766e' },
      { emitEvent: false }
    );
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingCategoryId = null;
    this.iconSearch = '';
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      name: this.name.value!.trim(),
      icon: this.form.controls.icon.value?.trim() || null,
      color: this.form.controls.color.value?.trim() || null,
    };

    this.saving = true;
    try {
      if (this.editingCategoryId === null) {
        await firstValueFrom(this.categoriesService.create(payload));
        await Swal.fire({ icon: 'success', title: 'Catégorie créée', timer: 1200, showConfirmButton: false });
      } else {
        await firstValueFrom(this.categoriesService.update(this.editingCategoryId, payload));
        await Swal.fire({ icon: 'success', title: 'Catégorie mise à jour', timer: 1200, showConfirmButton: false });
      }
      this.cancelForm();
      await this.loadCategories();
    } catch {
      await Swal.fire({ icon: 'error', title: 'Erreur', text: 'Opération impossible pour le moment.', confirmButtonColor: '#0f766e' });
    } finally {
      this.saving = false;
    }
  }

  async deleteCategory(category: Category): Promise<void> {
    if (category.isDefault) {
      await Swal.fire({
        icon: 'warning',
        title: 'Catégorie protégée',
        text: 'Une catégorie par défaut ne peut pas être supprimée.',
        confirmButtonColor: '#0f766e',
      });
      return;
    }

    const result = await Swal.fire({
      icon: 'warning',
      title: 'Supprimer cette catégorie ?',
      text: `"${category.name}" sera supprimée de votre liste.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
    });

    if (!result.isConfirmed) return;

    try {
      await firstValueFrom(this.categoriesService.delete(category.id));
      await Swal.fire({ icon: 'success', title: 'Catégorie supprimée', timer: 1200, showConfirmButton: false });
      await this.loadCategories();
    } catch {
      await Swal.fire({
        icon: 'error',
        title: 'Suppression impossible',
        text: 'Cette catégorie est peut-être encore utilisée par des transactions.',
        confirmButtonColor: '#0f766e',
      });
    }
  }

  trackById(_: number, item: Category): number { return item.id; }

  private isIncomeCategory(category: Category): boolean {
    const label = category.name.toLowerCase();
    return ['income', 'revenu', 'salaire', 'salary', 'bonus', 'freelance', 'gift', 'cadeau', 'dividend', 'rent']
      .some((keyword) => label.includes(keyword));
  }

  categoryHint(category: Category): string {
    const icon = (category.icon ?? '').toLowerCase();
    const name = category.name.toLowerCase();
    if (icon.includes('home') || name.includes('logement')) return 'Charges fixes';
    if (icon.includes('restaurant') || name.includes('alimentation')) return 'Variable';
    if (icon.includes('directions_car') || name.includes('transport')) return 'Déplacements';
    if (icon.includes('favorite') || name.includes('sante')) return 'Essentiel';
    if (icon.includes('work') || name.includes('salaire')) return 'Principal';
    if (icon.includes('laptop') || name.includes('freelance')) return 'Activité annexe';
    if (icon.includes('card_giftcard') || name.includes('cadeau')) return 'Occasionnel';
    return this.activeTab === 'income' ? 'Source de revenus' : 'Groupe de dépenses';
  }
}
