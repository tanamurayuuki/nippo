document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-tab');
    const articles = document.querySelectorAll('.article-card');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // アクティブタブを変更
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 記事をフィルタリング
            articles.forEach(article => {
                const level = article.getAttribute('data-level');
                
                if (filter === 'all') {
                    article.classList.remove('hidden');
                } else {
                    if (level === filter) {
                        article.classList.remove('hidden');
                    } else {
                        article.classList.add('hidden');
                    }
                }
            });
        });
    });
});