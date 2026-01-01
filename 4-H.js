 
        function showSection(sectionName) {
            document.querySelectorAll('section').forEach(s => {
                s.classList.remove('visible');
                s.classList.add('hidden');
            });
            document.getElementById(sectionName + '-section').classList.remove('hidden');
            document.getElementById(sectionName + '-section').classList.add('visible');
            updateNavLinks(sectionName);
            window.scrollTo(0, 0);
        }

        function updateNavLinks(sectionName) {
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active');
            });
            event.target?.classList.add('active');
        }

        function switchTab(e, tabName) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.getElementById(tabName).classList.add('active');
            e.target.classList.add('active');
        }

        function scrollToTab(tabName) {
            const tab = document.querySelector(`button[onclick="switchTab(event, '${tabName}')"]`);
            if (tab) {
                tab.click();
            }
        }

        function handleContactSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert('Thank you! Message from ' + name + ' received. We\'ll get back to you at ' + email + ' shortly.');
            e.target.reset();
        }

        function selectAmount(amount) {
            document.getElementById('custom-amount').value = amount;
        }

        function processDonation() {
            const amount = document.getElementById('custom-amount').value;
            if (amount) {
                alert('Thank you for your donation of $' + amount + '! Your support makes a difference.');
                document.getElementById('custom-amount').value = '';
            } else {
                alert('Please enter a donation amount.');
            }
        }

        
    