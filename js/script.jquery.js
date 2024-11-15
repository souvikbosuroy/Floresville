<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

$(document).ready(function(){
    $('.drop-down-arrow').click(function(){
        $(this).toggleClass('fa-angle-up')
        $('.drop-down-menu').toggle()
    })
})