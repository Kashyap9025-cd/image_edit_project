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
    
    let selectedElement = null;
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

    const templates = [
        {
            name: 'Classic Blue',
            style: {
                background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
            },
            elements: [
                { type: 'text', content: 'John Doe', top: '30%', left: '50%', fontSize: '28px', color: '#FFFFFF', fontFamily: 'Montserrat' },
                { type: 'text', content: 'Web Developer', top: '45%', left: '50%', fontSize: '16px', color: '#FFFFFF', fontFamily: 'Lato' },
                { type: 'text', content: 'john.doe@example.com', top: '70%', left: '50%', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Lato' }
            ]
        },
        {
            name: 'Minimalist White',
            style: {
                background: '#FFFFFF'
            },
            elements: [
                { type: 'text', content: 'JANE SMITH', top: '25%', left: '25%', fontSize: '24px', color: '#333333', fontFamily: 'Poppins' },
                { type: 'text', content: 'Graphic Designer', top: '38%', left: '25%', fontSize: '14px', color: '#555555', fontFamily: 'Poppins' }
            ]
        },
        {
            name: 'Sunrise Gradient',
            style: {
                background: 'linear-gradient(to right, #ff9966, #ff5e62)'
            },
            elements: [
                    { type: 'text', content: 'Your Name', top: '50%', left: '50%', fontSize: '32px', color: '#FFFFFF', fontFamily: 'Benchline', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }
            ]
        },
        {
            name: 'Deep Space',
            style: {
                background: '#000000'
            },
            elements: [
                { type: 'text', content: 'STARGAZER INC.', top: '50%', left: '50%', fontSize: '22px', color: '#FFFFFF', fontFamily: 'Courier New', letterSpacing: '4px' }
            ]
        },
        {
            name: 'Emerald Green',
            style: {
                background: 'radial-gradient(circle, #233329, #06170A)'
            },
            elements: [
                { type: 'text', content: 'Eco Corp', top: '40%', left: '50%', fontSize: '30px', color: '#F0FFF0', fontFamily: 'Georgia' },
                { type: 'text', content: 'Sustainable Solutions', top: '55%', left: '50%', fontSize: '14px', color: '#F0FFF0', fontFamily: 'Georgia' }
            ]
        },
        {
            name: 'Soft Pink',
            style: {
                background: '#fde2e4'
            },
            elements: [
                    { type: 'text', content: 'Beauty Salon', top: '50%', left: '50%', fontSize: '26px', color: '#9d8189', fontFamily: 'Open Sans' }
            ]
        },
        {
            name: 'Corporate Gray',
            style: {
                background: 'linear-gradient(to right, #e9ecef, #ced4da)'
            },
            elements: [
                    { type: 'text', content: 'BUSINESS CONSULTING', top: '35%', left: '50%', fontSize: '20px', color: '#212529', fontFamily: 'Roboto', fontWeight: 'bold' },
                    { type: 'text', content: 'info@business.com', top: '65%', left: '50%', fontSize: '14px', color: '#495057', fontFamily: 'Roboto' }
            ]
        },
        {
            name: 'Oceanic',
            style: {
                background: 'linear-gradient(45deg, #43cea2, #185a9d)'
            },
            elements: [
                    { type: 'text', content: 'Aqua Tech', top: '50%', left: '50%', fontSize: '30px', color: '#ffffff', fontFamily: 'Verdana' }
            ]
        },
        {
            name: 'Vibrant Orange',
            style: {
                background: '#F7971E'
            },
            elements: [
                    { type: 'text', content: 'Creative Agency', top: '50%', left: '50%', fontSize: '24px', color: '#ffffff', fontFamily: 'Arial' }
            ]
        },
        {
            name: 'Royal Purple',
            style: {
                background: 'linear-gradient(to top, #30154ae8, #8754b2)'
            },
            elements: [
                    { type: 'text', content: 'LUXURY EVENTS', top: '50%', left: '50%', fontSize: '24px', color: '#f0e6ff', fontFamily: 'Times New Roman' }
            ]
        }
    ];
    
    fontSizeValue.textContent = fontSize.value + 'px';
    letterSpacingValue.textContent = letterSpacing.value + 'px';
    lineHeightValue.textContent = lineHeight.value;
    selectTool.classList.add('active');
    
    Array.from(fontFamily.options).forEach(option => {
        option.style.fontFamily = option.value;
    });

    saveState();
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const menuId = this.getAttribute('data-menu');
            menuItems.forEach(mi => mi.classList.remove('active'));
            menuContents.forEach(mc => mc.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(`${menuId}-menu`).classList.add('active');
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
            selectedElement.textContent = this.value;
            saveState();
        }
    });
    
    function addTextElement(text, parentCard = null, top = '50%', left = '50%') {
        const textElement = document.createElement('div');
        textElement.className = 'card-element text-element';
        textElement.contentEditable = true;
        textElement.textContent = text;
        textElement.id = 'element-' + elementIdCounter++;
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
        
        const lockBtn = document.createElement('button');
        lockBtn.className = 'element-lock';
        lockBtn.innerHTML = '<i class="fas fa-lock-open"></i>';
        lockBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleElementLock(textElement);
        });
        textElement.appendChild(lockBtn);
        
        const duplicateBtn = document.createElement('button');
        duplicateBtn.className = 'element-duplicate';
        duplicateBtn.innerHTML = '<i class="fas fa-copy"></i>';
        duplicateBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            duplicateElement(textElement);
        });
        textElement.appendChild(duplicateBtn);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'element-delete';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            deleteElement(textElement);
        });
        textElement.appendChild(deleteBtn);
        
        const targetCard = parentCard || (currentCard === 'front' ? cardFront : cardBack);
        targetCard.appendChild(textElement);

        makeElementDraggable(textElement);
        makeElementResizable(textElement);
        makeElementRotatable(textElement);
        selectElement(textElement);
        updateLayersList();
        saveState();
    }
    
    function createResizeHandles(element) {
        const positions = ['tl', 'tr', 'ml', 'mr', 'bl', 'br'];
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
        if (alignLeftBtn.classList.contains('active')) return 'left';
        if (alignCenterBtn.classList.contains('active')) return 'center';
        if (alignRightBtn.classList.contains('active')) return 'right';
        if (alignJustifyBtn.classList.contains('active')) return 'justify';
        return 'left';
    }
    
    fontSize.addEventListener('input', function() {
        fontSizeValue.textContent = this.value + 'px';
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.fontSize = this.value + 'px';
            saveState();
        }
    });
    
    letterSpacing.addEventListener('input', function() {
        letterSpacingValue.textContent = this.value + 'px';
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.letterSpacing = this.value + 'px';
            saveState();
        }
    });
    
    lineHeight.addEventListener('input', function() {
        lineHeightValue.textContent = this.value;
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
    
    boldBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.fontWeight = this.classList.contains('active') ? 'bold' : 'normal';
            saveState();
        }
    });
    
    italicBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.fontStyle = this.classList.contains('active') ? 'italic' : 'normal';
            saveState();
        }
    });
    
    underlineBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.textDecoration = getTextDecoration();
            saveState();
        }
    });
    
    strikeBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.textDecoration = getTextDecoration();
            saveState();
        }
    });
    
    alignLeftBtn.addEventListener('click', function() {
        setAlignButton(this);
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.textAlign = 'left';
            saveState();
        }
    });
    
    alignCenterBtn.addEventListener('click', function() {
        setAlignButton(this);
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.textAlign = 'center';
            saveState();
        }
    });
    
    alignRightBtn.addEventListener('click', function() {
        setAlignButton(this);
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.textAlign = 'right';
            saveState();
        }
    });
    
    alignJustifyBtn.addEventListener('click', function() {
        setAlignButton(this);
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.textAlign = 'justify';
            saveState();
        }
    });
    
    function setAlignButton(activeBtn) {
        [alignLeftBtn, alignCenterBtn, alignRightBtn, alignJustifyBtn].forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
    
    function updateTextShadow() {
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            const h = shadowH.value;
            const v = shadowV.value;
            const blur = shadowBlur.value;
            const color = shadowColorPicker.value;
            selectedElement.style.textShadow = `${h}px ${v}px ${blur}px ${color}`;
        }
    }
    
    shadowH.addEventListener('input', updateTextShadow);
    shadowV.addEventListener('input', updateTextShadow);
    shadowBlur.addEventListener('input', updateTextShadow);
    shadowColorPicker.addEventListener('input', updateTextShadow);
    
    function updateTextOutline() {
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            const width = outlineWidth.value;
            const color = outlineColorPicker.value;
            selectedElement.style.webkitTextStroke = width > 0 ? `${width}px ${color}` : 'none';
        }
    }
    
    outlineWidth.addEventListener('input', updateTextOutline);
    outlineColorPicker.addEventListener('input', updateTextOutline);
    
    
    textColorPicker.addEventListener('input', function() {
        const color = this.value;
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.color = color;
            saveState();
        }
    });
    
    document.querySelectorAll('#text-menu .color-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('#text-menu .color-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const color = this.getAttribute('data-color');
            textColorPicker.value = color;
            if (selectedElement && selectedElement.classList.contains('text-element')) {
                selectedElement.style.color = color;
                saveState();
            }
        });
    });
    
    uploadArea.addEventListener('click', function() {
        imageUpload.click();
    });
    
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
        } else {
            showNotification('Please upload a valid image file', 'error');
        }
    });
    
    replaceImageBtn.addEventListener('click', function() {
        if (selectedElement && selectedElement.querySelector('img')) {
            const tempInput = document.createElement('input');
            tempInput.type = 'file';
            tempInput.accept = 'image/*';
            tempInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const imgData = event.target.result;
                        selectedElement.querySelector('img').src = imgData;
                        saveState();
                        showNotification('Image replaced successfully');
                    };
                    reader.readAsDataURL(file);
                }
            });
            tempInput.click();
        }
    });
    
    function addImageToGallery(imgData) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imgData;
        galleryItem.appendChild(img);
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = uploadedImages.indexOf(imgData);
            if (index > -1) {
                uploadedImages.splice(index, 1);
            }
            galleryItem.remove();
            showNotification('Image removed from gallery');
        });
        galleryItem.appendChild(removeBtn);
        
        galleryItem.addEventListener('click', function() {
            addImageElement(imgData);
        });
        
        imageGallery.appendChild(galleryItem);
    }
    
    presetSizes.forEach(preset => {
        preset.addEventListener('click', function() {
            presetSizes.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            imageWidth.value = this.getAttribute('data-width');
            imageHeight.value = this.getAttribute('data-height');
        });
    });
    
    applyImageSize.addEventListener('click', function() {
        if (selectedElement && selectedElement.querySelector('img')) {
            const img = selectedElement.querySelector('img');
            img.style.width = imageWidth.value + 'px';
            img.style.height = imageHeight.value + 'px';
            saveState();
            showNotification('Image size applied');
        } else {
            showNotification('Please select an image to resize', 'error');
        }
    });
    
    maintainAspect.addEventListener('change', function() {
        if (this.checked && selectedElement && selectedElement.querySelector('img')) {
            const img = selectedElement.querySelector('img');
            const currentWidth = img.clientWidth;
            const currentHeight = img.clientHeight;
            originalImageRatio = currentWidth / currentHeight;
        }
    });
    
    imageWidth.addEventListener('input', function() {
        if (maintainAspect.checked && selectedElement && selectedElement.querySelector('img')) {
            imageHeight.value = Math.round(this.value / originalImageRatio);
        }
    });
    
    imageHeight.addEventListener('input', function() {
        if (maintainAspect.checked && selectedElement && selectedElement.querySelector('img')) {
            imageWidth.value = Math.round(this.value * originalImageRatio);
        }
    });
    
    styleOptions.forEach(option => {
        option.addEventListener('click', function() {
            styleOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            const style = this.getAttribute('data-style');
            applyImageStyle(style);
        });
    });
    
    function applyImageStyle(style) {
        if (selectedElement && selectedElement.querySelector('img')) {
            const img = selectedElement.querySelector('img');
            
            img.style.borderRadius = '';
            img.style.clipPath = '';
            img.style.transform = '';
            img.style.width = '';
            img.style.height = '';
            
            switch(style) {
                case 'square':
                    break;
                case 'circle':
                    img.style.borderRadius = '50%';
                    break;
                case 'rounded':
                    img.style.borderRadius = '15%';
                    break;
                case 'triangle':
                    img.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                    break;
                case 'hexagon':
                    img.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
                    break;
            }
            
            saveState();
        }
    }
    
    function addImageElement(imgData, parentCard = null, width, height, top = '50%', left = '50%') {
        const imageElement = document.createElement('div');
        imageElement.className = 'card-element';
        imageElement.id = 'element-' + elementIdCounter++;
        imageElement.style.left = left;
        imageElement.style.top = top;
        imageElement.style.transform = 'translate(-50%, -50%)';
        
        const img = document.createElement('img');
        img.src = imgData;
        img.style.width = width ? `${width}px` : 'auto';
        img.style.height = height ? `${height}px` : 'auto';

        imageElement.appendChild(img);
        
        createResizeHandles(imageElement);
        
        const lockBtn = document.createElement('button');
        lockBtn.className = 'element-lock';
        lockBtn.innerHTML = '<i class="fas fa-lock-open"></i>';
        lockBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleElementLock(imageElement);
        });
        imageElement.appendChild(lockBtn);
        
        const duplicateBtn = document.createElement('button');
        duplicateBtn.className = 'element-duplicate';
        duplicateBtn.innerHTML = '<i class="fas fa-copy"></i>';
        duplicateBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            duplicateElement(imageElement);
        });
        imageElement.appendChild(duplicateBtn);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'element-delete';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            deleteElement(imageElement);
        });
        imageElement.appendChild(deleteBtn);
        
        const targetCard = parentCard || (currentCard === 'front' ? cardFront : cardBack);
        targetCard.appendChild(imageElement);

        makeElementDraggable(imageElement);
        makeElementResizable(imageElement);
        makeElementRotatable(imageElement);
        selectElement(imageElement);
        updateLayersList();
        saveState();
        
        img.onload = function() {
            originalImageRatio = this.naturalWidth / this.naturalHeight;
            if (selectedElement === imageElement) {
                imageWidth.value = this.clientWidth;
                imageHeight.value = this.clientHeight;
            }
        };
    }
    
    function getCurrentCardElement() {
        return currentCard === 'front' ? cardFront : cardBack;
    }

    document.querySelectorAll('#background-menu .color-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('#background-menu .color-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const color = this.getAttribute('data-color');
            customBgColorPicker.value = color;
            const activeCard = getCurrentCardElement();
            activeCard.style.backgroundColor = color;
            activeCard.style.backgroundImage = '';
            bgUploadArea.querySelector('p').textContent = 'Upload Background Image';
            replaceBgBtn.style.display = 'none';
            saveState();
        });
    });
    
    customBgColorPicker.addEventListener('input', function() {
        const color = this.value;
        const activeCard = getCurrentCardElement();
        activeCard.style.backgroundColor = color;
        activeCard.style.backgroundImage = '';
        bgUploadArea.querySelector('p').textContent = 'Upload Background Image';
        replaceBgBtn.style.display = 'none';
        saveState();
    });
    
    gradientTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            gradientTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentGradient = this.getAttribute('data-gradient');
            applyBackgroundGradient();
        });
    });
    
    addGradientStop.addEventListener('click', function() {
        const newStop = document.createElement('div');
        newStop.className = 'gradient-stop';
        newStop.innerHTML = `
            <div class="gradient-stop-header">
                    <input type="color" class="gradient-stop-color" value="#ffffff">
                    <button class="remove-stop">&times;</button>
            </div>
            <div class="gradient-stop-position">
                <label>Position</label>
                <input type="range" min="0" max="100" value="50">
            </div>
        `;
        gradientStopsContainer.appendChild(newStop);
        attachGradientStopListeners(newStop);
        applyBackgroundGradient();
    });
    
    function attachGradientStopListeners(stopElement) {
        stopElement.querySelector('.gradient-stop-color').addEventListener('input', applyBackgroundGradient);
        stopElement.querySelector('input[type="range"]').addEventListener('input', applyBackgroundGradient);
        const removeBtn = stopElement.querySelector('.remove-stop');
        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                if (gradientStopsContainer.querySelectorAll('.gradient-stop').length > 2) {
                    stopElement.remove();
                    applyBackgroundGradient();
                } else {
                    showNotification('A gradient requires at least two color stops', 'error');
                }
            });
        }
    }
    
    document.querySelectorAll('.gradient-stop').forEach(attachGradientStopListeners);
    
    function applyBackgroundGradient() {
        const stops = [];
        gradientStopsContainer.querySelectorAll('.gradient-stop').forEach(stop => {
            const color = stop.querySelector('.gradient-stop-color').value;
            const position = stop.querySelector('input[type="range"]').value;
            stops.push({ color, position });
        });
        
        stops.sort((a, b) => a.position - b.position);
        
        let gradientString = '';
        const stopsString = stops.map(s => `${s.color} ${s.position}%`).join(', ');
        if (currentGradient === 'linear') {
            gradientString = `linear-gradient(to right, ${stopsString})`;
        } else if (currentGradient === 'radial') {
            gradientString = `radial-gradient(circle, ${stopsString})`;
        }
        
        const activeCard = getCurrentCardElement();
        activeCard.style.backgroundColor = '';
        activeCard.style.backgroundImage = gradientString;
        bgUploadArea.querySelector('p').textContent = 'Upload Background Image';
        replaceBgBtn.style.display = 'none';
        saveState();
    }
    
    bgOptions.forEach(option => {
        option.addEventListener('click', function() {
            bgOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            backgroundPattern = this.getAttribute('data-pattern');
            applyBackgroundPattern();
            saveState();
        });
    });
    
    function applyBackgroundPattern() {
        let bgImage = 'none';
        let bgSize = '';
        
        if (backgroundPattern === 'dots') {
            bgImage = 'radial-gradient(#1890ff 1px, transparent 1px)';
            bgSize = '10px 10px';
        } else if (backgroundPattern === 'lines') {
            bgImage = 'repeating-linear-gradient(45deg, #1890ff, #1890ff 1px, transparent 1px, transparent 10px)';
        } else if (backgroundPattern === 'grid' || backgroundPattern === 'cross') {
            bgImage = 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)';
            bgSize = '10px 10px';
        } else if (backgroundPattern === 'diagonal') {
            bgImage = 'repeating-linear-gradient(-45deg, #1890ff, #1890ff 5px, transparent 5px, transparent 10px)';
        }
        
        const activeCard = getCurrentCardElement();
        activeCard.style.backgroundImage = bgImage;
        activeCard.style.backgroundSize = bgSize;
        
        bgUploadArea.querySelector('p').textContent = 'Upload Background Image';
        replaceBgBtn.style.display = 'none';
    }
    
    bgUploadArea.addEventListener('click', function() {
        bgImageUpload.click();
    });
    
    replaceBgBtn.addEventListener('click', function() {
        bgImageUpload.click();
    });
    
    bgImageUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                backgroundImage = event.target.result;
                const activeCard = getCurrentCardElement();
                activeCard.style.backgroundImage = `url(${backgroundImage})`;
                activeCard.style.backgroundSize = 'cover';
                activeCard.style.backgroundPosition = 'center';

                bgUploadArea.querySelector('p').textContent = 'Replace Background Image';
                replaceBgBtn.style.display = 'block';
                showNotification(`Background image set for ${currentCard} side`);
                saveState();
            };
            reader.readAsDataURL(file);
        } else {
            showNotification('Please upload a valid image file', 'error');
        }
    });
    
    frontBtn.addEventListener('click', function() {
        currentCard = 'front';
        frontBtn.classList.add('active');
        backBtn.classList.remove('active');
        cardFront.style.display = 'flex';
        cardBack.style.display = 'none';
        updateLayersList();
    });
    
    backBtn.addEventListener('click', function() {
        currentCard = 'back';
        backBtn.classList.add('active');
        frontBtn.classList.remove('active');
        cardBack.style.display = 'flex';
        cardFront.style.display = 'none';
        updateLayersList();
    });
    
    selectTool.addEventListener('click', function() {
        currentTool = 'select';
        selectTool.classList.add('active');
        textTool.classList.remove('active');
    });
    
    textTool.addEventListener('click', function() {
        currentTool = 'text';
        textTool.classList.add('active');
        selectTool.classList.remove('active');
    });
    
    gridToggle.addEventListener('click', function() {
        gridEnabled = !gridEnabled;
        this.classList.toggle('active');
        gridOverlay.classList.toggle('active');
    });
    
    zoomIn.addEventListener('click', function() {
        currentZoom = Math.min(currentZoom * 1.2, 3);
        document.getElementById('card-container').style.transform = `scale(${currentZoom})`;
    });
    
    zoomOut.addEventListener('click', function() {
        currentZoom = Math.max(currentZoom / 1.2, 0.5);
        document.getElementById('card-container').style.transform = `scale(${currentZoom})`;
    });
    
    zoomFit.addEventListener('click', function() {
        currentZoom = 1;
        document.getElementById('card-container').style.transform = `scale(${currentZoom})`;
    });
    
    function makeElementDraggable(element) {
        element.addEventListener('mousedown', function(e) {
            if (e.target.classList.contains('resize-handle') || 
                e.target.classList.contains('rotate-handle') || 
                e.target.classList.contains('element-lock') ||
                e.target.classList.contains('element-duplicate') ||
                e.target.classList.contains('element-delete') ||
                element.classList.contains('locked')) {
                return;
            }
            
            if (currentTool === 'text' && !element.classList.contains('text-element')) {
                return;
            }
            
            isDragging = true;
            const rect = element.getBoundingClientRect();
            const parentRect = element.parentElement.getBoundingClientRect();
            const centerX = rect.left - parentRect.left + rect.width / 2;
            const centerY = rect.top - parentRect.top + rect.height / 2;
            startX = e.clientX - parentRect.left - centerX;
            startY = e.clientY - parentRect.top - centerY;
            
            selectElement(element);
            
            document.addEventListener('mousemove', dragElement);
            document.addEventListener('mouseup', stopDragging);
        });
        
        function dragElement(e) {
            if (!isDragging) return;
            e.preventDefault();
            const parentRect = element.parentElement.getBoundingClientRect();
            let newCenterX = e.clientX - parentRect.left - startX;
            let newCenterY = e.clientY - parentRect.top - startY;
            
            newCenterX = Math.max(0, Math.min(newCenterX, parentRect.width));
            newCenterY = Math.max(0, Math.min(newCenterY, parentRect.height));
            
            element.style.left = newCenterX + 'px';
            element.style.top = newCenterY + 'px';
        }
        
        function stopDragging() {
            if (isDragging) {
                isDragging = false;
                saveState();
            }
            document.removeEventListener('mousemove', dragElement);
            document.removeEventListener('mouseup', stopDragging);
        }
    }
    
    function makeElementResizable(element) {
        const handles = element.querySelectorAll('.resize-handle');
        handles.forEach(handle => {
            handle.addEventListener('mousedown', function(e) {
                if (element.classList.contains('locked')) return;

                isResizing = true;
                startX = e.clientX;
                startY = e.clientY;
                startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
                startHeight = parseInt(document.defaultView.getComputedStyle(element).height, 10);
                startLeft = parseInt(element.style.left || 0, 10);
                startTop = parseInt(element.style.top || 0, 10);

                const handleClass = handle.className.split(' ').find(c => c.startsWith('resize-handle-'));
                const handleType = handleClass.split('-')[2];

                document.addEventListener('mousemove', function(e) {
                    if (!isResizing) return;
                    resizeElement(e, handleType);
                });
                document.addEventListener('mouseup', stopResizing);
                e.stopPropagation();
            });
        });
    }
    
    function resizeElement(e, handleType) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startLeft;
        let newTop = startTop;

        switch (handleType) {
            case 'tl':
                newWidth = startWidth - dx;
                newHeight = startHeight - dy;
                newLeft = startLeft + dx;
                newTop = startTop + dy;
                break;
            case 'tr':
                newWidth = startWidth + dx;
                newHeight = startHeight - dy;
                newTop = startTop + dy;
                break;
            case 'ml':
                newWidth = startWidth - dx;
                newLeft = startLeft + dx;
                break;
            case 'mr':
                newWidth = startWidth + dx;
                break;
            case 'bl':
                newWidth = startWidth - dx;
                newHeight = startHeight + dy;
                newLeft = startLeft + dx;
                break;
            case 'br':
                newWidth = startWidth + dx;
                newHeight = startHeight + dy;
                break;
        }

        newWidth = Math.max(20, newWidth);
        newHeight = Math.max(20, newHeight);

        selectedElement.style.width = newWidth + 'px';
        selectedElement.style.height = newHeight + 'px';
        selectedElement.style.left = newLeft + 'px';
        selectedElement.style.top = newTop + 'px';
    }
    
    function stopResizing() {
        if (isResizing) {
            isResizing = false;
            saveState();
        }
        document.removeEventListener('mousemove', resizeElement);
        document.removeEventListener('mouseup', stopResizing);
    }
    
    function makeElementRotatable(element) {
        const rotateHandle = element.querySelector('.rotate-handle');
        
        rotateHandle.addEventListener('mousedown', function(e) {
            if (element.classList.contains('locked')) return;
            
            isRotating = true;
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
            const transform = element.style.transform;
            const rotateMatch = transform.match(/rotate\(([^)]+)\)/);
            const currentRotation = rotateMatch ? parseFloat(rotateMatch[1]) : 0;
            startAngle -= currentRotation;
            
            document.addEventListener('mousemove', rotateElement);
            document.addEventListener('mouseup', stopRotating);
            e.stopPropagation();
        });
        
        function rotateElement(e) {
            if (!isRotating) return;
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
            const rotation = angle - startAngle;
            const transform = element.style.transform;
            const newTransform = transform.replace(/rotate\([^)]*\)/, '') + ` rotate(${rotation}deg)`;
            element.style.transform = newTransform.trim();
        }
        
        function stopRotating() {
            if (isRotating) {
                isRotating = false;
                saveState();
            }
            document.removeEventListener('mousemove', rotateElement);
            document.removeEventListener('mouseup', stopRotating);
        }
    }

    function updateSidebarControlsState(isLocked) {
        document.querySelectorAll('.sidebar input, .sidebar select, .sidebar button').forEach(c => c.disabled = false);
        document.querySelectorAll('.sidebar .disabled-control').forEach(c => c.classList.remove('disabled-control'));

        if (selectedElement && isLocked) {
            if (selectedElement.classList.contains('text-element')) {
                const textControls = document.querySelectorAll('#text-menu input, #text-menu select, #text-menu button');
                textControls.forEach(control => control.disabled = true);
                const textNonFormControls = document.querySelectorAll('#text-menu .color-option');
                textNonFormControls.forEach(control => control.classList.add('disabled-control'));
            }
            if (selectedElement.querySelector('img')) {
                const imageEditControls = document.querySelectorAll('#image-size-controls input, #image-size-controls button');
                imageEditControls.forEach(control => control.disabled = true);
                const imagePresetSizes = document.querySelectorAll('#image-size-controls .preset-size');
                imagePresetSizes.forEach(control => control.classList.add('disabled-control'));
            }
        }
    }
    
    function toggleElementLock(element) {
        element.classList.toggle('locked');
        const lockBtn = element.querySelector('.element-lock');
        const isLocked = element.classList.contains('locked');

        if (isLocked) {
            lockBtn.innerHTML = '<i class="fas fa-lock"></i>';
            if (element.classList.contains('text-element')) {
                element.contentEditable = false;
            }
        } else {
            lockBtn.innerHTML = '<i class="fas fa-lock-open"></i>';
            if (element.classList.contains('text-element')) {
                element.contentEditable = true;
            }
        }

        if (selectedElement === element) {
            updateSidebarControlsState(isLocked);
        }
        saveState();
    }
    
    function duplicateElement(element) {
        const clone = element.cloneNode(true);
        clone.id = 'element-' + elementIdCounter++;
        
        const currentLeft = parseInt(element.style.left || '0');
        const currentTop = parseInt(element.style.top || '0');
        clone.style.left = (currentLeft + 20) + 'px';
        clone.style.top = (currentTop + 20) + 'px';
        
        const parentCard = currentCard === 'front' ? cardFront : cardBack;
        parentCard.appendChild(clone);
        
        reattachEventListeners();
        selectElement(clone);
        updateLayersList();
        saveState();
        showNotification('Element duplicated');
    }
    
    function deleteElement(element) {
        element.remove();
        selectedElement = null;
        updateLayersList();
        saveState();
        showNotification('Element deleted');
    }
    
    function selectElement(element) {
        document.querySelectorAll('.card-element').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        selectedElement = element;
        
        if (element.classList.contains('text-element')) {
            const computedStyle = window.getComputedStyle(element);
            fontFamily.value = computedStyle.fontFamily.replace(/['"]/g, '');
            fontSize.value = parseInt(computedStyle.fontSize);
            fontSizeValue.textContent = fontSize.value + 'px';
            letterSpacing.value = parseFloat(computedStyle.letterSpacing) || 0;
            letterSpacingValue.textContent = letterSpacing.value + 'px';
            lineHeight.value = parseFloat(computedStyle.lineHeight) / parseInt(computedStyle.fontSize) || 1;
            lineHeightValue.textContent = lineHeight.value;
            
            boldBtn.classList.toggle('active', computedStyle.fontWeight === 'bold' || parseInt(computedStyle.fontWeight) >= 700);
            italicBtn.classList.toggle('active', computedStyle.fontStyle === 'italic');
            underlineBtn.classList.toggle('active', computedStyle.textDecoration.includes('underline'));
            strikeBtn.classList.toggle('active', computedStyle.textDecoration.includes('line-through'));
            
            if (computedStyle.textAlign === 'left') setAlignButton(alignLeftBtn);
            else if (computedStyle.textAlign === 'center') setAlignButton(alignCenterBtn);
            else if (computedStyle.textAlign === 'right') setAlignButton(alignRightBtn);
            else if (computedStyle.textAlign === 'justify') setAlignButton(alignJustifyBtn);
            
            textColorPicker.value = rgbToHex(computedStyle.color);
            
            menuItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-menu') === 'text') {
                    item.classList.add('active');
                    document.getElementById('text-menu').classList.add('active');
                    document.getElementById('images-menu').classList.remove('active');
                    document.getElementById('background-menu').classList.remove('active');
                    document.getElementById('layers-menu').classList.remove('active');
                }
            });
            
            textInput.value = element.textContent;
        }
        
        if (element.querySelector('img')) {
            imageSizeControls.classList.remove('hidden');
            imageStyleControls.classList.remove('hidden');
            const img = element.querySelector('img');
            imageWidth.value = img.clientWidth;
            imageHeight.value = img.clientHeight;
            originalImageRatio = img.clientWidth / img.clientHeight;
            
            menuItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-menu') === 'images') {
                    item.classList.add('active');
                    document.getElementById('images-menu').classList.add('active');
                    document.getElementById('text-menu').classList.remove('active');
                    document.getElementById('background-menu').classList.remove('active');
                    document.getElementById('layers-menu').classList.remove('active');
                }
            });
        } else {
            imageSizeControls.classList.add('hidden');
            imageStyleControls.classList.add('hidden');
        }
        
        updateSidebarControlsState(element.classList.contains('locked'));
        updateLayersList();
    }
    
    function rgbToHex(rgb) {
        if (!rgb || !rgb.startsWith('rgb')) return '#000000';
        let a = rgb.split("(")[1].split(")")[0];
        a = a.split(",");
        let b = a.map(function(x){
            x = parseInt(x).toString(16);
            return (x.length==1) ? "0"+x : x;
        });
        return "#" + b.join("");
    }
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.card-element') && 
            !e.target.closest('.sidebar') && 
            !e.target.closest('.toolbar') &&
            !e.target.closest('.modal')) {
            
            if (selectedElement) {
                document.querySelectorAll('.card-element').forEach(el => el.classList.remove('selected'));
                selectedElement = null;
                imageSizeControls.classList.add('hidden');
                imageStyleControls.classList.add('hidden');
                updateSidebarControlsState(false);
                updateLayersList();
            }
        }
    });
    
    function updateLayersList() {
        layersList.innerHTML = '';
        const card = currentCard === 'front' ? cardFront : cardBack;
        const elements = Array.from(card.querySelectorAll('.card-element')).reverse();
        
        elements.forEach(element => {
            const layerItem = document.createElement('div');
            layerItem.className = 'layer-item';
            layerItem.dataset.elementId = element.id;

            if (element === selectedElement) {
                layerItem.classList.add('active');
            }
            
            let layerName = 'Element';
            if (element.classList.contains('text-element')) {
                layerName = 'Text: ' + element.textContent.substring(0, 10) + (element.textContent.length > 10 ? '...' : '');
            } else if (element.querySelector('img')) {
                layerName = 'Image';
            }
            
            layerItem.innerHTML = `
                <span>${layerName}</span>
                <div class="layer-actions">
                    <button class="layer-action-btn" data-action="lock" title="Lock"><i class="fas fa-lock${element.classList.contains('locked') ? '' : '-open'}"></i></button>
                    <button class="layer-action-btn" data-action="duplicate" title="Duplicate"><i class="fas fa-copy"></i></button>
                    <button class="layer-action-btn" data-action="delete" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            `;
            
            layerItem.addEventListener('click', function(e) {
                if (!e.target.closest('.layer-action-btn')) {
                    selectElement(element);
                }
            });
            
            const actionBtns = layerItem.querySelectorAll('.layer-action-btn');
            actionBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    const action = this.getAttribute('data-action');
                    if (action === 'lock') {
                        toggleElementLock(element);
                        this.innerHTML = element.classList.contains('locked') ? '<i class="fas fa-lock"></i>' : '<i class="fas fa-lock-open"></i>';
                    } else if (action === 'duplicate') {
                        duplicateElement(element);
                    } else if (action === 'delete') {
                        deleteElement(element);
                    }
                });
            });
            
            layersList.appendChild(layerItem);
        });
    }
    
    function saveState() {
        history = history.slice(0, historyStep + 1);
        const state = {
            frontHTML: cardFront.innerHTML,
            frontBG: cardFront.style.cssText,
            backHTML: cardBack.innerHTML,
            backBG: cardBack.style.cssText,
            currentCard: currentCard
        };
        history.push(JSON.stringify(state));
        historyStep++;
        
        if (history.length > 50) {
            history.shift();
            historyStep--;
        }
    }
    
    function undoState() {
        if (historyStep > 0) {
            historyStep--;
            loadState(history[historyStep]);
        }
    }

    function redoState() {
        if (historyStep < history.length - 1) {
            historyStep++;
            loadState(history[historyStep]);
        }
    }

    function loadState(stateString) {
        const state = JSON.parse(stateString);
        cardFront.innerHTML = state.frontHTML;
        cardFront.style.cssText = state.frontBG;
        cardBack.innerHTML = state.backHTML;
        cardBack.style.cssText = state.backBG;

        if (state.currentCard !== currentCard) {
            currentCard = state.currentCard;
            if (currentCard === 'front') frontBtn.click();
            else backBtn.click();
        }
        
        selectedElement = null;
        updateSidebarControlsState(false);
        reattachEventListeners();
        updateLayersList();
    }

    undoBtn.addEventListener('click', undoState);
    redoBtn.addEventListener('click', redoState);
    undoHeaderBtn.addEventListener('click', undoState);
    redoHeaderBtn.addEventListener('click', redoState);
    
    function reattachEventListeners() {
        document.querySelectorAll('.card-element').forEach(element => {
            makeElementDraggable(element);
            makeElementResizable(element);
            makeElementRotatable(element);
            
            const lockBtn = element.querySelector('.element-lock');
            if (lockBtn) {
                const newLockBtn = lockBtn.cloneNode(true);
                lockBtn.parentNode.replaceChild(newLockBtn, lockBtn);
                newLockBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleElementLock(element);
                });
            }
            
            const duplicateBtn = element.querySelector('.element-duplicate');
            if (duplicateBtn) {
                const newDuplicateBtn = duplicateBtn.cloneNode(true);
                duplicateBtn.parentNode.replaceChild(newDuplicateBtn, duplicateBtn);
                newDuplicateBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    duplicateElement(element);
                });
            }
            
            const deleteBtn = element.querySelector('.element-delete');
            if (deleteBtn) {
                const newDeleteBtn = deleteBtn.cloneNode(true);
                deleteBtn.parentNode.replaceChild(newDeleteBtn, deleteBtn);
                newDeleteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    deleteElement(element);
                });
            }
        });
    }
    
    previewBtn.addEventListener('click', function() {
        previewCardFront.innerHTML = cardFront.innerHTML;
        previewCardFront.style.cssText = cardFront.style.cssText;
        previewCardBack.innerHTML = cardBack.innerHTML;
        previewCardBack.style.cssText = cardBack.style.cssText;

        [previewCardFront, previewCardBack].forEach(card => {
            card.style.display = 'flex';
            card.style.position = 'absolute';
            card.style.width = '100%';
            card.style.height = '100%';
            card.querySelectorAll('.resize-handle, .rotate-handle, .element-lock, .element-duplicate, .element-delete, .selected').forEach(el => {
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
        const format = 'png';
        let width, height;
        
        if (size === 'small') {
            width = 500;
            height = 300;
        } else if (size === 'medium') {
            width = 800;
            height = 480;
        } else if (size === 'large') {
            width = 1200;
            height = 720;
        }
        
        downloadModal.classList.remove('active');
        
        if (side === 'front') {
            await downloadSingleCard('front', width, height, format);
        } else if (side === 'back') {
            await downloadSingleCard('back', width, height, format);
        } else if (side === 'both') {
            await downloadSingleCard('front', width, height, format);
            await downloadSingleCard('back', width, height, format);
        }
    });

    function downloadSingleCard(side, width, height, format) {
        return new Promise((resolve, reject) => {
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
            clone.querySelectorAll('.resize-handle, .rotate-handle, .element-lock, .element-duplicate, .element-delete, .selected').forEach(el => {
                if (el.classList.contains('selected')) {
                    el.classList.remove('selected');
                } else {
                    el.remove();
                }
            });

            const originalWidth = 500;
            const originalHeight = 300;
            const scale = width / originalWidth;

            clone.style.width = originalWidth + 'px';
            clone.style.height = originalHeight + 'px';
            clone.style.transform = `scale(${scale})`;
            clone.style.transformOrigin = 'top left';
            
            tempContainer.appendChild(clone);
            
            html2canvas(tempContainer, {
                width: width,
                height: height,
                scale: 1,
                backgroundColor: null,
                logging: false,
                useCORS: true
            }).then(canvas => {
                const url = canvas.toDataURL(`image/${format}`);
                const a = document.createElement('a');
                a.href = url;
                a.download = `business-card-${side}.${format}`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                document.body.removeChild(tempContainer);
                showNotification(`Card ${side} downloaded as ${format.toUpperCase()}`);
                resolve();
            }).catch(error => {
                document.body.removeChild(tempContainer);
                showNotification('Error generating image', 'error');
                console.error('Download error:', error);
                reject(error);
            });
        });
    }
    
    function showNotification(message, type = 'success') {
        notification.textContent = message;
        notification.className = 'notification show';
        if (type === 'error') {
            notification.classList.add('error');
        }
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function renderTemplates() {
        templatesGrid.innerHTML = '';
        templates.forEach((template, index) => {
            const item = document.createElement('div');
            item.className = 'template-item';
            item.dataset.index = index;

            const preview = document.createElement('div');
            preview.className = 'template-preview';
            preview.style.background = template.style.background;

            if (template.elements) {
                template.elements.forEach(el => {
                    const textPreview = document.createElement('div');
                    textPreview.textContent = el.content;
                    const originalFontSize = parseInt(el.fontSize);
                    const previewFontSize = Math.max(originalFontSize / 4, 6);

                    textPreview.style.cssText = `
                        position: absolute;
                        top: ${el.top};
                        left: ${el.left};
                        transform: translate(-50%, -50%);
                        color: ${el.color};
                        font-family: ${el.fontFamily};
                        font-size: ${previewFontSize}px;
                        font-weight: ${el.fontWeight || 'normal'};
                        letter-spacing: ${el.letterSpacing ? (parseFloat(el.letterSpacing) / 4) + 'px' : 'normal'};
                        text-shadow: ${el.textShadow || 'none'};
                        white-space: nowrap;
                    `;
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
        
        const bgStyle = template.style.background;
        cardFront.style.cssText = '';
        cardFront.style.background = bgStyle;
        cardBack.style.cssText = '';
        cardBack.style.background = bgStyle;

        if (template.elements) {
            template.elements.forEach(el => {
                const textElement = document.createElement('div');
                textElement.className = 'card-element text-element';
                textElement.contentEditable = true;
                textElement.textContent = el.content;
                textElement.id = 'element-' + elementIdCounter++;
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
                
                const lockBtn = document.createElement('button');
                lockBtn.className = 'element-lock';
                lockBtn.innerHTML = '<i class="fas fa-lock-open"></i>';
                textElement.appendChild(lockBtn);
                
                const duplicateBtn = document.createElement('button');
                duplicateBtn.className = 'element-duplicate';
                duplicateBtn.innerHTML = '<i class="fas fa-copy"></i>';
                textElement.appendChild(duplicateBtn);
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'element-delete';
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
                textElement.appendChild(deleteBtn);
                
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
            const index = templateItem.dataset.index;
            loadTemplate(templates[index]);
        }
    });

    renderTemplates();
});

const safetyAreaButton = document.querySelector('.safety-area-button');
const safetyArea = document.querySelector('.safety-area');

safetyAreaButton.addEventListener('mouseenter', () => {
    safetyArea.style.border = '2px dashed #5a8f2fff';
});

safetyAreaButton.addEventListener('mouseleave', () => {
    safetyArea.style.border = '1px dashed #5a8f2fff';
});

const bleedButton = document.querySelector('.bleed-button');
const bleedArea = document.querySelector('.bleed-area');

bleedButton.addEventListener('mouseenter', () => {
    bleedArea.style.border = '2px solid #eb777d';
});

bleedButton.addEventListener('mouseleave', () => {
    bleedArea.style.border = '1px solid #eb777d';
});