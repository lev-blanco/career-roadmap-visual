# Design Review Notes

## Current State
- Hero section renders well: dark aerospace background with teal circuit traces, white text on dark bg — good contrast
- Left side nav with icons works, teal highlight on active section
- Metric badges (Target, Location, Investment) render correctly with frosted glass effect
- Pillars section visible below hero
- All 11 section components are created and TypeScript reports 0 errors
- Dev server is running

## Improvements Needed
1. The App.tsx still uses defaultTheme="light" — keep it since most sections are light bg
2. Need to verify all sections scroll properly
3. The side nav background should be slightly more opaque for better visibility
4. Consider adding a mobile header nav since side nav is hidden on mobile
