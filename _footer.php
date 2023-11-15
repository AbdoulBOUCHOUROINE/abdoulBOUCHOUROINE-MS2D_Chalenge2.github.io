<footer class="text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
        <!-- Section: Social media -->
        <section class="mb-4">
            <!-- Google -->
            <a class="btn btn-primary btn-floating m-1" style="background-color: #dd4b39" href="#!" role="button"><i
                    class="fab fa-google"></i></a>
            <!-- Linkedin -->
            <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca" href="#!" role="button"><i
                    class="fab fa-linkedin-in"></i></a>
            <!-- Github -->
            <a class="btn btn-primary btn-floating m-1" style="background-color: #333333" href="#!" role="button"><i
                    class="fab fa-github"></i></a>
        </section>
        <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <?php $dateDuJour = new DateTime();?>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    <?php if ( $dateDuJour->format("Y") > 2023) {
      echo '© 2023'  . $dateDuJour->format("Y"). 'Copyright:';
    }else {
      echo '© 2023 Copyright:';
    }?> <span class="text-white" href="#">BOUCHOUROINE Abdoul</span>
      </div>
      <!-- Copyright -->
    </footer>