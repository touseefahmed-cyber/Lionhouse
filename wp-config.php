<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'devlionhouse_db');


/** MySQL database username */
define('DB_USER', 'devlionhouse');


/** MySQL database password */
define('DB_PASSWORD', 'JMp9pmHsbbKb2Ze5ZdOZtS');


/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/** User: lionhouseadmin <===> Password: lionhouse@123 */

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^.W|f^qi^oScii?f67iZd`M&tX$aOsm,VdGUEar_@O|m?A2zx}!qR$t;y~dz|u`9' );
define( 'SECURE_AUTH_KEY',  '3g2]d~T/]7J7dPU]Br>JBdEsZZz!w-d>XV.2QF/7TGfCN)1}K|jGKV+#b2DHnyHl' );
define( 'LOGGED_IN_KEY',    'h</TyhrsJZ7*WrEn.O.!Q[`{FyJ,uvs1L2t2h?s#-Nn~5v5G*0KFdvK)h|}fx&pI' );
define( 'NONCE_KEY',        '9P5<Q/17qR5<Po9x69PNmC &XSO(6vWjY<.Wnl=UlG~?qV i>h~sbS.yJW[in?nC' );
define( 'AUTH_SALT',        'oBoa?]c@hD(&4f*W?#EC*H}IRQrmL&T,wfE;*Uz^(s|0s9cYA}C>{z,%W&_F[$AS' );
define( 'SECURE_AUTH_SALT', 'z$7RpIu`Er<$9DIme`Hv4p*_tsTj@1@KWblSTsO1bzSzB@;%VV4ZGeF#Ag{Sf:}!' );
define( 'LOGGED_IN_SALT',   '&S=S~oR7;bG+GwbG`Ph)qzeh>[%)V4U~Hv&u-`%l1Vfa51>tTw?nu;=/lR,Oyjnn' );
define( 'NONCE_SALT',       'J5LFI(&pg6xWlQBI4bh688;~M5h!_OsK@%xxmdG/(QWU8S<0@W*<CsC~jD@*)UUh' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'lh_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';