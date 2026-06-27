// 小黑 — black body with red scarf
window.CHARACTERS.push({
  id: 'fire',
  name: '小黑',
  draw: function(ctx, r) {
    // Black body
    var g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.08, 0, 0, r);
    g.addColorStop(0, '#555');
    g.addColorStop(0.35, '#1a1a1a');
    g.addColorStop(1, '#000');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    // Clip to circle for scarf body
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.clip();
    // Dark red base band
    ctx.fillStyle = '#b51515';
    ctx.beginPath();
    ctx.ellipse(0, r * 0.22, r * 0.86, r * 0.36, 0, 0, Math.PI * 2);
    ctx.fill();
    // Brighter red highlight
    ctx.fillStyle = '#e02525';
    ctx.beginPath();
    ctx.ellipse(0, r * 0.13, r * 0.66, r * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
});
