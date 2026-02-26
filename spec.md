# Specification

## Summary
**Goal:** Replace all broken or missing product images across the Dwarka Bartan Store website by wiring up newly generated static image assets in every relevant component.

**Planned changes:**
- In `KitchenUtensils.tsx`, update all 5 product card `<img>` src paths to point to generated assets for Milton Insignia Casserole, Crystal Wooden Serving Trays, Milton Pearl Thermoware Casserole, Senso Finger Chipser, and Cello Puro Kids Water Bottles
- In `HouseholdProducts.tsx`, update the dustbin product card `<img>` src to the generated colorful dustbins image
- In `ProductCategories.tsx`, update all 6 category card `<img>` src paths to generated images for Stainless Steel Utensils, Pressure Cookers, Cookware Sets, Kitchen Tools, Plastic Household Items, and Gift Items
- In the Featured Products Showcase component, update all 8 product card `<img>` src paths to generated images for Steel Tiffin Box, Pressure Cooker 5L, Non-Stick Kadai, Steel Glass Set, Casserole Set, Mixing Bowls Set, Vegetable Chopper, and Stainless Steel Thali
- In the Photo Gallery section, update all 6 gallery `<img>` src paths to generated gallery images
- In `HeroSection.tsx`, update the hero showcase `<img>` src to the generated hero product image
- All image paths must resolve to `frontend/public/assets/generated/`

**User-visible outcome:** All product images, category images, gallery images, and the hero image will display correctly throughout the website with no broken image icons.
