$(document).ready(function() {
    // Menangkap event klik pada tombol simpan
    $('#btnSubmit').on('click', function() {

        // Mengambil nilai (value) dari masing-masing input menggunakan jQuery
        let newName = $('#inputNama').val();
        let newEmail = $('#inputEmail').val();
        let newNim = $('#inputNim').val();

        // Validasi sederhana agar tidak memasukkan data kosong
        if (newName === "" || newEmail === "" || newNim === "") {
            alert("Harap isi semua data terlebih dahulu!");
            return;
        }

        // Membuat elemen paragraph baru sekalian memberikan class dan teks menggunakan jQuery
        let pNama = $('<p></p>').text(newName).addClass('nama');
        let pEmail = $('<p></p>').text(newEmail).addClass('email');
        let pNim = $('<p></p>').text(newNim).addClass('nim');
        
        // Memasukkan (append) elemen baru ke dalam div #result
        $('#result').append(pNama, pEmail, pNim);

        // Opsional: Mengosongkan form kembali setelah disimpan
        $('#inputNama').val('');
        $('#inputEmail').val('');
        $('#inputNim').val('');
    });
});