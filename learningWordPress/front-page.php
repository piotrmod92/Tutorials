<?php

get_header(); ?>

<div class="site-content clearfix">
	<?php if (have_posts()) :
		while (have_posts()) : the_post();
		the_content();
		endwhile;
	else :
		echo '<p>No content found</p>';
	endif;  ?>
	
	<div class="home-columns clearfix">
		<div class="one-half">
			<?php
		// politics posts loop begins here
		$politicsPosts = new WP_Query('cat=6&posts_per_page=2');
		if ($politicsPosts->have_posts()) :
			while ($politicsPosts->have_posts()) : $politicsPosts->the_post(); ?>
			<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			<span class="subtle-date"><?php the_time('n/j/Y'); ?></span></h4>
			<?php the_excerpt(); ?>
			<?php endwhile;
		else :
			echo '<p>No content found</p>';
		endif; 
		wp_reset_postdata();?>
		</div>
		
		<div class="one-half last">
			<?php
		// news posts loop begins here
		$newsPosts = new WP_Query('cat=10&posts_per_page=2');
		if ($newsPosts->have_posts()) :
			while ($newsPosts->have_posts()) : $newsPosts->the_post(); ?>
			<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			<span class="subtle-date"><?php the_time('n/j/Y'); ?></span></h4>
			<?php the_excerpt(); ?>
			<?php endwhile;
		else :
			echo '<p>No content found</p>';
		endif; 
		wp_reset_postdata();?>
		</div>
	</div>
</div>
<?php get_footer();

?>
