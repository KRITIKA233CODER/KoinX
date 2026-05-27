# Tax Components

## GainsCard

Displays your capital gains breakdown at a glance.

### What it does
Shows short-term and long-term capital gains/losses with:
- Profits and losses separated by holding period
- Net capital gains calculation
- Total realized gains
- Potential tax savings (if applicable)

### Props
- **title** - Card heading (e.g., "Your Portfolio")
- **variant** - Visual style: `"default"` (light) or `"primary"` (blue highlight)
- **gains** - Capital gains data object
  - `stcgProfits` - Short-term capital gains
  - `stcgLosses` - Short-term capital losses
  - `ltcgProfits` - Long-term capital gains
  - `ltcgLosses` - Long-term capital losses
- **savings** (optional) - Potential tax savings amount

### Example
```tsx
<GainsCard
  title="Portfolio Summary"
  variant="primary"
  gains={{
    stcgProfits: 5000,
    stcgLosses: 1000,
    ltcgProfits: 10000,
    ltcgLosses: 2000,
  }}
  savings={1500}
/>
```
