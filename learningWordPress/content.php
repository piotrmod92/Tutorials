<article class="post <?php if( has_post_thumbnail() ) { ?> has-thumbnail <?php }?> ">
	<div class="post-thumbnail">
		<a href="<?php the_permalink();?>"><?php the_post_thumbnail('small-thumbnail'); ?></a>
	</div>
	<h2><a href="<?php the_permalink(); ?>"> <?php the_title(); ?> </a></h2>
	<p class="post-info"><?php the_time('j M Y, G:i'); ?> | by <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>"><?php the_author(); ?></a> | Posted in
	<?php
		$categories = get_the_category();
		$separator = ", ";
		$output = '';
		if($categories)
		{
			foreach ($categories as $cat)
			{
				$output .= '<a href="' . get_category_link($cat->term_id) . '">'. $cat->cat_name . '</a>' . $separator;
			}
			echo trim($output, $separator);
		}
	?>
	</p>
	<?php if ($post->post_excerpt) { ?>
		<!-- <?php  the_content('Continue reading &raquo;'); ?> -->
		<div class="excerpt-preview">
			<?php echo get_the_excerpt(); ?>
			<a href="<?php the_permalink(); ?>">Read more&raquo;</a>
		</div>
	<?php } else if ( get_post_format( $post_id ) == 'gallery'){ ?>
		<div class="excerpt-preview">
			<?php the_content(); ?>
		</div>
	<?php } else { ?>
		<div class="excerpt-preview">
			<?php the_excerpt(); ?>
		</div> <!-- or the_content(); choose preferred one -->
	<?php }?>
</article>