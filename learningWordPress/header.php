<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=devoce-width">
	<title><?php bloginfo('name'); ?></title>
	<?php wp_head(); ?>
</head>
<body<?php body_class(); ?>>
	<div class="container">
		<!-- site-header -->
		<header class="site-header">
			<!-- header-serach-->
			<div class="hd-search">
				<?php get_search_form(); ?>
			</div>
		
			<h1><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
			<h5><?php bloginfo('description'); ?> <?php if(is_page("social-media")) { ?>  <!-- 14 - social media page -->
				- Dziękujemy za odwiedzenie naszej strony!
			<?php }?></h5>
			
			<!-- site-nav -->
			<nav class="site-nav">
				<?php
					$args = array(
						'theme_location' => 'primary'
					);
				?>
				<?php wp_nav_menu($args); ?>
			</nav>
		</header>