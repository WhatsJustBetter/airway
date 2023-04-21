# Buttons

Use the `btn-[color]` classes for buttons.
Do not use a color weight.

You dont need to add a `btn` class, 
as it is already applied with `btn-[color]`.
If you want a base button and custom colors,
then you can do: 
```js
btn bg-[color]-[weight] text-[color] 
```

![Buttons](https://cdn.discordapp.com/attachments/841821480089944098/1098754503848775773/image.png)

## Applied CSS
- .btn
```css
.btn { @apply px-4 py-2 rounded-md font-medium }
.btn:active { --tw-bg-opacity: 0.8; }
```
- .btn-red
```css
.btn-red { @apply btn bg-red-500 text-white }
```
- .btn-orange
```css
.btn-orange { @apply btn bg-orange-500 text-white }
```
- .btn-amber
```css
.btn-amber { @apply btn bg-amber-500 text-white }
```
- .btn-yellow
```css
.btn-yellow { @apply btn bg-yellow-500 text-white }
```
- .btn-lime
```css
.btn-lime { @apply btn bg-lime-500 text-white }
```
- .btn-green
```css
.btn-green { @apply btn bg-green-500 text-white }
```
- .btn-emerald
```css
.btn-emerald { @apply btn bg-emerald-500 text-white }
```
- .btn-sky
```css
.btn-sky { @apply btn bg-sky-500 text-white }
```
- .btn-teal
```css
.btn-teal { @apply btn bg-teal-500 text-white }
```
- .btn-cyan
```css
.btn-cyan { @apply btn bg-cyan-500 text-white }
```
- .btn-blue
```css
.btn-blue { @apply btn bg-blue-500 text-white }
```
- .btn-indigo
```css
.btn-indigo { @apply btn bg-indigo-500 text-white }
```
- .btn-violet
```css
.btn-violet { @apply btn bg-violet-500 text-white }
```
- .btn-purple
```css
.btn-purple { @apply btn bg-purple-500 text-white }
```
- .btn-fuchsia
```css
.btn-fuchsia { @apply btn bg-fuchsia-500 text-white }
```
- .btn-pink
```css
.btn-pink { @apply btn bg-pink-300 text-white }
```
- .btn-rose
```css
.btn-rose { @apply btn bg-rose-500 text-white }
```
- .btn-light
```css
.btn-light { @apply btn bg-neutral-100 text-gray-900 }
```
- .btn-white
```css
.btn-white { @apply btn bg-white text-gray-900 }
```
- .btn-grey
```css
.btn-grey { @apply btn bg-gray-500 text-white }
```
- .btn-zinc
```css
.btn-zinc { @apply btn bg-zinc-500 text-white }
```
- .btn-neutral
```css
.btn-neutral { @apply btn bg-neutral-500 text-white }
```
- .btn-stone
```css
.btn-stone { @apply btn bg-stone-500 text-white }
```
- .btn-dark
```css
.btn-dark { @apply btn bg-zinc-800 text-white }
```
- .btn-black
```css
.btn-black { @apply btn bg-black text-white }
```
