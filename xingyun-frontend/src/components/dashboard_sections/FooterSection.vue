<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="copyright">© 2024 星云 Nebula Project.</p>
      <div class="footer-links">
        <span>关于我们</span>
        <span>联系合作</span>
        <span>隐私政策</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 40px;
  scroll-snap-align: end;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links span {
  cursor: pointer;
  transition: color 0.2s;
}

.footer-links span:hover {
  color: #fff;
}
</style>
