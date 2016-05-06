#### simple template app in angular js
##### nginx config
______________________________________

server {
        listen *:80;
        server_name ng-app.local;
        root /home/workspace/src/ng-app;
        index index.php;

        sendfile off;

        location / {
                index index.html;
                try_files $uri $uri/ /index.html;
                add_header Content-Security-Policy "
                default-src 'self' 'unsafe-inline' https: http:;
                ";
        }

        location ~* ^.+.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt)$ {
                access_log        off;
                expires           max;
        }

        location ~ \.php$ {
                try_files $uri =404;

                fastcgi_pass unix:/var/run/php-fpm/dev.socket;
                fastcgi_index index.php;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                fastcgi_buffer_size 256k;
                fastcgi_buffers 8 512k;

                include /etc/nginx/fastcgi_params;
        }
}