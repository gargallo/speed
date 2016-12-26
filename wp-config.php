<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wpdetect_wpspeed');

/** MySQL database username */
define('DB_USER', 'wpdetect_wpspeed');

/** MySQL database password */
define('DB_PASSWORD', ']S2@dp62pk');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3ai70op2jrz8dlrtvaebklsrsvksxdtzkjixydex0x0ml2j9gdiffyvcnfw6jwng');
define('SECURE_AUTH_KEY',  'ke6zbtnsvxntxc8tzzgulyr8z0lmsvrpxxyqpmnwscosatpfonpfdrksj75z77z4');
define('LOGGED_IN_KEY',    '9odobua4wr6acvsylbd33eh5ahyljddm2yypzrn0fum3qmo3z1fbeachhnigl1rz');
define('NONCE_KEY',        'zrpznhm8q9x7opdm9ubbjlvd0xldjkccgs9gl6athflu4xxiqelpu6btivifufp2');
define('AUTH_SALT',        'f1abbnzg0ocvesax3ivomz4qxgihpweq2u2rmpq3emxeuyl9knrfzwzkunlcccf0');
define('SECURE_AUTH_SALT', 'xvflmh3ommbeqni6weumgfclmlvhd92wfaccwfe5kbmzd9ravboazslqgykeq5sh');
define('LOGGED_IN_SALT',   'sh7yvnb12sget3scwfeqcpnhfkovwrdbunxatxlqksoqnutt1pmxmddxf0oxaghg');
define('NONCE_SALT',       'llgyaxmtfoef6f8by8hkb5gm8uhzzblazrtijaqxjaun6meuptb3jxx818izxab8');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'gar654_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define( 'WP_MEMORY_LIMIT', '128M' );
define( 'WP_AUTO_UPDATE_CORE', false );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
