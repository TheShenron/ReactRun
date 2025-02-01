## BEM (Block Element Modifier)

BEM is a methodology for naming CSS classes that helps maintain consistency and scalability in your UI's design structure. It breaks down UI components into three main parts:

### 1. Block:
A block is the outermost container that represents a distinct component or section of the UI.

### 2. Element:
An element is a component or part of a block that cannot exist without the block. It is a smaller part of the block.

### 3. Modifier:
A modifier is a flag on a block or element that changes its appearance, behavior, or state. Modifiers allow you to create variations of a block or element.

### BEM Syntax

- **Block**: `.block-name`
- **Element**: `.block-name__element-name`
- **Modifier**: `.block-name--modifier-name` or `.block-name__element-name--modifier-name`

---

### Explanation of Each Part

#### Block:
- A **block** represents a high-level component in your UI, such as a button, a form, or a navigation menu.
- The block is named with a simple, descriptive name.
  
**Examples of Blocks:**
- `.button`
- `.header`
- `.card`

#### Element:
- An **element** is a part of a block that cannot exist independently. It relies on the block for context.
- Elements are named by appending `__` (two underscores) to the block name.

**Examples of Elements:**
- For a `.button` block, an element could be:
  - `.button__icon`
  - `.button__label`

#### Modifier:
- A **modifier** represents different states or variations of a block or element. It is used to modify its appearance, behavior, or state.
- Modifiers are added by appending `--` (two hyphens) to the block or element name.

**Examples of Modifiers:**
- A disabled button could have the following modifier:
  - `.button--disabled`
- A small button inside the `.button` block could be:
  - `.button__icon--small`
  
---

### Example Usage of BEM in HTML & CSS:

#### HTML:
```html
<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title">Card Title</h2>
  </div>
  <div class="card__content">
    <p>Card content goes here.</p>
  </div>
  <button class="card__button card__button--primary">Click Me</button>
</div>
```
#### CSS:
```css
/* Block */
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

/* Modifier for Featured Card */
.card--featured {
  background-color: #f0f8ff;
}

/* Elements */
.card__header {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.card__title {
  margin: 0;
}

.card__content {
  font-size: 1rem;
  color: #555;
}

.card__button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

/* Modifier for Primary Button */
.card__button--primary {
  background-color: #0056b3;
}

.card__button:hover {
  background-color: #004085;
}
```

## Advanced Example: BEM with Multiple Modifiers

This example demonstrates a more advanced implementation of the **BEM** methodology with multiple modifiers applied to a card component. The card has several variations, including size, header style, title highlighting, and button states.

### HTML Structure:

```html
<div class="card card--featured card--large">
  <div class="card__header card__header--sticky">
    <h2 class="card__title card__title--highlighted">Card Title</h2>
  </div>
  <div class="card__content">
    <p>Card content goes here.</p>
  </div>
  <button class="card__button card__button--primary card__button--disabled">Click Me</button>
</div>
```

```css
/* Block */
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

/* Modifier for Featured Card */
.card--featured {
  background-color: #f0f8ff;
}

/* Modifier for Large Card */
.card--large {
  width: 400px;
  font-size: 1.2rem;
}

/* Elements */
.card__header {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.card__header--sticky {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card__title {
  margin: 0;
}

.card__title--highlighted {
  color: #ff6347;
  font-weight: bold;
}

.card__content {
  font-size: 1rem;
  color: #555;
}

.card__button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

/* Modifier for Primary Button */
.card__button--primary {
  background-color: #0056b3;
}

.card__button--disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.card__button:hover {
  background-color: #004085;
}
```

### Breakdown of BEM Modifiers

- **`card--featured`, `card--large`**: Modifiers on the **card block** for different versions of the card.
- **`card__header--sticky`**: A modifier applied to the **header element**, indicating it should be fixed in place.
- **`card__title--highlighted`**: A modifier for the **title element** to highlight it.
- **`card__button--primary`, `card__button--disabled`**: Modifiers for the **button element** to style it as the primary button, as well as disabled.
