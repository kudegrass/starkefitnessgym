document.addEventListener('DOMContentLoaded', () => {
    feather.replace(); // Initialize Feather Icons
    AOS.init(); // Initialize AOS animations
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const toggleIcon = document.getElementById('sidebar-toggle-icon');
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('ml-80');
    toggleIcon.setAttribute('data-feather', sidebar.classList.contains('collapsed') ? 'chevron-right' : 'chevron-left');
    feather.replace();
}

function loadSection(sectionId) {
    const sections = ['dashboard', 'members', 'payments', 'attendance', 'reports', 'pricing', 'settings'];
    sections.forEach(id => {
        const section = document.getElementById(`${id}-section`);
        if (section) section.classList.add('hidden');
    });
    const activeSection = document.getElementById(`${sectionId}-section`);
    if (activeSection) activeSection.classList.remove('hidden');
    document.getElementById('section-title').textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active-nav'));
    const activeNav = document.querySelector(`.nav-item[onclick="loadSection('${sectionId}')"]`);
    if (activeNav) activeNav.classList.add('active-nav');
}

function showAddMemberModal() {
    alert('Add Member modal is not implemented yet.');
}

function showRecordPaymentModal() {
    alert('Record Payment modal is not implemented yet.');
}

function showAddPlanModal() {
    alert('Add Plan modal is not implemented yet.');
}

function viewMemberDetails(memberId) {
    alert(`Viewing details for member ID: ${memberId}`);
}

function editMember(memberId) {
    alert(`Editing member ID: ${memberId}`);
}

function confirmDeleteMember(memberId) {
    if (confirm(`Are you sure you want to delete member ID: ${memberId}?`)) {
        alert(`Member ID ${memberId} deleted.`);
    }
}

function viewPaymentDetails(paymentId) {
    alert(`Viewing details for payment ID: ${paymentId}`);
}

function printReceipt(paymentId) {
    alert(`Printing receipt for payment ID: ${paymentId}`);
}

function markAsPaid(paymentId) {
    alert(`Marked payment ID ${paymentId} as paid.`);
}

function generateMonthlyReport() {
    alert('Generating monthly report as PDF.');
}

function exportTransactionsToPDF() {
    alert('Exporting transactions to PDF.');
}
