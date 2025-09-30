document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const menuContents = document.querySelectorAll('.menu-content');
    const textInput = document.getElementById('text-input');
    const addTextBtn = document.getElementById('add-text-btn');
    const fontFamily = document.getElementById('font-family');
    const fontSize = document.getElementById('font-size');
    const fontSizeValue = document.getElementById('font-size-value');
    const letterSpacing = document.getElementById('letter-spacing');
    const letterSpacingValue = document.getElementById('letter-spacing-value');
    const lineHeight = document.getElementById('line-height');
    const lineHeightValue = document.getElementById('line-height-value');
    const boldBtn = document.getElementById('bold-btn');
    const italicBtn = document.getElementById('italic-btn');
    const underlineBtn = document.getElementById('underline-btn');
    const strikeBtn = document.getElementById('strike-btn');
    const alignLeftBtn = document.getElementById('align-left-btn');
    const alignCenterBtn = document.getElementById('align-center-btn');
    const alignRightBtn = document.getElementById('align-right-btn');
    const alignJustifyBtn = document.getElementById('align-justify-btn');
    const colorOptions = document.querySelectorAll('.color-option');
    const uploadArea = document.getElementById('upload-area');
    const imageUpload = document.getElementById('image-upload');
    const imageGallery = document.getElementById('image-gallery');
    const imageSizeControls = document.getElementById('image-size-controls');
    const imageStyleControls = document.getElementById('image-style-controls');
    const imageWidth = document.getElementById('image-width');
    const imageHeight = document.getElementById('image-height');
    const maintainAspect = document.getElementById('maintain-aspect');
    const applyImageSize = document.getElementById('apply-image-size');
    const replaceImageBtn = document.getElementById('replace-image-btn');
    const presetSizes = document.querySelectorAll('.preset-size');
    const cardFront = document.getElementById('card-front');
    const cardBack = document.getElementById('card-back');
    const frontBtn = document.getElementById('front-btn');
    const backBtn = document.getElementById('back-btn');
    const downloadBtn = document.getElementById('download-btn');
    const previewBtn = document.getElementById('preview-btn');
    const notification = document.getElementById('notification');
    const bgOptions = document.querySelectorAll('.bg-option');
    const bgUploadArea = document.getElementById('bg-upload-area');
    const bgImageUpload = document.getElementById('bg-image-upload');
    const replaceBgBtn = document.getElementById('replace-bg-btn');
    const layersList = document.getElementById('layers-list');
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');
    const undoHeaderBtn = document.getElementById('undo-header-btn');
    const redoHeaderBtn = document.getElementById('redo-header-btn');
    const selectTool = document.getElementById('select-tool');
    const textTool = document.getElementById('text-tool');
    const orientationToggle = document.getElementById('orientation-toggle');
    const gridToggle = document.getElementById('grid-toggle');
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const zoomFit = document.getElementById('zoom-fit');
    const gridOverlay = document.getElementById('grid-overlay');
    const previewModal = document.getElementById('preview-modal');
    const closePreviewBtn = document.getElementById('close-preview-btn');
    const previewFrontBtn = document.getElementById('preview-front-btn');
    const previewBackBtn = document.getElementById('preview-back-btn');
    const previewCardFront = document.getElementById('preview-card-front');
    const previewCardBack = document.getElementById('preview-card-back');
    const textColorPicker = document.getElementById('text-color-picker');
    const customBgColorPicker = document.getElementById('custom-bg-color-picker');
    const shadowH = document.getElementById('shadow-h');
    const shadowV = document.getElementById('shadow-v');
    const shadowBlur = document.getElementById('shadow-blur');
    const shadowColorPicker = document.getElementById('shadow-color-picker');
    const outlineWidth = document.getElementById('outline-width');
    const outlineColorPicker = document.getElementById('outline-color-picker');
    const gradientTypeBtns = document.querySelectorAll('.gradient-type button');
    const addGradientStop = document.querySelector('.add-gradient-stop');
    const gradientStopsContainer = document.querySelector('.gradient-stops');
    const downloadModal = document.getElementById('download-modal');
    const closeDownloadModalBtn = document.getElementById('close-download-modal-btn');
    const cancelDownloadBtn = document.getElementById('cancel-download-btn');
    const confirmDownloadBtn = document.getElementById('confirm-download-btn');
    const pngQuality = document.getElementById('png-quality');
    const pngQualityValue = document.getElementById('png-quality-value');
    const templatesGrid = document.getElementById('templates-grid');
    const styleOptions = document.querySelectorAll('.style-option');
    const closeMenuBtns = document.querySelectorAll('.close-menu-btn');
    const shapesGrid = document.getElementById('shapes-grid');
    const shapeProperties = document.getElementById('shape-properties');
    const shapeFillColor = document.getElementById('shape-fill-color');
    const shapeStrokeColor = document.getElementById('shape-stroke-color');
    const shapeStrokeWidth = document.getElementById('shape-stroke-width');
    const shapeStrokeWidthValue = document.getElementById('shape-stroke-width-value');
    const graphicsSearchInput = document.getElementById('graphics-search-input');
    const iconsGrid = document.getElementById('icons-grid');
    const elementSize = document.getElementById('element-size');
    const elementSizeValue = document.getElementById('element-size-value');
    const elementSizeGroup = document.getElementById('element-size-group');
    const tableColsInput = document.getElementById('table-cols');
    const tableRowsInput = document.getElementById('table-rows');
    const addTableBtn = document.getElementById('add-table-btn');
    const tableColsPlus = document.getElementById('table-cols-plus');
    const tableColsMinus = document.getElementById('table-cols-minus');
    const tableRowsPlus = document.getElementById('table-rows-plus');
    const tableRowsMinus = document.getElementById('table-rows-minus');
    const tableTextControls = document.getElementById('table-text-controls');
    const tableFontFamily = document.getElementById('table-font-family');
    const tableFontSize = document.getElementById('table-font-size');
    const tableFontSizeValue = document.getElementById('table-font-size-value');
    const tableBoldBtn = document.getElementById('table-bold-btn');
    const tableItalicBtn = document.getElementById('table-italic-btn');
    const tableUnderlineBtn = document.getElementById('table-underline-btn');
    const tableAlignLeftBtn = document.getElementById('table-align-left-btn');
    const tableAlignCenterBtn = document.getElementById('table-align-center-btn');
    const tableAlignRightBtn = document.getElementById('table-align-right-btn');
    const tableTextColorPicker = document.getElementById('table-text-color-picker');
    const orientationBtns = document.querySelectorAll('.orientation-btn');
    const cardContainer = document.getElementById('card-container');

    let selectedElement = null;
    let selectedTableCell = null;
    let isDragging = false;
    let isResizing = false;
    let isRotating = false;
    let startX, startY, startWidth, startHeight, startLeft, startTop, startAngle;
    let currentCard = 'front';
    let uploadedImages = [];
    let elementIdCounter = 0;
    let history = [];
    let historyStep = -1;
    let currentTool = 'select';
    let gridEnabled = false;
    let backgroundPattern = 'none';
    let backgroundImage = null;
    let currentZoom = 1;
    let currentGradient = 'linear';
    let originalImageRatio = 1;
    let cardOrientation = 'horizontal';

    const templates = {
        horizontal: [
            { name: 'Classic Blue', style: { background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }, elements: [ { type: 'text', content: 'John Doe', top: '30%', left: '50%', fontSize: '28px', color: '#FFFFFF', fontFamily: 'Montserrat' }, { type: 'text', content: 'Web Developer', top: '45%', left: '50%', fontSize: '16px', color: '#FFFFFF', fontFamily: 'Lato' }, { type: 'text', content: 'john.doe@example.com', top: '70%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Lato' } ] },
            { name: 'Minimalist White', style: { background: '#FFFFFF' }, elements: [ { type: 'text', content: 'JANE SMITH', top: '25%', left: '25%', fontSize: '24px', color: '#333333', fontFamily: 'Poppins' }, { type: 'text', content: 'Graphic Designer', top: '38%', left: '25%', fontSize: '14px', color: '#555555', fontFamily: 'Poppins' } ] },
            { name: 'Sunrise Gradient', style: { background: 'linear-gradient(to right, #ff9966, #ff5e62)' }, elements: [ { type: 'text', content: 'Your Name', top: '50%', left: '50%', fontSize: '32px', color: '#FFFFFF', fontFamily: 'Benchline', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' } ] },
            { name: 'Deep Space', style: { background: '#000000' }, elements: [ { type: 'text', content: 'STARGAZER INC.', top: '50%', left: '50%', fontSize: '22px', color: '#FFFFFF', fontFamily: 'Courier New', letterSpacing: '4px' } ] },
            { name: 'Emerald Green', style: { background: 'radial-gradient(circle, #233329, #06170A)' }, elements: [ { type: 'text', content: 'Eco Corp', top: '40%', left: '50%', fontSize: '30px', color: '#F0FFF0', fontFamily: 'Georgia' }, { type: 'text', content: 'Sustainable Solutions', top: '55%', left: '50%', fontSize: '14px', color: '#F0FFF0', fontFamily: 'Georgia' } ] },
            { name: 'Soft Pink', style: { background: '#fde2e4' }, elements: [ { type: 'text', content: 'Beauty Salon', top: '50%', left: '50%', fontSize: '26px', color: '#9d8189', fontFamily: 'Open Sans' } ] },
            { name: 'Corporate Gray', style: { background: 'linear-gradient(to right, #e9ecef, #ced4da)' }, elements: [ { type: 'text', content: 'BUSINESS CONSULTING', top: '35%', left: '50%', fontSize: '20px', color: '#212529', fontFamily: 'Roboto', fontWeight: 'bold' }, { type: 'text', content: 'info@business.com', top: '65%', left: '50%', fontSize: '14px', color: '#495057', fontFamily: 'Roboto' } ] },
            { name: 'Oceanic', style: { background: 'linear-gradient(45deg, #43cea2, #185a9d)' }, elements: [ { type: 'text', content: 'Aqua Tech', top: '50%', left: '50%', fontSize: '30px', color: '#ffffff', fontFamily: 'Verdana' } ] },
            { name: 'Vibrant Orange', style: { background: '#F7971E' }, elements: [ { type: 'text', content: 'Creative Agency', top: '50%', left: '50%', fontSize: '24px', color: '#ffffff', fontFamily: 'Arial' } ] },
            { name: 'Royal Purple', style: { background: 'linear-gradient(to top, #30154ae8, #8754b2)' }, elements: [ { type: 'text', content: 'LUXURY EVENTS', top: '50%', left: '50%', fontSize: '24px', color: '#f0e6ff', fontFamily: 'Times New Roman' } ] }
        ],
        vertical: [
            { name: 'Modern Vertical', style: { background: 'linear-gradient(to bottom, #434343, #000000)' }, elements: [ { type: 'text', content: 'John Doe', top: '20%', left: '50%', fontSize: '32px', color: '#FFFFFF', fontFamily: 'Montserrat' }, { type: 'text', content: 'Creative Director', top: '30%', left: '50%', fontSize: '18px', color: '#CCCCCC', fontFamily: 'Lato' }, { type: 'text', content: 'contact@johndoe.com', top: '80%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Lato' } ] },
            { name: 'Elegant Vertical', style: { background: '#f8f8f8' }, elements: [ { type: 'text', content: 'SOPHIA', top: '15%', left: '50%', fontSize: '36px', color: '#333333', fontFamily: 'Playfair Display' }, { type: 'text', content: 'Fashion Designer', top: '25%', left: '50%', fontSize: '16px', color: '#666666', fontFamily: 'Montserrat' }, { type: 'text', content: '+1 234 567 890', top: '85%', left: '50%', fontSize: '14px', color: '#333333', fontFamily: 'Montserrat' } ] },
            { name: 'Tech Vertical', style: { background: 'linear-gradient(to bottom, #0575E6, #021B79)' }, elements: [ { type: 'text', content: 'TECH SOLUTIONS', top: '20%', left: '50%', fontSize: '24px', color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 'bold' }, { type: 'text', content: 'Innovation & Design', top: '30%', left: '50%', fontSize: '16px', color: '#E0E0E0', fontFamily: 'Roboto' }, { type: 'text', content: 'www.techsolutions.com', top: '80%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Roboto' } ] },
            { name: 'Nature Vertical', style: { background: 'linear-gradient(to bottom, #134E5E, #71B280)' }, elements: [ { type: 'text', content: 'Green Earth', top: '25%', left: '50%', fontSize: '28px', color: '#FFFFFF', fontFamily: 'Lato' }, { type: 'text', content: 'Environmental Consulting', top: '35%', left: '50%', fontSize: '16px', color: '#FFFFFF', fontFamily: 'Lato' }, { type: 'text', content: 'info@greenearth.org', top: '75%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Lato' } ] },
            { name: 'Minimal Vertical', style: { background: '#FFFFFF' }, elements: [ { type: 'text', content: 'ALEX CHEN', top: '20%', left: '50%', fontSize: '30px', color: '#000000', fontFamily: 'Helvetica' }, { type: 'text', content: 'Photographer', top: '30%', left: '50%', fontSize: '16px', color: '#666666', fontFamily: 'Helvetica' }, { type: 'text', content: 'alexchen.photo', top: '80%', left: '50%', fontSize: '14px', color: '#000000', fontFamily: 'Helvetica' } ] },
            { name: 'Artistic Vertical', style: { background: 'linear-gradient(to bottom, #fc466b, #3f5efb)' }, elements: [ { type: 'text', content: 'ART STUDIO', top: '15%', left: '50%', fontSize: '28px', color: '#FFFFFF', fontFamily: 'Benchline' }, { type: 'text', content: 'Creative Expression', top: '25%', left: '50%', fontSize: '16px', color: '#FFFFFF', fontFamily: 'Montserrat' }, { type: 'text', content: 'artstudio@example.com', top: '85%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Montserrat' } ] },
            { name: 'Business Vertical', style: { background: 'linear-gradient(to bottom, #2c3e50, #3498db)' }, elements: [ { type: 'text', content: 'MORGAN & CO', top: '20%', left: '50%', fontSize: '26px', color: '#FFFFFF', fontFamily: 'Times New Roman' }, { type: 'text', content: 'Financial Advisors', top: '30%', left: '50%', fontSize: '16px', color: '#E0E0E0', fontFamily: 'Times New Roman' }, { type: 'text', content: '+1 (555) 123-4567', top: '75%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Times New Roman' } ] },
            { name: 'Vintage Vertical', style: { background: '#f3e5ab' }, elements: [ { type: 'text', content: 'Vintage Shop', top: '25%', left: '50%', fontSize: '32px', color: '#5d4037', fontFamily: 'Playfair Display' }, { type: 'text', content: 'Antiques & Collectibles', top: '35%', left: '50%', fontSize: '16px', color: '#5d4037', fontFamily: 'Lato' }, { type: 'text', content: '123 Main Street', top: '80%', left: '50%', fontSize: '14px', color: '#5d4037', fontFamily: 'Lato' } ] },
            { name: 'Medical Vertical', style: { background: 'linear-gradient(to bottom, #56CCF2, #2F80ED)' }, elements: [ { type: 'text', content: 'Dr. Sarah Johnson', top: '20%', left: '50%', fontSize: '24px', color: '#FFFFFF', fontFamily: 'Roboto' }, { type: 'text', content: 'Pediatrician', top: '30%', left: '50%', fontSize: '16px', color: '#FFFFFF', fontFamily: 'Roboto' }, { type: 'text', content: 'Appointment: 555-123-4567', top: '75%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Roboto' } ] },
            { name: 'Food Vertical', style: { background: 'linear-gradient(to bottom, #ff9a56, #ff6a88)' }, elements: [ { type: 'text', content: 'Bella\'s Kitchen', top: '15%', left: '50%', fontSize: '28px', color: '#FFFFFF', fontFamily: 'Lobster' }, { type: 'text', content: 'Italian Cuisine', top: '25%', left: '50%', fontSize: '18px', color: '#FFFFFF', fontFamily: 'Montserrat' }, { type: 'text', content: 'Open Daily 11am-10pm', top: '80%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Montserrat' } ] }
        ]
    };

    if (fontSizeValue) fontSizeValue.textContent = fontSize.value + 'px';
    if (letterSpacingValue) letterSpacingValue.textContent = letterSpacing.value + 'px';
    if (lineHeightValue) lineHeightValue.textContent = lineHeight.value;
    if (shapeStrokeWidthValue) shapeStrokeWidthValue.textContent = shapeStrokeWidth.value + 'px';
    if (elementSizeValue) elementSizeValue.textContent = elementSize.value + 'px';
    if (tableFontSizeValue) tableFontSizeValue.textContent = tableFontSize.value + 'px';
    selectTool.classList.add('active');

    Array.from(fontFamily.options).forEach(option => {
        option.style.fontFamily = option.value;
    });

    saveState();

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            const mainContent = document.querySelector('.main-content');
            const menuId = this.getAttribute('data-menu');

            if (window.innerWidth > 768) {
                sidebar.classList.add('expanded');
                mainContent.classList.add('expanded');
            }

            const isAlreadyActive = this.classList.contains('active');

            menuItems.forEach(mi => mi.classList.remove('active'));
            menuContents.forEach(mc => mc.classList.remove('active'));

            if (!isAlreadyActive || window.innerWidth > 768) {
                this.classList.add('active');
                document.getElementById(`${menuId}-menu`).classList.add('active');
            }
        });
    });

    closeMenuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const activeContent = document.querySelector('.menu-content.active');
            if (activeContent) {
                activeContent.classList.remove('active');
            }
            const activeItem = document.querySelector('.menu-item.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }

            document.querySelector('.sidebar').classList.remove('expanded');
            document.querySelector('.main-content').classList.remove('expanded');
        });
    });

    orientationToggle.addEventListener('click', function() {
        toggleCardOrientation();
    });

    function toggleCardOrientation() {
        if (cardOrientation === 'horizontal') {
            cardOrientation = 'vertical';
            cardContainer.classList.add('vertical');
            orientationToggle.innerHTML = '<i class="fas fa-arrows-alt-v"></i>';
        } else {
            cardOrientation = 'horizontal';
            cardContainer.classList.remove('vertical');
            orientationToggle.innerHTML = '<i class="fas fa-arrows-alt-h"></i>';
        }
        
        // Update orientation buttons in templates menu
        orientationBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-orientation') === cardOrientation) {
                btn.classList.add('active');
            }
        });
        
        renderTemplates();
        saveState();
    }

    orientationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const orientation = this.getAttribute('data-orientation');
            if (orientation !== cardOrientation) {
                toggleCardOrientation();
            }
        });
    });

    addTextBtn.addEventListener('click', function() {
        const text = textInput.value.trim();
        if (text) {
            addTextElement(text);
            textInput.value = '';
            showNotification('Text added to card');
        } else {
            showNotification('Please enter some text', 'error');
        }
    });

    textInput.addEventListener('input', function() {
        if (selectedElement && selectedElement.classList.contains('text-element') && !selectedElement.classList.contains('locked')) {
            selectedElement.querySelector('.text-content').textContent = this.value;
            saveState();
        }
    });

    function addTextElement(text, parentCard = null, top = '50%', left = '50%') {
        const textElement = document.createElement('div');
        textElement.className = 'card-element text-element';
        textElement.id = 'element-' + elementIdCounter++;
        
        const textContent = document.createElement('div');
        textContent.className = 'text-content';
        textContent.contentEditable = true;
        textContent.textContent = text;
        textElement.appendChild(textContent);

        textElement.style.fontFamily = fontFamily.value;
        textElement.style.fontSize = fontSize.value + 'px';
        textElement.style.color = textColorPicker.value;
        textElement.style.fontWeight = boldBtn.classList.contains('active') ? 'bold' : 'normal';
        textElement.style.fontStyle = italicBtn.classList.contains('active') ? 'italic' : 'normal';
        textElement.style.textDecoration = getTextDecoration();
        textElement.style.textAlign = getTextAlign();
        textElement.style.letterSpacing = letterSpacing.value + 'px';
        textElement.style.lineHeight = lineHeight.value;
        textElement.style.left = left;
        textElement.style.top = top;
        textElement.style.transform = 'translate(-50%, -50%)';

        createResizeHandles(textElement);
        createActionButtons(textElement);

        const targetCard = parentCard || (currentCard === 'front' ? cardFront : cardBack);
        targetCard.appendChild(textElement);

        makeElementDraggable(textElement);
        makeElementResizable(textElement);
        makeElementRotatable(textElement);
        selectElement(textElement);
        updateLayersList();
        saveState();
    }
    
    function createActionButtons(element) {
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'element-actions';

        const moveBtn = document.createElement('button');
        moveBtn.className = 'element-action-btn element-move';
        moveBtn.innerHTML = '<i class="fas fa-arrows-alt"></i>';
        moveBtn.title = 'Move';
        actionsContainer.appendChild(moveBtn);

        const lockBtn = document.createElement('button');
        lockBtn.className = 'element-action-btn element-lock';
        lockBtn.innerHTML = '<i class="fas fa-lock-open"></i>';
        lockBtn.title = 'Lock/Unlock';
        lockBtn.addEventListener('click', function(e) { e.stopPropagation(); toggleElementLock(element); });
        actionsContainer.appendChild(lockBtn);

        const duplicateBtn = document.createElement('button');
        duplicateBtn.className = 'element-action-btn element-duplicate';
        duplicateBtn.innerHTML = '<i class="fas fa-copy"></i>';
        duplicateBtn.title = 'Duplicate';
        duplicateBtn.addEventListener('click', function(e) { e.stopPropagation(); duplicateElement(element); });
        actionsContainer.appendChild(duplicateBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'element-action-btn element-delete';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.title = 'Delete';
        deleteBtn.addEventListener('click', function(e) { e.stopPropagation(); deleteElement(element); });
        actionsContainer.appendChild(deleteBtn);

        element.appendChild(actionsContainer);
    }

    function createResizeHandles(element) {
        const positions = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br'];
        positions.forEach(pos => {
            const handle = document.createElement('div');
            handle.className = `resize-handle resize-handle-${pos}`;
            element.appendChild(handle);
        });

        const rotateHandle = document.createElement('div');
        rotateHandle.className = 'rotate-handle';
        element.appendChild(rotateHandle);
    }

    function getTextDecoration() {
        let decoration = '';
        if (underlineBtn.classList.contains('active')) decoration += 'underline ';
        if (strikeBtn.classList.contains('active')) decoration += 'line-through ';
        return decoration.trim();
    }

    function getTextAlign() {
        if (alignCenterBtn.classList.contains('active')) return 'center';
        if (alignRightBtn.classList.contains('active')) return 'right';
        if (alignJustifyBtn.classList.contains('active')) return 'justify';
        return 'left';
    }

    fontSize.addEventListener('input', function() {
        if (fontSizeValue) fontSizeValue.textContent = this.value + 'px';
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.fontSize = this.value + 'px';
            saveState();
        }
    });

    letterSpacing.addEventListener('input', function() {
        if (letterSpacingValue) letterSpacingValue.textContent = this.value + 'px';
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.letterSpacing = this.value + 'px';
            saveState();
        }
    });

    lineHeight.addEventListener('input', function() {
        if (lineHeightValue) lineHeightValue.textContent = this.value;
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.lineHeight = this.value;
            saveState();
        }
    });

    fontFamily.addEventListener('change', function() {
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.fontFamily = this.value;
            saveState();
        }
    });

    boldBtn.addEventListener('click', function() { this.classList.toggle('active'); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.fontWeight = this.classList.contains('active') ? 'bold' : 'normal'; saveState(); } });
    italicBtn.addEventListener('click', function() { this.classList.toggle('active'); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.fontStyle = this.classList.contains('active') ? 'italic' : 'normal'; saveState(); } });
    underlineBtn.addEventListener('click', function() { this.classList.toggle('active'); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.textDecoration = getTextDecoration(); saveState(); } });
    strikeBtn.addEventListener('click', function() { this.classList.toggle('active'); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.textDecoration = getTextDecoration(); saveState(); } });
    alignLeftBtn.addEventListener('click', function() { setAlignButton(this); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.textAlign = 'left'; saveState(); } });
    alignCenterBtn.addEventListener('click', function() { setAlignButton(this); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.textAlign = 'center'; saveState(); } });
    alignRightBtn.addEventListener('click', function() { setAlignButton(this); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.textAlign = 'right'; saveState(); } });
    alignJustifyBtn.addEventListener('click', function() { setAlignButton(this); if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.textAlign = 'justify'; saveState(); } });

    function setAlignButton(activeBtn) { [alignLeftBtn, alignCenterBtn, alignRightBtn, alignJustifyBtn].forEach(btn => btn.classList.remove('active')); activeBtn.classList.add('active'); }
    function updateTextShadow() { if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.textShadow = `${shadowH.value}px ${shadowV.value}px ${shadowBlur.value}px ${shadowColorPicker.value}`; } }
    shadowH.addEventListener('input', updateTextShadow); shadowV.addEventListener('input', updateTextShadow); shadowBlur.addEventListener('input', updateTextShadow); shadowColorPicker.addEventListener('input', updateTextShadow);
    function updateTextOutline() { if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.webkitTextStroke = outlineWidth.value > 0 ? `${outlineWidth.value}px ${outlineColorPicker.value}` : 'none'; } }
    outlineWidth.addEventListener('input', updateTextOutline); outlineColorPicker.addEventListener('input', updateTextOutline);

    textColorPicker.addEventListener('input', function() { if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.color = this.value; saveState(); } });

    document.querySelectorAll('#text-menu .color-option').forEach(option => { option.addEventListener('click', function() { document.querySelectorAll('#text-menu .color-option').forEach(opt => opt.classList.remove('active')); this.classList.add('active'); const color = this.getAttribute('data-color'); textColorPicker.value = color; if (selectedElement && selectedElement.classList.contains('text-element')) { selectedElement.style.color = color; saveState(); } }); });

    uploadArea.addEventListener('click', function() { imageUpload.click(); });

    imageUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imgData = event.target.result;
                uploadedImages.push(imgData);
                addImageToGallery(imgData);
                showNotification('Image uploaded successfully');
            };
            reader.readAsDataURL(file);
        } else { showNotification('Please upload a valid image file', 'error'); }
    });

    replaceImageBtn.addEventListener('click', function() { if (selectedElement && selectedElement.querySelector('img')) { const tempInput = document.createElement('input'); tempInput.type = 'file'; tempInput.accept = 'image/*'; tempInput.addEventListener('change', function(e) { const file = e.target.files[0]; if (file && file.type.startsWith('image/')) { const reader = new FileReader(); reader.onload = function(event) { selectedElement.querySelector('img').src = event.target.result; saveState(); showNotification('Image replaced successfully'); }; reader.readAsDataURL(file); } }); tempInput.click(); } });

    function addImageToGallery(imgData) {
        const galleryItem = document.createElement('div'); galleryItem.className = 'gallery-item';
        const img = document.createElement('img'); img.src = imgData; galleryItem.appendChild(img);
        const removeBtn = document.createElement('button'); removeBtn.className = 'remove-btn'; removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', function(e) { e.stopPropagation(); const index = uploadedImages.indexOf(imgData); if (index > -1) { uploadedImages.splice(index, 1); } galleryItem.remove(); showNotification('Image removed from gallery'); });
        galleryItem.appendChild(removeBtn);
        galleryItem.addEventListener('click', function() { addImageElement(imgData); });
        imageGallery.appendChild(galleryItem);
    }

    presetSizes.forEach(preset => { preset.addEventListener('click', function() { presetSizes.forEach(p => p.classList.remove('active')); this.classList.add('active'); imageWidth.value = this.getAttribute('data-width'); imageHeight.value = this.getAttribute('data-height'); }); });

    applyImageSize.addEventListener('click', function() { if (selectedElement && selectedElement.querySelector('img')) { const img = selectedElement.querySelector('img'); img.style.width = imageWidth.value + 'px'; img.style.height = imageHeight.value + 'px'; saveState(); showNotification('Image size applied'); } else { showNotification('Please select an image to resize', 'error'); } });
    maintainAspect.addEventListener('change', function() { if (this.checked && selectedElement && selectedElement.querySelector('img')) { const img = selectedElement.querySelector('img'); originalImageRatio = img.clientWidth / img.clientHeight; } });
    imageWidth.addEventListener('input', function() { if (maintainAspect.checked && selectedElement && selectedElement.querySelector('img')) { imageHeight.value = Math.round(this.value / originalImageRatio); } });
    imageHeight.addEventListener('input', function() { if (maintainAspect.checked && selectedElement && selectedElement.querySelector('img')) { imageWidth.value = Math.round(this.value * originalImageRatio); } });
    styleOptions.forEach(option => { option.addEventListener('click', function() { styleOptions.forEach(opt => opt.classList.remove('active')); this.classList.add('active'); applyImageStyle(this.getAttribute('data-style')); }); });

    function applyImageStyle(style) {
        if (selectedElement && selectedElement.querySelector('img')) {
            const img = selectedElement.querySelector('img');
            img.style.borderRadius = ''; img.style.clipPath = '';
            switch(style) {
                case 'circle': img.style.borderRadius = '50%'; break;
                case 'rounded': img.style.borderRadius = '15%'; break;
                case 'triangle': img.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'; break;
                case 'hexagon': img.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'; break;
            }
            saveState();
        }
    }

    function addImageElement(imgData, parentCard = null, width, height, top = '50%', left = '50%') {
        const imageElement = document.createElement('div'); imageElement.className = 'card-element'; imageElement.id = 'element-' + elementIdCounter++; imageElement.style.left = left; imageElement.style.top = top; imageElement.style.transform = 'translate(-50%, -50%)';
        const img = document.createElement('img'); img.src = imgData; img.style.width = width ? `${width}px` : 'auto'; img.style.height = height ? `${height}px` : 'auto'; imageElement.appendChild(img);
        createResizeHandles(imageElement);
        createActionButtons(imageElement);
        const targetCard = parentCard || (currentCard === 'front' ? cardFront : cardBack); targetCard.appendChild(imageElement);
        makeElementDraggable(imageElement); makeElementResizable(imageElement); makeElementRotatable(imageElement); selectElement(imageElement); updateLayersList(); saveState();
        img.onload = function() { originalImageRatio = this.naturalWidth / this.naturalHeight; if (selectedElement === imageElement) { imageWidth.value = this.clientWidth; imageHeight.value = this.clientHeight; } };
    }

    shapesGrid.addEventListener('click', function(e) {
        const shapeItem = e.target.closest('.shape-item');
        if (shapeItem) {
            const shapeType = shapeItem.dataset.shape;
            addShapeElement(shapeType);
        }
    });

    function addShapeElement(shapeType, parentCard = null, top = '50%', left = '50%') {
        const shapeElement = document.createElement('div');
        shapeElement.className = 'card-element shape-element';
        shapeElement.id = 'element-' + elementIdCounter++;
        shapeElement.style.left = left;
        shapeElement.style.top = top;
        shapeElement.style.width = elementSize.value + 'px';
        shapeElement.style.height = elementSize.value + 'px';
        shapeElement.style.transform = 'translate(-50%, -50%)';
        shapeElement.dataset.shapeType = shapeType;

        let svgHtml = '';
        const fill = shapeFillColor.value;
        const stroke = shapeStrokeColor.value;
        const strokeWidth = shapeStrokeWidth.value;

        switch(shapeType) {
            case 'rectangle':
                svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><rect x="0" y="0" width="100" height="100" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" vector-effect="non-scaling-stroke"></rect></svg>`;
                break;
            case 'circle':
                svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><circle cx="50" cy="50" r="50" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" vector-effect="non-scaling-stroke"></circle></svg>`;
                break;
            case 'triangle':
                svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="50,0 100,100 0,100" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" vector-effect="non-scaling-stroke"></polygon></svg>`;
                break;
            case 'star':
                svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="50,5 61,40 98,40 68,62 79,96 50,75 21,96 32,62 2,40 39,40" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" vector-effect="non-scaling-stroke"></polygon></svg>`;
                break;
            case 'line':
                    shapeElement.style.height = '10px';
                    svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="0" y1="50" x2="100" y2="50" stroke="${fill}" stroke-width="100" vector-effect="non-scaling-stroke"></line></svg>`;
                    break;
            case 'pentagon':
                svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="50,5 95,40 80,90 20,90 5,40" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" vector-effect="non-scaling-stroke"></polygon></svg>`;
                break;
            case 'hexagon':
                svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" vector-effect="non-scaling-stroke"></polygon></svg>`;
                break;
            case 'arrow':
                svgHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="10,50 70,50 70,30 90,50 70,70 70,50" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" vector-effect="non-scaling-stroke"></polygon></svg>`;
                break;
        }
        shapeElement.innerHTML = svgHtml;

        createResizeHandles(shapeElement);
        createActionButtons(shapeElement);

        const targetCard = parentCard || getCurrentCardElement();
        targetCard.appendChild(shapeElement);

        makeElementDraggable(shapeElement);
        makeElementResizable(shapeElement);
        makeElementRotatable(shapeElement);
        selectElement(shapeElement);
        updateLayersList();
        saveState();
    }
    
    function updateSelectedShape() {
        if (!selectedElement || !selectedElement.classList.contains('shape-element')) return;
        const svg = selectedElement.querySelector('svg > *');
        const isLine = selectedElement.dataset.shapeType === 'line';
        
        if (isLine) {
            svg.setAttribute('stroke', shapeFillColor.value);
        } else {
            svg.setAttribute('fill', shapeFillColor.value);
            svg.setAttribute('stroke', shapeStrokeColor.value);
            svg.setAttribute('stroke-width', shapeStrokeWidth.value);
        }
        
        saveState();
    }

    shapeFillColor.addEventListener('input', () => {
        if (!selectedElement) return;
        if (selectedElement.classList.contains('icon-element')) {
            selectedElement.querySelector('i').style.color = shapeFillColor.value;
            saveState();
        } else if (selectedElement.classList.contains('shape-element')) {
            updateSelectedShape();
        }
    });

    shapeStrokeColor.addEventListener('input', updateSelectedShape);
    
    shapeStrokeWidth.addEventListener('input', function() {
        if (shapeStrokeWidthValue) shapeStrokeWidthValue.textContent = this.value + 'px';
        updateSelectedShape();
    });
    
    tableColsPlus.addEventListener('click', () => tableColsInput.stepUp());
    tableColsMinus.addEventListener('click', () => tableColsInput.stepDown());
    tableRowsPlus.addEventListener('click', () => tableRowsInput.stepUp());
    tableRowsMinus.addEventListener('click', () => tableRowsInput.stepDown());
    addTableBtn.addEventListener('click', () => {
        if (selectedElement && selectedElement.classList.contains('table-element')) {
            updateTableElement(selectedElement);
        } else {
            addTableElement();
        }
    });
    
    function buildTable(rows, cols) {
        let tableHTML = '';
        for (let i = 0; i < rows; i++) {
            tableHTML += '<div class="table-row">';
            for (let j = 0; j < cols; j++) {
                tableHTML += '<div class="table-cell" contentEditable="true"></div>';
            }
            tableHTML += '</div>';
        }
        return tableHTML;
    }

    function addTableElement(parentCard = null, top = '50%', left = '50%') {
        const tableElement = document.createElement('div');
        tableElement.className = 'card-element table-element';
        tableElement.id = 'element-' + elementIdCounter++;
        tableElement.style.left = left;
        tableElement.style.top = top;
        tableElement.style.transform = 'translate(-50%, -50%)';
        
        const cols = parseInt(tableColsInput.value);
        const rows = parseInt(tableRowsInput.value);
        tableElement.dataset.cols = cols;
        tableElement.dataset.rows = rows;

        tableElement.innerHTML = buildTable(rows, cols);

        createResizeHandles(tableElement);
        createActionButtons(tableElement);
        
        const targetCard = parentCard || getCurrentCardElement();
        targetCard.appendChild(tableElement);

        makeElementDraggable(tableElement);
        makeElementResizable(tableElement);
        makeElementRotatable(tableElement);
        selectElement(tableElement);
        updateLayersList();
        saveState();
        showNotification('Table added');
    }

    function updateTableElement(tableElement) {
        const newCols = parseInt(tableColsInput.value);
        const newRows = parseInt(tableRowsInput.value);
        
        if (tableElement.dataset.cols == newCols && tableElement.dataset.rows == newRows) return;
        
        tableElement.dataset.cols = newCols;
        tableElement.dataset.rows = newRows;
        
        const controls = tableElement.querySelectorAll('.resize-handle, .rotate-handle, .element-actions');
        tableElement.innerHTML = buildTable(newRows, newCols);
        controls.forEach(control => tableElement.appendChild(control));
        
        saveState();
        showNotification('Table updated');
    }

    function getCurrentCardElement() { return currentCard === 'front' ? cardFront : cardBack; }

    document.querySelectorAll('#background-menu .color-option').forEach(option => { option.addEventListener('click', function() { document.querySelectorAll('#background-menu .color-option').forEach(opt => opt.classList.remove('active')); this.classList.add('active'); const color = this.getAttribute('data-color'); customBgColorPicker.value = color; const activeCard = getCurrentCardElement(); activeCard.style.backgroundColor = color; activeCard.style.backgroundImage = ''; bgUploadArea.querySelector('p').textContent = 'Upload Background Image'; replaceBgBtn.style.display = 'none'; saveState(); }); });
    customBgColorPicker.addEventListener('input', function() { const color = this.value; const activeCard = getCurrentCardElement(); activeCard.style.backgroundColor = color; activeCard.style.backgroundImage = ''; bgUploadArea.querySelector('p').textContent = 'Upload Background Image'; replaceBgBtn.style.display = 'none'; saveState(); });
    gradientTypeBtns.forEach(btn => { btn.addEventListener('click', function() { gradientTypeBtns.forEach(b => b.classList.remove('active')); this.classList.add('active'); currentGradient = this.getAttribute('data-gradient'); applyBackgroundGradient(); }); });
    addGradientStop.addEventListener('click', function() { const newStop = document.createElement('div'); newStop.className = 'gradient-stop'; newStop.innerHTML = `<div class="gradient-stop-header"><input type="color" class="gradient-stop-color" value="#ffffff"><button class="remove-stop">&times;</button></div><div class="gradient-stop-position"><label>Position</label><input type="range" min="0" max="100" value="50"></div>`; gradientStopsContainer.appendChild(newStop); attachGradientStopListeners(newStop); applyBackgroundGradient(); });
    
    function attachGradientStopListeners(stopElement) {
        stopElement.querySelector('.gradient-stop-color').addEventListener('input', applyBackgroundGradient);
        stopElement.querySelector('input[type="range"]').addEventListener('input', applyBackgroundGradient);
        const removeBtn = stopElement.querySelector('.remove-stop');
        if (removeBtn) { removeBtn.addEventListener('click', () => { if (gradientStopsContainer.querySelectorAll('.gradient-stop').length > 2) { stopElement.remove(); applyBackgroundGradient(); } else { showNotification('A gradient requires at least two color stops', 'error'); } }); }
    }
    
    document.querySelectorAll('.gradient-stop').forEach(attachGradientStopListeners);
    
    function applyBackgroundGradient() { const stops = []; gradientStopsContainer.querySelectorAll('.gradient-stop').forEach(stop => { stops.push({ color: stop.querySelector('.gradient-stop-color').value, position: stop.querySelector('input[type="range"]').value }); }); stops.sort((a, b) => a.position - b.position); let gradientString = ''; const stopsString = stops.map(s => `${s.color} ${s.position}%`).join(', '); if (currentGradient === 'linear') { gradientString = `linear-gradient(to right, ${stopsString})`; } else if (currentGradient === 'radial') { gradientString = `radial-gradient(circle, ${stopsString})`; } const activeCard = getCurrentCardElement(); activeCard.style.backgroundColor = ''; activeCard.style.backgroundImage = gradientString; bgUploadArea.querySelector('p').textContent = 'Upload Background Image'; replaceBgBtn.style.display = 'none'; saveState(); }
    bgOptions.forEach(option => { option.addEventListener('click', function() { bgOptions.forEach(opt => opt.classList.remove('active')); this.classList.add('active'); backgroundPattern = this.getAttribute('data-pattern'); applyBackgroundPattern(); saveState(); }); });
    
    function applyBackgroundPattern() { let bgImage = 'none'; let bgSize = ''; if (backgroundPattern === 'dots') { bgImage = 'radial-gradient(#1890ff 1px, transparent 1px)'; bgSize = '10px 10px'; } else if (backgroundPattern === 'lines') { bgImage = 'repeating-linear-gradient(45deg, #1890ff, #1890ff 1px, transparent 1px, transparent 10px)'; } else if (backgroundPattern === 'grid' || backgroundPattern === 'cross') { bgImage = 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)'; bgSize = '10px 10px'; } else if (backgroundPattern === 'diagonal') { bgImage = 'repeating-linear-gradient(-45deg, #1890ff, #1890ff 5px, transparent 5px, transparent 10px)'; } const activeCard = getCurrentCardElement(); activeCard.style.backgroundImage = bgImage; activeCard.style.backgroundSize = bgSize; bgUploadArea.querySelector('p').textContent = 'Upload Background Image'; replaceBgBtn.style.display = 'none'; }
    
    bgUploadArea.addEventListener('click', function() { bgImageUpload.click(); });
    replaceBgBtn.addEventListener('click', function() { bgImageUpload.click(); });
    bgImageUpload.addEventListener('change', function(e) { const file = e.target.files[0]; if (file && file.type.startsWith('image/')) { const reader = new FileReader(); reader.onload = function(event) { backgroundImage = event.target.result; const activeCard = getCurrentCardElement(); activeCard.style.backgroundImage = `url(${backgroundImage})`; activeCard.style.backgroundSize = 'cover'; activeCard.style.backgroundPosition = 'center'; bgUploadArea.querySelector('p').textContent = 'Replace Background Image'; replaceBgBtn.style.display = 'block'; showNotification(`Background image set for ${currentCard} side`); saveState(); }; reader.readAsDataURL(file); } else { showNotification('Please upload a valid image file', 'error'); } });
    
    frontBtn.addEventListener('click', function() { currentCard = 'front'; frontBtn.classList.add('active'); backBtn.classList.remove('active'); cardFront.style.display = 'flex'; cardBack.style.display = 'none'; updateLayersList(); });
    backBtn.addEventListener('click', function() { currentCard = 'back'; backBtn.classList.add('active'); frontBtn.classList.remove('active'); cardBack.style.display = 'flex'; cardFront.style.display = 'none'; updateLayersList(); });
    
    selectTool.addEventListener('click', function() { currentTool = 'select'; selectTool.classList.add('active'); textTool.classList.remove('active'); });
    textTool.addEventListener('click', function() { currentTool = 'text'; textTool.classList.add('active'); selectTool.classList.remove('active'); });
    gridToggle.addEventListener('click', function() { gridEnabled = !gridEnabled; this.classList.toggle('active'); gridOverlay.classList.toggle('active'); });
    zoomIn.addEventListener('click', function() {
        currentZoom = Math.min(currentZoom * 1.2, 3);
        document.querySelector('.canvas-wrapper').style.transform = `scale(${currentZoom})`;
    });

    zoomOut.addEventListener('click', function() {
        currentZoom = Math.max(currentZoom / 1.2, 0.5);
        document.querySelector('.canvas-wrapper').style.transform = `scale(${currentZoom})`;
    });

    zoomFit.addEventListener('click', function() {
        currentZoom = 1;
        document.querySelector('.canvas-wrapper').style.transform = `scale(${currentZoom})`;
    });

    function makeElementDraggable(element) {
        element.addEventListener('mousedown', function(e) {
            if (e.target.classList.contains('resize-handle') || e.target.classList.contains('rotate-handle') || e.target.closest('.element-action-btn:not(.element-move)') || element.classList.contains('locked') || e.target.isContentEditable) { return; }
            if (currentTool === 'text' && !element.classList.contains('text-element')) { return; }
            isDragging = true;
            const rect = element.getBoundingClientRect(); const parentRect = element.parentElement.getBoundingClientRect();
            const centerX = rect.left - parentRect.left + rect.width / 2; const centerY = rect.top - parentRect.top + rect.height / 2;
            startX = e.clientX - parentRect.left - centerX; startY = e.clientY - parentRect.top - centerY;
            selectElement(element);
            document.addEventListener('mousemove', dragElement); document.addEventListener('mouseup', stopDragging);
        });
        function dragElement(e) { if (!isDragging) return; e.preventDefault(); const parentRect = element.parentElement.getBoundingClientRect(); let newCenterX = e.clientX - parentRect.left - startX; let newCenterY = e.clientY - parentRect.top - startY; newCenterX = Math.max(0, Math.min(newCenterX, parentRect.width)); newCenterY = Math.max(0, Math.min(newCenterY, parentRect.height)); element.style.left = newCenterX + 'px'; element.style.top = newCenterY + 'px'; }
        function stopDragging() { if (isDragging) { isDragging = false; saveState(); } document.removeEventListener('mousemove', dragElement); document.removeEventListener('mouseup', stopDragging); }
    }

    function makeElementResizable(element) {
        const handles = element.querySelectorAll('.resize-handle');
        handles.forEach(handle => {
            handle.addEventListener('mousedown', function(e) {
                e.stopPropagation();
                if (element.classList.contains('locked')) return;

                isResizing = true;
                startX = e.clientX;
                startY = e.clientY;
                
                startWidth = element.offsetWidth;
                startHeight = element.offsetHeight;
                startLeft = element.offsetLeft + startWidth / 2;
                startTop = element.offsetTop + startHeight / 2;
                
                const handleType = handle.className.split(' ').find(c => c.startsWith('resize-handle-')).split('-')[2];

                function doResize(e) {
                    if (!isResizing) return;

                    const dx = e.clientX - startX;
                    const dy = e.clientY - startY;

                    let newWidth = startWidth;
                    let newHeight = startHeight;
                    let newLeft = startLeft;
                    let newTop = startTop;

                    if (handleType.includes('l')) {
                        newWidth = startWidth - dx;
                        newLeft = startLeft + dx / 2;
                    } else if (handleType.includes('r')) {
                        newWidth = startWidth + dx;
                        newLeft = startLeft + dx / 2;
                    }

                    if (handleType.includes('t')) {
                        newHeight = startHeight - dy;
                        newTop = startTop + dy / 2;
                    } else if (handleType.includes('b')) {
                        newHeight = startHeight + dy;
                        newTop = startTop + dy / 2;
                    }

                    if (selectedElement) {
                        newWidth = Math.max(20, newWidth);
                        newHeight = Math.max(20, newHeight);
                        selectedElement.style.width = newWidth + 'px';
                        selectedElement.style.height = newHeight + 'px';
                        selectedElement.style.left = newLeft + 'px';
                        selectedElement.style.top = newTop + 'px';
                    }
                }

                function stopResize() {
                    isResizing = false;
                    if (selectedElement) {
                        saveState();
                    }
                    document.removeEventListener('mousemove', doResize);
                    document.removeEventListener('mouseup', stopResize);
                }

                document.addEventListener('mousemove', doResize);
                document.addEventListener('mouseup', stopResize);
            });
        });
    }

    function makeElementRotatable(element) {
        const rotateHandle = element.querySelector('.rotate-handle');
        rotateHandle.addEventListener('mousedown', function(e) {
            if (element.classList.contains('locked')) return; isRotating = true;
            const rect = element.getBoundingClientRect(); const centerX = rect.left + rect.width / 2; const centerY = rect.top + rect.height / 2;
            startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
            const rotateMatch = element.style.transform.match(/rotate\(([^)]+)\)/); startAngle -= (rotateMatch ? parseFloat(rotateMatch[1]) : 0);
            document.addEventListener('mousemove', rotateElement); document.addEventListener('mouseup', stopRotating); e.stopPropagation();
        });
        function rotateElement(e) { if (!isRotating) return; const rect = element.getBoundingClientRect(); const centerX = rect.left + rect.width / 2; const centerY = rect.top + rect.height / 2; const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI; const rotation = angle - startAngle; element.style.transform = element.style.transform.replace(/rotate\([^)]*\)/, '').trim() + ` rotate(${rotation}deg)`; }
        function stopRotating() { if (isRotating) { isRotating = false; saveState(); } document.removeEventListener('mousemove', rotateElement); document.removeEventListener('mouseup', stopRotating); }
    }

    function updateSidebarControlsState(isLocked) { document.querySelectorAll('.sidebar input, .sidebar select, .sidebar button').forEach(c => c.disabled = false); document.querySelectorAll('.sidebar .disabled-control').forEach(c => c.classList.remove('disabled-control')); if (selectedElement && isLocked) { if (selectedElement.classList.contains('text-element')) { document.querySelectorAll('#text-menu input, #text-menu select, #text-menu button').forEach(control => control.disabled = true); document.querySelectorAll('#text-menu .color-option').forEach(control => control.classList.add('disabled-control')); } if (selectedElement.querySelector('img')) { document.querySelectorAll('#image-size-controls input, #image-size-controls button').forEach(control => control.disabled = true); document.querySelectorAll('#image-size-controls .preset-size').forEach(control => control.classList.add('disabled-control')); } if (selectedElement.classList.contains('shape-element') || selectedElement.classList.contains('icon-element')) { document.querySelectorAll('#shape-properties input, #shape-properties button').forEach(control => control.disabled = true); } if (selectedElement.classList.contains('table-element')) { document.querySelectorAll('#table-text-controls input, #table-text-controls select, #table-text-controls button').forEach(control => control.disabled = true); document.querySelectorAll('#table-text-controls .color-option').forEach(control => control.classList.add('disabled-control')); } } }
    
    function toggleElementLock(element) {
        element.classList.toggle('locked');
        const lockBtn = element.querySelector('.element-lock');
        const isLocked = element.classList.contains('locked');
        lockBtn.classList.toggle('is-locked', isLocked);
        if (isLocked) {
            lockBtn.innerHTML = '<i class="fas fa-lock"></i>';
            element.querySelectorAll('[contentEditable="true"]').forEach(el => el.contentEditable = false);
        } else {
            lockBtn.innerHTML = '<i class="fas fa-lock-open"></i>';
            element.querySelectorAll('.text-content, .table-cell').forEach(el => el.contentEditable = true);
        }
        if (selectedElement === element) {
            updateSidebarControlsState(isLocked);
        }
        saveState();
    }
    
    function duplicateElement(element) {
        if (element.classList.contains('locked')) {
            showNotification('Cannot duplicate a locked element', 'error');
            return;
        }
        const clone = element.cloneNode(true); clone.id = 'element-' + elementIdCounter++; const currentLeft = parseInt(element.style.left || '0'); const currentTop = parseInt(element.style.top || '0'); clone.style.left = (currentLeft + 20) + 'px'; clone.style.top = (currentTop + 20) + 'px'; (currentCard === 'front' ? cardFront : cardBack).appendChild(clone); reattachEventListeners(); selectElement(clone); updateLayersList(); saveState(); showNotification('Element duplicated');
    }
    
    function deleteElement(element) {
        if (element.classList.contains('locked')) {
            showNotification('Cannot delete a locked element', 'error');
            return;
        }
        element.remove(); selectedElement = null; updateLayersList(); saveState(); showNotification('Element deleted');
    }
    
    function selectElement(element) {
        document.querySelectorAll('.card-element').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected'); selectedElement = element;
        
        imageSizeControls.classList.add('hidden');
        imageStyleControls.classList.add('hidden');
        shapeProperties.classList.add('hidden');
        tableTextControls.classList.add('hidden');
        addTableBtn.textContent = "Add Table";

        menuItems.forEach(item => item.classList.remove('active'));
        menuContents.forEach(c => c.classList.remove('active'));

        if (element.classList.contains('text-element')) {
            const computedStyle = window.getComputedStyle(element);
            fontFamily.value = computedStyle.fontFamily.replace(/['"]/g, '');
            fontSize.value = parseInt(computedStyle.fontSize);
            if (fontSizeValue) fontSizeValue.textContent = fontSize.value + 'px';
            letterSpacing.value = parseFloat(computedStyle.letterSpacing) || 0;
            if (letterSpacingValue) letterSpacingValue.textContent = letterSpacing.value + 'px';
            lineHeight.value = parseFloat(computedStyle.lineHeight) / parseInt(computedStyle.fontSize) || 1;
            if (lineHeightValue) lineHeightValue.textContent = lineHeight.value;
            boldBtn.classList.toggle('active', computedStyle.fontWeight === 'bold' || parseInt(computedStyle.fontWeight) >= 700);
            italicBtn.classList.toggle('active', computedStyle.fontStyle === 'italic');
            underlineBtn.classList.toggle('active', computedStyle.textDecoration.includes('underline'));
            strikeBtn.classList.toggle('active', computedStyle.textDecoration.includes('line-through'));
            if (computedStyle.textAlign === 'left') setAlignButton(alignLeftBtn); else if (computedStyle.textAlign === 'center') setAlignButton(alignCenterBtn); else if (computedStyle.textAlign === 'right') setAlignButton(alignRightBtn); else if (computedStyle.textAlign === 'justify') setAlignButton(alignJustifyBtn);
            textColorPicker.value = rgbToHex(computedStyle.color);
            document.querySelector('.menu-item[data-menu="text"]').classList.add('active');
            document.getElementById('text-menu').classList.add('active');
            textInput.value = element.querySelector('.text-content').textContent;
        } else if (element.querySelector('img')) {
            imageSizeControls.classList.remove('hidden'); imageStyleControls.classList.remove('hidden');
            const img = element.querySelector('img'); imageWidth.value = img.clientWidth; imageHeight.value = img.clientHeight; originalImageRatio = img.clientWidth / img.clientHeight;
            document.querySelector('.menu-item[data-menu="images"]').classList.add('active');
            document.getElementById('images-menu').classList.add('active');
        } else if (element.classList.contains('shape-element') || element.classList.contains('icon-element')) {
            shapeProperties.classList.remove('hidden');
            
            if (element.classList.contains('icon-element')) {
                const icon = element.querySelector('i');
                const iconSize = parseInt(window.getComputedStyle(icon).fontSize);
                const iconColor = window.getComputedStyle(icon).color;
                elementSize.value = iconSize;
                if (elementSizeValue) elementSizeValue.textContent = iconSize + 'px';
                shapeFillColor.value = rgbToHex(iconColor);
                
                document.getElementById('shape-stroke-color').parentElement.parentElement.style.display = 'none';
                document.getElementById('shape-stroke-width').parentElement.parentElement.style.display = 'none';
                const shapeLabel = document.querySelector('#shape-properties label[for="shape-fill-color"]');
                if (shapeLabel) shapeLabel.textContent = 'Color';
            } else {
                const svg = element.querySelector('svg > *');
                const isLine = element.dataset.shapeType === 'line';
                
                shapeFillColor.value = rgbToHex(isLine ? svg.getAttribute('stroke') : svg.getAttribute('fill'));
                shapeStrokeColor.value = rgbToHex(svg.getAttribute('stroke'));
                shapeStrokeWidth.value = parseInt(svg.getAttribute('stroke-width') || 0);
                if(shapeStrokeWidthValue) shapeStrokeWidthValue.textContent = shapeStrokeWidth.value + 'px';
                
                elementSize.value = parseInt(element.style.width);
                if (elementSizeValue) elementSizeValue.textContent = elementSize.value + 'px';

                document.getElementById('shape-stroke-color').parentElement.parentElement.style.display = isLine ? 'none' : 'block';
                document.getElementById('shape-stroke-width').parentElement.parentElement.style.display = isLine ? 'none' : 'block';
                const shapeLabel = document.querySelector('#shape-properties label[for="shape-fill-color"]');
                if (shapeLabel) shapeLabel.textContent = isLine ? 'Color' : 'Fill Color';
            }
            document.querySelector('.menu-item[data-menu="graphics"]').classList.add('active');
            document.getElementById('graphics-menu').classList.add('active');
        } else if (element.classList.contains('table-element')) {
            tableTextControls.classList.remove('hidden');
            tableColsInput.value = element.dataset.cols;
            tableRowsInput.value = element.dataset.rows;
            addTableBtn.textContent = "Update Table";
            document.querySelector('.menu-item[data-menu="tables"]').classList.add('active');
            document.getElementById('tables-menu').classList.add('active');
            
            const firstCell = element.querySelector('.table-cell');
            if (firstCell) {
                const computedStyle = window.getComputedStyle(firstCell);
                tableFontFamily.value = computedStyle.fontFamily.replace(/['"]/g, '');
                tableFontSize.value = parseInt(computedStyle.fontSize);
                if (tableFontSizeValue) tableFontSizeValue.textContent = tableFontSize.value + 'px';
                tableBoldBtn.classList.toggle('active', computedStyle.fontWeight === 'bold' || parseInt(computedStyle.fontWeight) >= 700);
                tableItalicBtn.classList.toggle('active', computedStyle.fontStyle === 'italic');
                tableUnderlineBtn.classList.toggle('active', computedStyle.textDecoration.includes('underline'));
                tableTextColorPicker.value = rgbToHex(computedStyle.color);
                
                if (computedStyle.textAlign === 'left') setTableAlignButton(tableAlignLeftBtn);
                else if (computedStyle.textAlign === 'center') setTableAlignButton(tableAlignCenterBtn);
                else if (computedStyle.textAlign === 'right') setTableAlignButton(tableAlignRightBtn);
            }
        }
        
        updateSidebarControlsState(element.classList.contains('locked')); 
        updateLayersList();
    }
    
    function rgbToHex(rgb) {
        if (!rgb) return '#000000';
        if (rgb.startsWith('#')) return rgb;
        if (!rgb.startsWith('rgb')) return '#000000';
        let a = rgb.split("(")[1].split(")")[0].split(",");
        let b = a.map(function(x) {
            x = parseInt(x).toString(16);
            return (x.length == 1) ? "0" + x : x;
        });
        return "#" + b.join("");
    }
    
    document.addEventListener('click', function(e) { 
        if (!e.target.closest('.card-element') && !e.target.closest('.sidebar') && !e.target.closest('.toolbar') && !e.target.closest('.modal')) { 
            if (selectedElement) { 
                document.querySelectorAll('.card-element').forEach(el => el.classList.remove('selected')); 
                selectedElement = null; 
                imageSizeControls.classList.add('hidden'); 
                imageStyleControls.classList.add('hidden'); 
                shapeProperties.classList.add('hidden');
                tableTextControls.classList.add('hidden');
                addTableBtn.textContent = "Add Table"; 
                updateSidebarControlsState(false); 
                updateLayersList(); 
            } 
        } 
        
        if (e.target.classList.contains('table-cell')) {
            selectedTableCell = e.target;
            if (selectedElement && selectedElement.classList.contains('table-element')) {
                const computedStyle = window.getComputedStyle(selectedTableCell);
                tableFontFamily.value = computedStyle.fontFamily.replace(/['"]/g, '');
                tableFontSize.value = parseInt(computedStyle.fontSize);
                if (tableFontSizeValue) tableFontSizeValue.textContent = tableFontSize.value + 'px';
                tableBoldBtn.classList.toggle('active', computedStyle.fontWeight === 'bold' || parseInt(computedStyle.fontWeight) >= 700);
                tableItalicBtn.classList.toggle('active', computedStyle.fontStyle === 'italic');
                tableUnderlineBtn.classList.toggle('active', computedStyle.textDecoration.includes('underline'));
                tableTextColorPicker.value = rgbToHex(computedStyle.color);
                
                if (computedStyle.textAlign === 'left') setTableAlignButton(tableAlignLeftBtn);
                else if (computedStyle.textAlign === 'center') setTableAlignButton(tableAlignCenterBtn);
                else if (computedStyle.textAlign === 'right') setTableAlignButton(tableAlignRightBtn);
            }
        }
    });
    
    function updateLayersList() {
        layersList.innerHTML = ''; const card = currentCard === 'front' ? cardFront : cardBack; const elements = Array.from(card.querySelectorAll('.card-element')).reverse();
        elements.forEach(element => {
            const layerItem = document.createElement('div'); layerItem.className = 'layer-item'; layerItem.dataset.elementId = element.id;
            if (element === selectedElement) { layerItem.classList.add('active'); }
            let layerName = 'Element';
            if (element.classList.contains('text-element')) {
                const textContent = element.querySelector('.text-content').textContent;
                layerName = 'Text: ' + textContent.substring(0, 10) + (textContent.length > 10 ? '...' : '');
            } else if (element.querySelector('img')) {
                layerName = 'Image';
            } else if (element.classList.contains('shape-element')) {
                    const type = element.dataset.shapeType;
                    layerName = 'Shape: ' + type.charAt(0).toUpperCase() + type.slice(1);
            } else if (element.classList.contains('icon-element')) {
                    layerName = 'Icon';
            } else if (element.classList.contains('table-element')) {
                    layerName = 'Table';
            }
            
            layerItem.innerHTML = `<span>${layerName}</span><div class="layer-actions"><button class="layer-action-btn" data-action="lock" title="Lock"><i class="fas fa-lock${element.classList.contains('locked') ? '' : '-open'}"></i></button><button class="layer-action-btn" data-action="duplicate" title="Duplicate"><i class="fas fa-copy"></i></button><button class="layer-action-btn" data-action="delete" title="Delete"><i class="fas fa-trash"></i></button></div>`;
            layerItem.addEventListener('click', function(e) { if (!e.target.closest('.layer-action-btn')) { selectElement(element); } });
            layerItem.querySelectorAll('.layer-action-btn').forEach(btn => { btn.addEventListener('click', function(e) { e.stopPropagation(); e.preventDefault(); const action = this.getAttribute('data-action'); if (action === 'lock') { toggleElementLock(element); this.innerHTML = element.classList.contains('locked') ? '<i class="fas fa-lock"></i>' : '<i class="fas fa-lock-open"></i>'; } else if (action === 'duplicate') { duplicateElement(element); } else if (action === 'delete') { deleteElement(element); } }); });
            layersList.appendChild(layerItem);
        });
    }
    
    function saveState() { history = history.slice(0, historyStep + 1); const state = { frontHTML: cardFront.innerHTML, frontBG: cardFront.style.cssText, backHTML: cardBack.innerHTML, backBG: cardBack.style.cssText, currentCard: currentCard, orientation: cardOrientation }; history.push(JSON.stringify(state)); historyStep++; if (history.length > 50) { history.shift(); historyStep--; } }
    function undoState() { if (historyStep > 0) { historyStep--; loadState(history[historyStep]); } }
    function redoState() { if (historyStep < history.length - 1) { historyStep++; loadState(history[historyStep]); } }
    function loadState(stateString) { const state = JSON.parse(stateString); cardFront.innerHTML = state.frontHTML; cardFront.style.cssText = state.frontBG; cardBack.innerHTML = state.backHTML; cardBack.style.cssText = state.backBG; if (state.currentCard !== currentCard) { currentCard = state.currentCard; if (currentCard === 'front') frontBtn.click(); else backBtn.click(); } if (state.orientation !== cardOrientation) { toggleCardOrientation(); } selectedElement = null; updateSidebarControlsState(false); reattachEventListeners(); updateLayersList(); }

    undoBtn.addEventListener('click', undoState); redoBtn.addEventListener('click', redoState); undoHeaderBtn.addEventListener('click', undoState); redoHeaderBtn.addEventListener('click', redoState);
    
    function reattachEventListeners() {
        document.querySelectorAll('.card-element').forEach(element => {
            makeElementDraggable(element);
            makeElementResizable(element);
            makeElementRotatable(element);
            
            element.querySelectorAll('.element-action-btn').forEach(btn => {
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);

                if(newBtn.classList.contains('element-lock')) {
                    newBtn.addEventListener('click', e => { e.stopPropagation(); toggleElementLock(element); });
                } else if(newBtn.classList.contains('element-duplicate')) {
                    newBtn.addEventListener('click', e => { e.stopPropagation(); duplicateElement(element); });
                } else if(newBtn.classList.contains('element-delete')) {
                    newBtn.addEventListener('click', e => { e.stopPropagation(); deleteElement(element); });
                }
            });
            
            if (element.classList.contains('table-element')) {
                element.querySelectorAll('.table-cell').forEach(cell => {
                    cell.addEventListener('click', function(e) {
                        e.stopPropagation();
                        selectedTableCell = this;
                    });
                });
            }
        });
    }
    
    previewBtn.addEventListener('click', function() { 
        previewCardFront.innerHTML = cardFront.innerHTML; 
        previewCardFront.style.cssText = cardFront.style.cssText; 
        previewCardBack.innerHTML = cardBack.innerHTML; 
        previewCardBack.style.cssText = cardBack.style.cssText; 
        
        // Set preview card orientation
        const previewCard = document.getElementById('preview-card');
        if (cardOrientation === 'vertical') {
            previewCard.classList.add('vertical');
        } else {
            previewCard.classList.remove('vertical');
        }
        
        [previewCardFront, previewCardBack].forEach(card => { 
            card.style.display = 'flex'; 
            card.style.position = 'absolute'; 
            card.style.width = '100%'; 
            card.style.height = '100%'; 
            card.querySelectorAll('.resize-handle, .rotate-handle, .element-actions, .selected').forEach(el => { 
                el.classList.contains('selected') ? el.classList.remove('selected') : el.remove(); 
            }); 
        }); 
        
        if (currentCard === 'front') { 
            previewCardFront.style.display = 'flex'; 
            previewCardBack.style.display = 'none'; 
        } else { 
            previewCardBack.style.display = 'flex'; 
            previewCardFront.style.display = 'none'; 
        } 
        
        previewModal.classList.add('active'); 
    });
    
    closePreviewBtn.addEventListener('click', () => previewModal.classList.remove('active'));
    previewFrontBtn.addEventListener('click', () => { 
        previewCardFront.style.display = 'flex'; 
        previewCardBack.style.display = 'none'; 
        previewFrontBtn.classList.add('active'); 
        previewBackBtn.classList.remove('active'); 
    });
    previewBackBtn.addEventListener('click', () => { 
        previewCardBack.style.display = 'flex'; 
        previewCardFront.style.display = 'none'; 
        previewBackBtn.classList.add('active'); 
        previewFrontBtn.classList.remove('active'); 
    });
    
    downloadBtn.addEventListener('click', () => downloadModal.classList.add('active'));
    closeDownloadModalBtn.addEventListener('click', () => downloadModal.classList.remove('active'));
    cancelDownloadBtn.addEventListener('click', () => downloadModal.classList.remove('active'));
    pngQuality.addEventListener('input', () => pngQualityValue.textContent = pngQuality.value + '%');
    
    confirmDownloadBtn.addEventListener('click', async function() { 
        const side = document.querySelector('input[name="download-side"]:checked').value; 
        const size = document.querySelector('input[name="download-size"]:checked').value; 
        let width, height; 
        
        if (cardOrientation === 'vertical') {
            if (size === 'small') { width = 300; height = 500; } 
            else if (size === 'medium') { width = 480; height = 800; } 
            else { width = 720; height = 1200; } 
        } else {
            if (size === 'small') { width = 500; height = 300; } 
            else if (size === 'medium') { width = 800; height = 480; } 
            else { width = 1200; height = 720; } 
        }
        
        downloadModal.classList.remove('active'); 
        if (side === 'front') await downloadSingleCard('front', width, height); 
        else if (side === 'back') await downloadSingleCard('back', width, height); 
        else if (side === 'both') { 
            await downloadSingleCard('front', width, height); 
            await downloadSingleCard('back', width, height); 
        } 
    });

    function downloadSingleCard(side, width, height) {
        return new Promise((resolve) => {
            const cardToDownload = side === 'front' ? cardFront : cardBack;
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.width = width + 'px';
            tempContainer.style.height = height + 'px';
            tempContainer.style.overflow = 'hidden';
            tempContainer.style.backgroundColor = '#fff';
            document.body.appendChild(tempContainer);
            const clone = cardToDownload.cloneNode(true);
            clone.style.display = 'flex';
            clone.querySelectorAll('.resize-handle, .rotate-handle, .element-actions, .selected').forEach(el => { el.classList.contains('selected') ? el.classList.remove('selected') : el.remove(); });
            
            const originalWidth = cardOrientation === 'vertical' ? 300 : 500; 
            const originalHeight = cardOrientation === 'vertical' ? 500 : 300; 
            const scale = width / originalWidth;
            
            clone.style.width = originalWidth + 'px';
            clone.style.height = originalHeight + 'px';
            clone.style.transform = `scale(${scale})`;
            clone.style.transformOrigin = 'top left';
            tempContainer.appendChild(clone);
            html2canvas(tempContainer, { width: width, height: height, scale: 1, backgroundColor: null, logging: false, useCORS: true }).then(canvas => {
                const a = document.createElement('a'); a.href = canvas.toDataURL('image/png', pngQuality.value / 100); a.download = `business-card-${side}.png`; document.body.appendChild(a); a.click(); document.body.removeChild(a); document.body.removeChild(tempContainer); showNotification(`Card ${side} downloaded as PNG`); resolve();
            }).catch(() => { document.body.removeChild(tempContainer); showNotification('Error generating image', 'error'); resolve(); });
        });
    }
    
    function showNotification(message, type = 'success') { notification.textContent = message; notification.className = 'notification show'; if (type === 'error') { notification.classList.add('error'); } setTimeout(() => { notification.classList.remove('show'); }, 3000); }

    function renderTemplates() {
        templatesGrid.innerHTML = '';
        const currentTemplates = templates[cardOrientation];
        
        // Add orientation class to templates grid
        templatesGrid.classList.remove('horizontal', 'vertical');
        templatesGrid.classList.add(cardOrientation);
        
        currentTemplates.forEach((template, index) => {
            const item = document.createElement('div'); 
            item.className = 'template-item'; 
            item.dataset.index = index;
            
            const preview = document.createElement('div'); 
            preview.className = 'template-preview ' + cardOrientation;
            preview.style.background = template.style.background;
            
            if (template.elements) { 
                template.elements.forEach(el => { 
                    const textPreview = document.createElement('div'); 
                    textPreview.textContent = el.content; 
                    const previewFontSize = Math.max(parseInt(el.fontSize) / 4, 6); 
                    textPreview.style.cssText = `position: absolute; top: ${el.top}; left: ${el.left}; transform: translate(-50%, -50%); color: ${el.color}; font-family: ${el.fontFamily}; font-size: ${previewFontSize}px; font-weight: ${el.fontWeight || 'normal'}; letter-spacing: ${el.letterSpacing ? (parseFloat(el.letterSpacing) / 4) + 'px' : 'normal'}; text-shadow: ${el.textShadow || 'none'}; white-space: nowrap;`; 
                    preview.appendChild(textPreview); 
                }); 
            }
            
            const name = document.createElement('div'); 
            name.className = 'template-name'; 
            name.textContent = template.name;
            
            item.appendChild(preview); 
            item.appendChild(name); 
            templatesGrid.appendChild(item);
        });
    }

    function loadTemplate(template) {
        cardFront.innerHTML = ''; 
        cardBack.innerHTML = '';
        cardFront.style.cssText = ''; 
        cardFront.style.background = template.style.background; 
        cardBack.style.cssText = ''; 
        cardBack.style.background = template.style.background;
        
        if (template.elements) { 
            template.elements.forEach(el => { 
                const textElement = document.createElement('div'); 
                textElement.className = 'card-element text-element'; 
                textElement.id = 'element-' + elementIdCounter++; 
                const textContent = document.createElement('div'); 
                textContent.className = 'text-content'; 
                textContent.contentEditable = true; 
                textContent.textContent = el.content; 
                textElement.appendChild(textContent); 
                textElement.style.fontFamily = el.fontFamily || 'Montserrat'; 
                textElement.style.fontSize = el.fontSize || '20px'; 
                textElement.style.color = el.color || '#000000'; 
                textElement.style.fontWeight = el.fontWeight || 'normal'; 
                textElement.style.letterSpacing = el.letterSpacing || 'normal'; 
                textElement.style.textShadow = el.textShadow || 'none'; 
                textElement.style.left = el.left || '50%'; 
                textElement.style.top = el.top || '50%'; 
                textElement.style.transform = 'translate(-50%, -50%)'; 
                textElement.style.textAlign = 'center'; 
                createResizeHandles(textElement); 
                createActionButtons(textElement); 
                cardFront.appendChild(textElement); 
            }); 
        }
        
        reattachEventListeners(); 
        frontBtn.click(); 
        updateLayersList(); 
        saveState(); 
        showNotification(`Template '${template.name}' loaded`);
    }

    templatesGrid.addEventListener('click', function(e) { 
        const templateItem = e.target.closest('.template-item'); 
        if (templateItem) { 
            document.querySelectorAll('.template-item').forEach(item => item.classList.remove('active')); 
            templateItem.classList.add('active'); 
            const currentTemplates = templates[cardOrientation];
            loadTemplate(currentTemplates[templateItem.dataset.index]); 
        } 
    });

    const icons = [
        'fas fa-home', 'fas fa-user', 'fas fa-envelope', 'fas fa-phone', 'fas fa-fax',
        'fas fa-globe', 'fas fa-briefcase', 'fas fa-building', 'fas fa-store',
        'fas fa-map-marker-alt', 'fas fa-location-arrow', 'fas fa-link', 'fas fa-camera',
        'fab fa-facebook', 'fab fa-twitter', 'fab fa-linkedin', 'fab fa-instagram', 'fab fa-youtube', 'fab fa-whatsapp',
        'fas fa-heart', 'fas fa-star', 'fas fa-thumbs-up', 'fas fa-comment', 'fas fa-share',
        'fas fa-credit-card', 'fas fa-shopping-cart', 'fas fa-tag', 'fas fa-barcode', 'fas fa-qrcode',
        'fas fa-cogs', 'fas fa-wrench', 'fas fa-tools', 'fas fa-lightbulb',
        'fas fa-print', 'fas fa-download', 'fas fa-upload', 'fas fa-paper-plane'
    ];

    function createIconItem(iconClass) {
        const item = document.createElement('div');
        item.className = 'icon-item';
        item.innerHTML = `<i class="${iconClass}"></i>`;
        item.addEventListener('click', function() {
            addIconElement(iconClass);
        });
        return item;
    }

    function addIconElement(iconClass, parentCard = null, top = '50%', left = '50%') {
        const iconElement = document.createElement('div');
        iconElement.className = 'card-element icon-element';
        iconElement.id = 'element-' + elementIdCounter++;
        iconElement.style.left = left;
        iconElement.style.top = top;
        iconElement.style.transform = 'translate(-50%, -50%)';
        iconElement.innerHTML = `<i class="${iconClass}" style="font-size: ${elementSize.value}px; color: ${shapeFillColor.value};"></i>`;

        createResizeHandles(iconElement);
        createActionButtons(iconElement);

        const targetCard = parentCard || getCurrentCardElement();
        targetCard.appendChild(iconElement);

        makeElementDraggable(iconElement);
        makeElementResizable(iconElement);
        makeElementRotatable(iconElement);
        selectElement(iconElement);
        updateLayersList();
        saveState();
    }

    function populateIconsGrid() {
        iconsGrid.innerHTML = '';
        icons.forEach(iconClass => {
            iconsGrid.appendChild(createIconItem(iconClass));
        });
    }

    elementSize.addEventListener('input', function() {
        if (elementSizeValue) elementSizeValue.textContent = this.value + 'px';
        
        if (selectedElement) {
            if (selectedElement.classList.contains('icon-element')) {
                const icon = selectedElement.querySelector('i');
                icon.style.fontSize = this.value + 'px';
            } else if (selectedElement.classList.contains('shape-element')) {
                selectedElement.style.width = this.value + 'px';
                selectedElement.style.height = this.value + 'px';
            }
            saveState();
        }
    });

    graphicsSearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        const shapeItems = document.querySelectorAll('#shapes-grid .shape-item');
        shapeItems.forEach(item => {
            const shapeType = item.getAttribute('data-shape');
            if (shapeType.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });

        const iconItems = document.querySelectorAll('.icon-item');
        iconItems.forEach(item => {
            const iconClass = item.querySelector('i').className;
            if (iconClass.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    tableFontSize.addEventListener('input', function() {
        if (tableFontSizeValue) tableFontSizeValue.textContent = this.value + 'px';
        if (selectedTableCell) {
            selectedTableCell.style.fontSize = this.value + 'px';
            saveState();
        }
    });

    tableFontFamily.addEventListener('change', function() {
        if (selectedTableCell) {
            selectedTableCell.style.fontFamily = this.value;
            saveState();
        }
    });

    tableBoldBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (selectedTableCell) {
            selectedTableCell.style.fontWeight = this.classList.contains('active') ? 'bold' : 'normal';
            saveState();
        }
    });

    tableItalicBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (selectedTableCell) {
            selectedTableCell.style.fontStyle = this.classList.contains('active') ? 'italic' : 'normal';
            saveState();
        }
    });

    tableUnderlineBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (selectedTableCell) {
            let decoration = '';
            if (this.classList.contains('active')) decoration += 'underline ';
            selectedTableCell.style.textDecoration = decoration.trim();
            saveState();
        }
    });

    tableAlignLeftBtn.addEventListener('click', function() { setTableAlignButton(this); if (selectedTableCell) { selectedTableCell.style.textAlign = 'left'; saveState(); } });
    tableAlignCenterBtn.addEventListener('click', function() { setTableAlignButton(this); if (selectedTableCell) { selectedTableCell.style.textAlign = 'center'; saveState(); } });
    tableAlignRightBtn.addEventListener('click', function() { setTableAlignButton(this); if (selectedTableCell) { selectedTableCell.style.textAlign = 'right'; saveState(); } });

    function setTableAlignButton(activeBtn) { [tableAlignLeftBtn, tableAlignCenterBtn, tableAlignRightBtn].forEach(btn => btn.classList.remove('active')); activeBtn.classList.add('active'); }

    tableTextColorPicker.addEventListener('input', function() {
        if (selectedTableCell) {
            selectedTableCell.style.color = this.value;
            saveState();
        }
    });

    document.querySelectorAll('#tables-menu .color-option').forEach(option => { 
        option.addEventListener('click', function() { 
            document.querySelectorAll('#tables-menu .color-option').forEach(opt => opt.classList.remove('active')); 
            this.classList.add('active'); 
            const color = this.getAttribute('data-color'); 
            tableTextColorPicker.value = color; 
            if (selectedTableCell) { 
                selectedTableCell.style.color = color; 
                saveState(); 
            } 
        }); 
    });

    renderTemplates();
    populateIconsGrid();
});

const safetyAreaButton = document.querySelector('.safety-area-button');
const safetyArea = document.querySelector('.safety-area');
safetyAreaButton.addEventListener('mouseenter', () => { safetyArea.style.border = '2px dashed #5a8f2fff'; });
safetyAreaButton.addEventListener('mouseleave', () => { safetyArea.style.border = '1px dashed #5a8f2fff'; });

const bleedButton = document.querySelector('.bleed-button');
const bleedArea = document.querySelector('.bleed-area');
bleedButton.addEventListener('mouseenter', () => { bleedArea.style.border = '2px solid #eb777d'; });
bleedButton.addEventListener('mouseleave', () => { bleedArea.style.border = '1px solid #eb777d'; });