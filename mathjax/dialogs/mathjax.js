/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

'use strict';

CKEDITOR.dialog.add( 'mathjax', function( editor ) {

	var preview,
		lang = editor.lang.mathjax;

	return {
	    title: 'Томъёо бичих талбар',
	    minWidth: 800,
	    minHeight: 500,
		contents: [
			{
				id: 'info',
				elements: [
                                 {
                                     type: 'hbox',
                                     children:
                                     [
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/x.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\times");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0287_Layer-3.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\div");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                             type: 'html',
                                             html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0286_Layer-4.png" style="width:40px; height:30px;" class="firsttab"/>',
                                             onClick: function (e) {
                                                 //alert(e.target);
                                                 var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                 textareaObj.setValue(textareaObj.getValue() + "\\pm");
                                                 preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                             }
                                         },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0285_Layer-5.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\mp");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                             type: 'html',
                                             html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0284_Layer-6.png" style="width:40px; height:30px;" class="firsttab"/>',
                                             onClick: function (e) {
                                                 //alert(e.target);
                                                 var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                 textareaObj.setValue(textareaObj.getValue() + "\\cdot");
                                                 preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                             }
                                         },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0283_Layer-7.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\star");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                             type: 'html',
                                             html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0282_Layer-8.png" style="width:40px; height:30px;" class="firsttab"/>',
                                             onClick: function (e) {
                                                 //alert(e.target);
                                                 var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                 textareaObj.setValue(textareaObj.getValue() + "\\sqrt{ab}");
                                                 preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                             }
                                         },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0281_Layer-9.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\sqrt[n]{ab}");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                             type: 'html',
                                             html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0278_Layer-12.png" style="width:40px; height:30px;" class="firsttab"/>',
                                             onClick: function (e) {
                                                 //alert(e.target);
                                                 var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                 textareaObj.setValue(textareaObj.getValue() + "\\log_{a}{b}");
                                                 preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                             }
                                         },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0277_Layer-13.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\lg{ab}");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                             type: 'html',
                                             html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0276_Layer-1.png" style="width:40px; height:30px;" class="firsttab"/>',
                                             onClick: function (e) {
                                                 //alert(e.target);
                                                 var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                 textareaObj.setValue(textareaObj.getValue() + "a^{b}");
                                                 preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                             }
                                         },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0275_Layer-14.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "a_{b}");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                             type: 'html',
                                             html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0274_Layer-15.png" style="width:40px; height:30px;" class="firsttab"/>',
                                             onClick: function (e) {
                                                 //alert(e.target);
                                                 var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                 textareaObj.setValue(textareaObj.getValue() + "c_a^b");
                                                 preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                             }
                                         },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0273_Layer-16.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\widetilde{ab}");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0272_Layer-2.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\widehat{ab}");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0271_Layer-17.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\overleftarrow{ab}");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0270_Layer-18.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\overrightarrow{ab}");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0269_Layer-19.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\overbrace{ab}");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0268_Layer-20.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\underbrace{ab}");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                        {
                                            type: 'html',
                                            html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0267_Layer-21.png" style="width:40px; height:30px;" class="firsttab"/>',
                                            onClick: function (e) {
                                                //alert(e.target);
                                                var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                textareaObj.setValue(textareaObj.getValue() + "\\underline{ab}");
                                                preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                            }
                                        },
                                        {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0266_Layer-22.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\overline{ab}");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                    
                                     ]
                                 },
                                     {
                                         type: 'hbox',
                                         children:
                                         [
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0265_Layer-23.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\frac{ab}{cd}");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0264_Layer-24.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\frac{\partial a}{\partial b}");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0263_Layer-25.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\frac{\text{d}x}{\text{d}y}");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0262_Layer-26.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\lim_{a \\rightarrow b}");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0261_Layer-27.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\int_{a}^{b} ");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0260_Layer-28.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\oint_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0259_Layer-29.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\prod_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0258_Layer-30.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\coprod_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0257_Layer-31.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\bigcap_a^b ");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0256_Layer-32.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\bigcup_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0255_Layer-33.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\bigvee_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0254_Layer-34.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\bigwedge_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0253_Layer-35.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\bigsqcup_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0252_Layer-36.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\sum_a^b");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0251_Layer-37.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\left(\\begin{array}{c}a\\\\ b\\end{array}\\right)");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0250_Layer-38.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\begin{bmatrix}a & b \\\\c & d \\end{bmatrix}");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0249_Layer-39.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\begin{cases}a & x = 0\\\\b & x > 0\\end{cases}");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0204_Layer-84.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\alpha");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0203_Layer-85.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\beta");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0202_Layer-86.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\gamma");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },
                                            {
                                                type: 'html',
                                                html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0201_Layer-87.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                onClick: function (e) {
                                                    //alert(e.target);
                                                    var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                    textareaObj.setValue(textareaObj.getValue() + "\\delta");
                                                    preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                }
                                            },

                                         ]
                                     },
                                      {
                                          type: 'hbox',
                                          children:
                                          [
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0200_Layer-88.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\epsilon");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0199_Layer-89.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\zeta");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0198_Layer-90.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\eta");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0197_Layer-91.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\theta");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0196_Layer-92.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\iota");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0195_Layer-93.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\kappa");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0194_Layer-94.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\lambda");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0193_Layer-95.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\mu");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0192_Layer-96.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\nu");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0191_Layer-97.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\xi");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0190_Layer-98.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\pi");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0189_Layer-99.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\rho");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0188_Layer-100.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\sigma");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0187_Layer-101.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\tau");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0186_Layer-102.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\upsilon");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0185_Layer-103.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\phi");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0184_Layer-104.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\chi");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0183_Layer-105.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\psi");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0182_Layer-106.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\omega");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0181_Layer-107.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\arccos");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },
                                             {
                                                 type: 'html',
                                                 html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0180_Layer-108.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                 onClick: function (e) {
                                                     //alert(e.target);
                                                     var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                     textareaObj.setValue(textareaObj.getValue() + "\\arcsin");
                                                     preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                 }
                                             },

                                          ]
                                      },
                                        {
                                            type: 'hbox',
                                            children:
                                            [
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0179_Layer-109.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\arctan");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0178_Layer-110.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\cos");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0177_Layer-111.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\cosh");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0176_Layer-112.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\coth");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0175_Layer-113.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\cot");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0177_Layer-111.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\csc");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\sec");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\sin");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\sinh");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\tan");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0173_Layer-115.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\tanh");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0172_Layer-116.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\exp");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0171_Layer-117.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\log");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0170_Layer-118.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\ln");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0169_Layer-119.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\max");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0168_Layer-120.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\min");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0167_Layer-121.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\sup");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0166_Layer-122.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\inf");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0165_Layer-123.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\lim");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0164_Layer-124.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\gcd");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },
                                               {
                                                   type: 'html',
                                                   html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0163_Layer-125.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                   onClick: function (e) {
                                                       //alert(e.target);
                                                       var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                       textareaObj.setValue(textareaObj.getValue() + "\\hom");
                                                       preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                   }
                                               },

                                            ]
                                        },
                                         {
                                             type: 'hbox',
                                             children:
                                             [
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0162_Layer-126.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\ker");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0161_Layer-127.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\det");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0160_Layer-128.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\bmod");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0247_Layer-41.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\neq");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0245_Layer-43.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\leq");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0246_Layer-42.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\geq");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0248_Layer-40.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\sim");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0244_Layer-44.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\approx");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0243_Layer-45.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\cong");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0242_Layer-46.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\equiv");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0241_Layer-47.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\propto");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0240_Layer-48.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\ll");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0239_Layer-49.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\gg");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0238_Layer-50.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\in");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0237_Layer-51.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\subset");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0236_Layer-52.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\subseteq");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0235_Layer-53.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\prec");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0234_Layer-54.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\preceq");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0233_Layer-55.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\simeq");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0232_Layer-56.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\asymp");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },
                                                {
                                                    type: 'html',
                                                    html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0231_Layer-57.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                    onClick: function (e) {
                                                        //alert(e.target);
                                                        var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                        textareaObj.setValue(textareaObj.getValue() + "\\doteq");
                                                        preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                    }
                                                },

                                             ]
                                         },
                                          {
                                              type: 'hbox',
                                              children:
                                              [
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0230_Layer-58.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\succ");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0229_Layer-59.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\succeq");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0228_Layer-60.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\sqsubseteq");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0227_Layer-61.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\sqsupseteq");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0226_Layer-62.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\ni");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0224_Layer-64.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\models");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0225_Layer-63.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\vdash");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0223_Layer-65.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\dashv");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0222_Layer-66.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\perp");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0221_Layer-67.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\mid");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0220_Layer-68.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\parallel");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0219_Layer-69.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\smile");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0218_Layer-70.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\frown");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0217_Layer-71.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\bowtie");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0216_Layer-72.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\unlhd");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0215_Layer-73.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\unrhd");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0214_Layer-74.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\hat{a}");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0213_Layer-75.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\check{a}");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0212_Layer-76.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\breve{a}");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0209_Layer-79.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\grave{a}");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },
                                                 {
                                                     type: 'html',
                                                     html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0210_Layer-78.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                     onClick: function (e) {
                                                         //alert(e.target);
                                                         var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                         textareaObj.setValue(textareaObj.getValue() + "\\tilde{a}");
                                                         preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                     }
                                                 },

                                              ]
                                          },
                                            {
                                                type: 'hbox',
                                                children:
                                                [
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0208_Layer-80.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\bar{a}");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0207_Layer-81.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\vec{a}");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0206_Layer-82.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\dot{a}");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0205_Layer-83.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\ddot{a}");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0159_Layer-129.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\left(");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0158_Layer-130.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\right)");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0157_Layer-131.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\left[");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0156_Layer-132.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\right]");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0155_Layer-133.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\left\\{");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0154_Layer-134.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\right\\}");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0153_Layer-135.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\lfloor");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0152_Layer-136.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\lceil");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0151_Layer-137.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\rfloor");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0150_Layer-138.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\rceil");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0149_Layer-139.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\langle");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0148_Layer-140.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\rangle");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0147_Layer-141.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\backslash");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0146_Layer-142.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\cap");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0145_Layer-143.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\cup");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0144_Layer-144.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\uplus");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },
                                                   {
                                                       type: 'html',
                                                       html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0143_Layer-145.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                       onClick: function (e) {
                                                           //alert(e.target);
                                                           var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                           textareaObj.setValue(textareaObj.getValue() + "\\sqcap");
                                                           preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                       }
                                                   },

                                                ]
                                            },
                                             {
                                                 type: 'hbox',
                                                 children:
                                                 [
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0141_Layer-147.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\vee");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0140_Layer-148.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\wedge");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0139_Layer-149.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\wr");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0138_Layer-150.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\leftarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0137_Layer-151.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\Leftarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0136_Layer-152.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\rightarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0135_Layer-153.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\Rightarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0132_Layer-156.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\leftrightarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0133_Layer-155.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\Leftrightarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0134_Layer-154.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\mapsto");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0131_Layer-157.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\leftharpoonup");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0130_Layer-158.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\leftharpoondown");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0129_Layer-159.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\rightleftharpoons");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0128_Layer-160.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\leftrightharpoons");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0127_Layer-161.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\hookrightarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0126_Layer-162.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\rightharpoonup");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0125_Layer-163.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\uparrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0124_Layer-164.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\Uparrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0118_Layer-170.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\downarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0123_Layer-165.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\Downarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },
                                                    {
                                                        type: 'html',
                                                        html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0119_Layer-169.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                        onClick: function (e) {
                                                            //alert(e.target);
                                                            var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                            textareaObj.setValue(textareaObj.getValue() + "\\updownarrow");
                                                            preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                        }
                                                    },

                                                 ]
                                             },
                                              {
                                                  type: 'hbox',
                                                  children:
                                                  [
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0117_Layer-171.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\Updownarrow");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0116_Layer-172.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\leftleftarrows");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0111_Layer-177.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\rightrightarrows");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0112_Layer-176.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\leftrightarrows");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0110_Layer-178.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\rightleftarrows");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0109_Layer-179.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\Lleftarrow");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0105_Layer-183.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\Rrightarrow");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0104_Layer-184.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\twoheadleftarrow");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0108_Layer-180.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\twoheadrightarrow");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0107_Layer-181.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\leftarrowtail");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0106_Layer-182.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\rightarrowtail");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0103_Layer-185.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\looparrowleft");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0100_Layer-188.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\looparrowright");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0099_Layer-189.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\curvearrowleft");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0098_Layer-190.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\curvearrowright");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0101_Layer-187.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\circlearrowleft");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0102_Layer-186.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\circlearrowright");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0097_Layer-191.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\dashleftarrow");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0096_Layer-192.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\dashrightarrow");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0094_Layer-194.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\Lsh");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },
                                                     {
                                                         type: 'html',
                                                         html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0093_Layer-195.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                         onClick: function (e) {
                                                             //alert(e.target);
                                                             var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                             textareaObj.setValue(textareaObj.getValue() + "\\Rsh");
                                                             preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                         }
                                                     },

                                                  ]
                                              },
                                               {
                                                   type: 'hbox',
                                                   children:
                                                   [
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0092_Layer-196.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\upuparrows");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0091_Layer-197.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\downdownarrows");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0095_Layer-193.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\upharpoonleft");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0090_Layer-198.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\upharpoonright");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0089_Layer-199.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\downharpoonleft");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0085_Layer-203.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\downharpoonright");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0086_Layer-202.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\rightsquigarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0087_Layer-201.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\leftrightsquigarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0088_Layer-200.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\multimap");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0084_Layer-204.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\nleftarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0083_Layer-205.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\nrightarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0082_Layer-206.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\nLeftarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0081_Layer-207.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\nRightarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0080_Layer-208.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\nleftrightarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0079_Layer-209.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\nLeftrightarrow");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0013_Layer-275.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\mho");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0012_Layer-276.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\infty");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0011_Layer-277.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\partial");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0010_Layer-278.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\eth");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0072_Layer-216.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\angle");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },
                                                      {
                                                          type: 'html',
                                                          html: '<img src="' + CKEDITOR.plugins.get('mathjax').path + '/images/iconuud_0067_Layer-221.png" style="width:40px; height:30px;" class="firsttab"/>',
                                                          onClick: function (e) {
                                                              //alert(e.target);
                                                              var textareaObj = CKEDITOR.dialog.getCurrent().getContentElement('info', 'equation');
                                                              textareaObj.setValue(textareaObj.getValue() + "\\checkmark");
                                                              preview.setValue('\\(' + textareaObj.getValue() + '\\)');
                                                          }
                                                      },

                                                   ]
                                               },
                          //{
                          //    id: 'tab-basicsadasdasd',
                          //    label: 'Age',
                          //    elements: [
                          //        {
                          //            id: 'sdsd',
                          //            type: 'html',
                          //            html:
                          //                '<div style="width:100%;text-align:right;margin:-8px 0 10px">' +
                          //                    '<a class="cke_mathjax_doc" href="' + lang.docUrl + '" target="_black" style="cursor:pointer;color:#00B2CE;text-decoration:underline">' +
                          //                        lang.docLabel +
                          //                    '</a>' +
                          //                '</div>',

                          //        },
                          //    ]

                          //},
                          //  {
                          //      id: 'tab-advasdasdasd',
                          //      label: 'Agesd'
                          //      ,
                          //      elements: [
                          //          {
                          //              id: '2erwer',
                          //              type: 'html',
                          //              html:
                          //                  '<div style="width:100%;text-align:right;margin:-8px 0 10px">' +
                          //                      '<a class="cke_mathjax_doc" href="' + lang.docUrl + '" target="_black" style="cursor:pointer;color:#00B2CE;text-decoration:underline">' +
                          //                          lang.docLabel +
                          //                      '</a>' +
                          //                  '</div>',

                          //          },
                          //      ]
                          //  },
					{
						id: 'equation',
						type: 'textarea',
						label: "Tex байдлаар харагдах харагдац, http://www.hostmath.com/ энэ хаягаар тусламж бичвэр бичиж болно. ",

						onLoad: function() {
							var that = this;

							if ( !( CKEDITOR.env.ie && CKEDITOR.env.version == 8 ) ) {
								this.getInputElement().on( 'keyup', function() {
									// Add \( and \) for preview.
									preview.setValue( '\\(' + that.getInputElement().getValue() + '\\)' );
								} );
							}
						},

						setup: function( widget ) {
							// Remove \( and \).
							this.setValue( CKEDITOR.plugins.mathjax.trim( widget.data.math ) );
						},

						commit: function( widget ) {
							// Add \( and \) to make TeX be parsed by MathJax by default.
							widget.setData( 'math', '\\(' + this.getValue() + '\\)' );
						}
					},
                 
					{
						id: 'documentation',
						type: 'html',
						html:
							'<div style="width:100%;text-align:right;margin:-8px 0 10px">' +
								'<a class="cke_mathjax_doc" href="' + lang.docUrl + '" target="_black" style="cursor:pointer;color:#00B2CE;text-decoration:underline">' +
									'Tex заавар' +
								'</a>' +
							'</div>',
					
					},
                    
					( !( CKEDITOR.env.ie && CKEDITOR.env.version == 8 ) ) && {
						id: 'preview',
						type: 'html',
						html:
							'<div style="width:100%;text-align:center;">' +
								'<iframe style="border:0;width:0;height:0;font-size:20px" scrolling="no" frameborder="0" allowTransparency="true" src="' + CKEDITOR.plugins.mathjax.fixSrc + '"></iframe>' +
							'</div>',

						onLoad: function() {
							var iFrame = CKEDITOR.document.getById( this.domId ).getChild( 0 );
							preview = new CKEDITOR.plugins.mathjax.frameWrapper( iFrame, editor );
						},

						setup: function( widget ) {
							preview.setValue( widget.data.math );
						}
					}
				]
			}
		]
	};
} );
