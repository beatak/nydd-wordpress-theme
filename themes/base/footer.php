<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

	</div><!-- #main -->
</div><!-- #page -->

<footer id="colophon" role="contentinfo">
  <?php
    /* A sidebar in the footer? Yep. You can can customize
     * your footer with three columns of widgets.
     */
    if ( ! is_404() )
      get_sidebar( 'footer' );
  ?>
	<div id="site-generator">
    <?php do_action( 'twentyeleven_credits' ); ?>
    <a href="<?php echo esc_url( __( 'http://wordpress.org/', 'twentyeleven' ) ); ?>" title="<?php esc_attr_e( 'Semantic Personal Publishing Platform', 'twentyeleven' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'twentyeleven' ), 'WordPress' ); ?></a>
  </div>
</footer><!-- #colophon -->

<?php wp_footer(); ?>

<?php
global $arr_script_src;
if (!empty($arr_script_src)) {
  foreach($arr_script_src as $handle => $src) {
    echo "<script type=\"text/javascript\" src=\"$src\"></script>\n";
  }
}

global $arr_script_data;
if (!empty($arr_script_data)) {
  echo "<script type=\"text/javascript\">\n";
  echo implode("\n", $arr_script_data);
  echo "</script>\n";
  } 
?>

</body>
</html>