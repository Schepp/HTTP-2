sudo apt-get update
sudo apt-get -y install apache2
a2enmod headers
a2enmod expires
a2enmod ssl
a2ensite default-ssl
sed -i '/AllowOverride None/c AllowOverride All' /etc/apache2/sites-available/default
sed -i '/AllowOverride None/c AllowOverride All' /etc/apache2/sites-available/default-ssl
cd /tmp
wget https://dl-ssl.google.com/dl/linux/direct/mod-spdy-beta_current_amd64.deb
dpkg -i mod-spdy-*.deb
apt-get -f install
a2enmod spdy
service apache2 restart