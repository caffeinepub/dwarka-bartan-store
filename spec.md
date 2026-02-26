# Specification

## Summary
**Goal:** Fix the Google Maps embed in the LocationSection so it correctly displays the map centered on Dwarka Bartan Store at Akhnoor Palace, Jammu.

**Planned changes:**
- Update the Google Maps iframe `src` URL in `LocationSection.tsx` to use a valid `/maps/embed?` URL that points accurately to Akhnoor Palace, Jammu
- Keep the "Get Directions" button link unchanged at `https://maps.app.goo.gl/oxEd9nPJ4Ty4pYQL7`

**User-visible outcome:** The embedded map in the Location section will show the correct pin at Akhnoor Palace, Jammu instead of an incorrect or generic location.
