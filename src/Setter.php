<?php
namespace Waxedphp\Lightbox;

use \Waxedphp\Waxedphp\Php\Setters\AbstractSetter;

class Setter extends AbstractSetter {

  /**
  * false If true, the left and right navigation arrows which appear on mouse hover when viewing image sets will always be visible on devices which support touch.
  * @var ?bool $alwaysShowNavOnTouchDevices
  */
  protected ?bool $alwaysShowNavOnTouchDevices = null;

  /**
  * "Image %1 of %2"  The text displayed below the caption when viewing an image set. The default text shows the current image number and the total number of images in the set.
  * @var ?string $albumLabel
  */
  protected ?string $albumLabel = null;

  /**
  * false If true, prevent the page from scrolling while Lightbox is open. This works by settings overflow hidden on the body.
  * @var ?bool $disableScrolling
  */
  protected ?bool $disableScrolling = null;

  /**
  * 600  The time it takes for the Lightbox container and overlay to fade in and out, in milliseconds.
  * @var ?int $fadeDuration
  */
  protected ?int $fadeDuration = null;

  /**
  * fitImagesInViewport  true  If true, resize images that would extend outside of the viewport so they fit neatly inside of it. This saves the user from having to scroll to see the entire image.
  * @var ?bool $fitImagesInViewport
  */
  protected ?bool $fitImagesInViewport = null;

  /**
  * imageFadeDuration   600   The time it takes for the image to fade in once loaded, in milliseconds.
  * @var ?int $imageFadeDuration
  */
  protected ?int $imageFadeDuration = null;

  /**
  * maxWidth      If set, the image width will be limited to this number, in pixels. Aspect ratio will not be maintained.
  * @var ?int $maxWidth
  */
  protected ?int $maxWidth = null;

  /**
  * If set, the image height will be limited to this number, in pixels. Aspect ratio will not be maintained.
  * @var ?int $maxHeight
  */
  protected ?int $maxHeight = null;

  /**
  * 50  The distance from top of viewport that the Lightbox container will appear, in pixels.
  * @var ?int $positionFromTop
  */
  protected ?int $positionFromTop = null;

  /**
  * 700   The time it takes for the Lightbox container to animate its width and height when transition between different size images, in milliseconds.
  * @var ?int $resizeDuration
  */
  protected ?int $resizeDuration = null;

  /**
  * showImageNumberLabel   true  If false, the text indicating the current image number and the total number of images in set (Ex. "image 2 of 4") will be hidden.
  * @var ?bool $showImageNumberLabel
  */
  protected ?bool $showImageNumberLabel = null;

  /**
  * false   If true, when a user reaches the last image in a set, the right navigation arrow will appear and they will be to continue moving forward which will take them back to the first image in the set.
  * @var ?bool $wrapAround
  */
  protected ?bool $wrapAround = null;

  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
    'alwaysShowNavOnTouchDevices', 'albumLabel', 'disableScrolling',
    'fadeDuration', 'resizeDuration', 'imageFadeDuration',
    'fitImagesInViewport', 'maxWidth', 'maxHeight', 'positionFromTop',
    'showImageNumberLabel', 'wrapAround'
  ];

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value): array {
    $a = [];
    $b = $this->getArrayOfAllowedOptions();
    if (!empty($b)) {
      $a['config'] = $b;
    }
    $a['value'] = $value;
    return $a;
  }

}
