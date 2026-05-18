$(document).ready(function() {
    $('#btnSubmit').on('click', function() {
        // 1. Ambil semua nilai input sekaligus
        let nama = $('#inputNama').val();
        let email = $('#inputEmail').val();
        let nim = $('#inputNim').val();

        // 2. Validasi singkat: jika ada salah satu yang kosong, stop!
        if (!nama || !email || !nim) return alert("Harap isi semua data!");

        // 3. Langsung buat elemen dan masukkan (append) ke #result dalam satu baris!
        $('#result').append(
            $('<p>').text(nama).addClass('nama'),
            $('<p>').text(email).addClass('email'),
            $('<p>').text(nim).addClass('nim')
        );

        // 4. Bersihkan semua input sekaligus menggunakan selektor grup
        $('#inputNama, #inputEmail, #inputNim').val('');
    });
});