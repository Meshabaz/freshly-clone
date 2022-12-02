function planNav() {
  return `
    <div class="container-fluid ">
            <a class="navbar-brand" href="#">
                <img class="freshly_logo" src="assets/Freshly__Logo.jpg" alt="">
                <img class="back_freshly_logo" src="assets/backIcon.png" alt="">
            </a>
            <div class="nav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Plans </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">
                            <img src="assets/Arrows-Forward-icon.png" alt="">
                            &nbsp; Day </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">
                            <img src="assets/Arrows-Forward-icon.png" alt="">
                            &nbsp; Meals </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">
                            <img src="assets/Arrows-Forward-icon.png" alt="">
                            &nbsp; Checkout
                        </a>
                    </li>
                </ul>
            </div>

            <ul class="nav nav-pills ">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img class="questionMark_Logo" src="assets/question.png" alt="">
                        <span class="customer_support_text">Customer Support</span>
                    </a>
                    <ul class="customer_support_dropdown dropdown-menu ">
                        <li>
                            <a class="customer_support_dropdown_item first_option" href="#">
                                <img class="customer_support_dropdown_item_image" src="assets/chat.png" alt="">
                                <span class="customer_support_dropdown_item_text">Live Chat</span>
                            </a>
                        </li>
                        <li><a class="customer_support_dropdown_item " href="#">
                                <img class="customer_support_dropdown_item_image" src="assets/smartphone.png" alt="">
                                <span class="customer_support_dropdown_item_text">1-844-373-7459</span>
                            </a></li>
                    </ul>
                </li>
            </ul>
        </div>`;
}
export default planNav;
