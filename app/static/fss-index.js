function prevent_double_submission() {
  var self = this;
  $(":submit", self).prop("disabled", true);
  setTimeout(function() {
    $(":submit", self).prop("disabled", false);
  }, 10000);
});

$('#wizard-form').submit(prevent_double_submission);
$('#upload-form').submit(prevent_double_submission);

// preview
function apply_style() {

  const elems = [['bg-color', '.fessWrapper', 'background-color'],
                 ['button-color', '.fessWrapper #searchButton', 'background-color']];

  elems.forEach(function(e) {
    const label = '#wizard-form [name=' + e[0] +']';
    const val = $(label).val();
    if (val) {
      $("#preview-iframe").contents().find(e[1]).css(e[2], val);
    }
  });
}