// 阿力 — white panda with black truncated cone hat and golden X
window.CHARACTERS.push({
  id: 'thunder',
  name: '阿力',
  draw: function(ctx, r) {
    // Ears (black, behind head)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-r * 0.5, -r * 0.55, r * 0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(r * 0.5, -r * 0.55, r * 0.18, 0, Math.PI * 2);
    ctx.fill();
    // White panda head
    var g = ctx.createRadialGradient(-r * 0.2, -r * 0.2, r * 0.04, 0, 0, r);
    g.addColorStop(0, '#fff');
    g.addColorStop(0.4, '#f5f1ea');
    g.addColorStop(1, '#d5cec2');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    // Panda eye patches
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(-r * 0.3, r * 0.08, r * 0.16, r * 0.22, -0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(r * 0.3, r * 0.08, r * 0.16, r * 0.22, 0.08, 0, Math.PI * 2);
    ctx.fill();
    // Eye highlights
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(-r * 0.26, r * 0.05, r * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(r * 0.34, r * 0.05, r * 0.05, 0, Math.PI * 2);
    ctx.fill();
    // Nose
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.ellipse(0, r * 0.18, r * 0.04, r * 0.03, 0, 0, Math.PI * 2);
    ctx.fill();
    // Mouth
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(-r * 0.05, r * 0.22);
    ctx.quadraticCurveTo(0, r * 0.28, r * 0.05, r * 0.22);
    ctx.stroke();
    // Black truncated cone hat
    ctx.save();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(-r * 1.3, -r * 0.1);
    ctx.lineTo(-r * 0.65, -r * 0.8);
    ctx.lineTo(r * 0.65, -r * 0.8);
    ctx.lineTo(r * 1.3, -r * 0.1);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 0.6;
    ctx.stroke();
    // Golden X mark (rgb(255,201,14)) on hat front
    ctx.strokeStyle = 'rgba(255,200,15,0.28)';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-r * 0.15, -r * 0.65);
    ctx.lineTo(r * 0.15, -r * 0.35);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(r * 0.15, -r * 0.65);
    ctx.lineTo(-r * 0.15, -r * 0.35);
    ctx.stroke();
    ctx.strokeStyle = 'rgb(255,201,14)';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(-r * 0.15, -r * 0.65);
    ctx.lineTo(r * 0.15, -r * 0.35);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(r * 0.15, -r * 0.65);
    ctx.lineTo(-r * 0.15, -r * 0.35);
    ctx.stroke();
    ctx.restore();
  }
});
