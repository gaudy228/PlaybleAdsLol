var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointSpring' )
  var i691 = data
  i690.spring = i691[0]
  i690.damper = i691[1]
  i690.targetPosition = i691[2]
  return i690
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor' )
  var i693 = data
  i692.m_TargetVelocity = i693[0]
  i692.m_Force = i693[1]
  i692.m_FreeSpin = i693[2]
  return i692
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointLimits' )
  var i695 = data
  i694.m_Min = i695[0]
  i694.m_Max = i695[1]
  i694.m_Bounciness = i695[2]
  i694.m_BounceMinVelocity = i695[3]
  i694.m_ContactDistance = i695[4]
  i694.minBounce = i695[5]
  i694.maxBounce = i695[6]
  return i694
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointDrive' )
  var i697 = data
  i696.m_PositionSpring = i697[0]
  i696.m_PositionDamper = i697[1]
  i696.m_MaximumForce = i697[2]
  i696.m_UseAcceleration = i697[3]
  return i696
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i699 = data
  i698.m_Spring = i699[0]
  i698.m_Damper = i699[1]
  return i698
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i701 = data
  i700.m_Limit = i701[0]
  i700.m_Bounciness = i701[1]
  i700.m_ContactDistance = i701[2]
  return i700
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i703 = data
  i702.m_ExtremumSlip = i703[0]
  i702.m_ExtremumValue = i703[1]
  i702.m_AsymptoteSlip = i703[2]
  i702.m_AsymptoteValue = i703[3]
  i702.m_Stiffness = i703[4]
  return i702
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i705 = data
  i704.m_LowerAngle = i705[0]
  i704.m_UpperAngle = i705[1]
  return i704
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i707 = data
  i706.m_MotorSpeed = i707[0]
  i706.m_MaximumMotorTorque = i707[1]
  return i706
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i709 = data
  i708.m_DampingRatio = i709[0]
  i708.m_Frequency = i709[1]
  i708.m_Angle = i709[2]
  return i708
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i711 = data
  i710.m_LowerTranslation = i711[0]
  i710.m_UpperTranslation = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i713 = data
  i712.name = i713[0]
  i712.halfPrecision = !!i713[1]
  i712.useSimplification = !!i713[2]
  i712.useUInt32IndexFormat = !!i713[3]
  i712.vertexCount = i713[4]
  i712.aabb = i713[5]
  var i715 = i713[6]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( !!i715[i + 0] );
  }
  i712.streams = i714
  i712.vertices = i713[7]
  var i717 = i713[8]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i717[i + 0]) );
  }
  i712.subMeshes = i716
  var i719 = i713[9]
  var i718 = []
  for(var i = 0; i < i719.length; i += 16) {
    i718.push( new pc.Mat4().setData(i719[i + 0], i719[i + 1], i719[i + 2], i719[i + 3],  i719[i + 4], i719[i + 5], i719[i + 6], i719[i + 7],  i719[i + 8], i719[i + 9], i719[i + 10], i719[i + 11],  i719[i + 12], i719[i + 13], i719[i + 14], i719[i + 15]) );
  }
  i712.bindposes = i718
  var i721 = i713[10]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i721[i + 0]) );
  }
  i712.blendShapes = i720
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i727 = data
  i726.triangles = i727[0]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i733 = data
  i732.name = i733[0]
  var i735 = i733[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i735[i + 0]) );
  }
  i732.frames = i734
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i736 = root || new pc.UnityMaterial()
  var i737 = data
  i736.name = i737[0]
  request.r(i737[1], i737[2], 0, i736, 'shader')
  i736.renderQueue = i737[3]
  i736.enableInstancing = !!i737[4]
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i739[i + 0]) );
  }
  i736.floatParameters = i738
  var i741 = i737[6]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i741[i + 0]) );
  }
  i736.colorParameters = i740
  var i743 = i737[7]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i743[i + 0]) );
  }
  i736.vectorParameters = i742
  var i745 = i737[8]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i745[i + 0]) );
  }
  i736.textureParameters = i744
  var i747 = i737[9]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i747[i + 0]) );
  }
  i736.materialFlags = i746
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i751 = data
  i750.name = i751[0]
  i750.value = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i755 = data
  i754.name = i755[0]
  i754.value = new pc.Color(i755[1], i755[2], i755[3], i755[4])
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = new pc.Vec4( i759[1], i759[2], i759[3], i759[4] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i763 = data
  i762.name = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'value')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i767 = data
  i766.name = i767[0]
  i766.enabled = !!i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i769 = data
  i768.name = i769[0]
  i768.width = i769[1]
  i768.height = i769[2]
  i768.mipmapCount = i769[3]
  i768.anisoLevel = i769[4]
  i768.filterMode = i769[5]
  i768.hdr = !!i769[6]
  i768.format = i769[7]
  i768.wrapMode = i769[8]
  i768.alphaIsTransparency = !!i769[9]
  i768.alphaSource = i769[10]
  i768.graphicsFormat = i769[11]
  i768.sRGBTexture = !!i769[12]
  i768.desiredColorSpace = i769[13]
  i768.wrapU = i769[14]
  i768.wrapV = i769[15]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i771 = data
  i770.name = i771[0]
  i770.atlasId = i771[1]
  i770.mipmapCount = i771[2]
  i770.hdr = !!i771[3]
  i770.size = i771[4]
  i770.anisoLevel = i771[5]
  i770.filterMode = i771[6]
  var i773 = i771[7]
  var i772 = []
  for(var i = 0; i < i773.length; i += 4) {
    i772.push( UnityEngine.Rect.MinMaxRect(i773[i + 0], i773[i + 1], i773[i + 2], i773[i + 3]) );
  }
  i770.rects = i772
  i770.wrapU = i771[8]
  i770.wrapV = i771[9]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i777 = data
  i776.name = i777[0]
  i776.index = i777[1]
  i776.startup = !!i777[2]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i779 = data
  i778.aspect = i779[0]
  i778.orthographic = !!i779[1]
  i778.orthographicSize = i779[2]
  i778.backgroundColor = new pc.Color(i779[3], i779[4], i779[5], i779[6])
  i778.nearClipPlane = i779[7]
  i778.farClipPlane = i779[8]
  i778.fieldOfView = i779[9]
  i778.depth = i779[10]
  i778.clearFlags = i779[11]
  i778.cullingMask = i779[12]
  i778.rect = i779[13]
  request.r(i779[14], i779[15], 0, i778, 'targetTexture')
  i778.usePhysicalProperties = !!i779[16]
  i778.focalLength = i779[17]
  i778.sensorSize = new pc.Vec2( i779[18], i779[19] )
  i778.lensShift = new pc.Vec2( i779[20], i779[21] )
  i778.gateFit = i779[22]
  i778.commandBufferCount = i779[23]
  i778.cameraType = i779[24]
  i778.enabled = !!i779[25]
  return i778
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i781 = data
  i780.m_RenderShadows = !!i781[0]
  i780.m_RequiresDepthTextureOption = i781[1]
  i780.m_RequiresOpaqueTextureOption = i781[2]
  i780.m_CameraType = i781[3]
  var i783 = i781[4]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i780.m_Cameras = i782
  i780.m_RendererIndex = i781[5]
  i780.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i781[6] )
  request.r(i781[7], i781[8], 0, i780, 'm_VolumeTrigger')
  i780.m_VolumeFrameworkUpdateModeOption = i781[9]
  i780.m_RenderPostProcessing = !!i781[10]
  i780.m_Antialiasing = i781[11]
  i780.m_AntialiasingQuality = i781[12]
  i780.m_StopNaN = !!i781[13]
  i780.m_Dithering = !!i781[14]
  i780.m_ClearDepth = !!i781[15]
  i780.m_AllowXRRendering = !!i781[16]
  i780.m_AllowHDROutput = !!i781[17]
  i780.m_UseScreenCoordOverride = !!i781[18]
  i780.m_ScreenSizeOverride = new pc.Vec4( i781[19], i781[20], i781[21], i781[22] )
  i780.m_ScreenCoordScaleBias = new pc.Vec4( i781[23], i781[24], i781[25], i781[26] )
  i780.m_RequiresDepthTexture = !!i781[27]
  i780.m_RequiresColorTexture = !!i781[28]
  i780.m_Version = i781[29]
  i780.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i781[30], i780.m_TaaSettings)
  return i780
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i787 = data
  i786.m_Quality = i787[0]
  i786.m_FrameInfluence = i787[1]
  i786.m_JitterScale = i787[2]
  i786.m_MipBias = i787[3]
  i786.m_VarianceClampScale = i787[4]
  i786.m_ContrastAdaptiveSharpening = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i789 = data
  i788.name = i789[0]
  i788.tagId = i789[1]
  i788.enabled = !!i789[2]
  i788.isStatic = !!i789[3]
  i788.layer = i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i791 = data
  i790.type = i791[0]
  i790.color = new pc.Color(i791[1], i791[2], i791[3], i791[4])
  i790.cullingMask = i791[5]
  i790.intensity = i791[6]
  i790.range = i791[7]
  i790.spotAngle = i791[8]
  i790.shadows = i791[9]
  i790.shadowNormalBias = i791[10]
  i790.shadowBias = i791[11]
  i790.shadowStrength = i791[12]
  i790.shadowResolution = i791[13]
  i790.lightmapBakeType = i791[14]
  i790.renderMode = i791[15]
  request.r(i791[16], i791[17], 0, i790, 'cookie')
  i790.cookieSize = i791[18]
  i790.shadowNearPlane = i791[19]
  i790.occlusionMaskChannel = i791[20]
  i790.isBaked = !!i791[21]
  i790.mixedLightingMode = i791[22]
  i790.enabled = !!i791[23]
  return i790
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i793 = data
  i792.m_Version = i793[0]
  i792.m_UsePipelineSettings = !!i793[1]
  i792.m_AdditionalLightsShadowResolutionTier = i793[2]
  i792.m_LightLayerMask = i793[3]
  i792.m_RenderingLayers = i793[4]
  i792.m_CustomShadowLayers = !!i793[5]
  i792.m_ShadowLayerMask = i793[6]
  i792.m_ShadowRenderingLayers = i793[7]
  i792.m_LightCookieSize = new pc.Vec2( i793[8], i793[9] )
  i792.m_LightCookieOffset = new pc.Vec2( i793[10], i793[11] )
  i792.m_SoftShadowQuality = i793[12]
  return i792
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i795 = data
  i794.priority = i795[0]
  i794.blendDistance = i795[1]
  i794.weight = i795[2]
  request.r(i795[3], i795[4], 0, i794, 'sharedProfile')
  i794.m_IsGlobal = !!i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'sharedMesh')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'additionalVertexStreams')
  i798.enabled = !!i799[2]
  request.r(i799[3], i799[4], 0, i798, 'sharedMaterial')
  var i801 = i799[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sharedMaterials = i800
  i798.receiveShadows = !!i799[6]
  i798.shadowCastingMode = i799[7]
  i798.sortingLayerID = i799[8]
  i798.sortingOrder = i799[9]
  i798.lightmapIndex = i799[10]
  i798.lightmapSceneIndex = i799[11]
  i798.lightmapScaleOffset = new pc.Vec4( i799[12], i799[13], i799[14], i799[15] )
  i798.lightProbeUsage = i799[16]
  i798.reflectionProbeUsage = i799[17]
  return i798
}

Deserializers["Coin"] = function (request, data, root) {
  var i804 = root || request.c( 'Coin' )
  var i805 = data
  i804.rotateDuration = i805[0]
  i804.rotateMode = i805[1]
  i804.bobAmplitude = i805[2]
  i804.bobDuration = i805[3]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i807 = data
  i806.center = new pc.Vec3( i807[0], i807[1], i807[2] )
  i806.radius = i807[3]
  i806.enabled = !!i807[4]
  i806.isTrigger = !!i807[5]
  request.r(i807[6], i807[7], 0, i806, 'material')
  return i806
}

Deserializers["GameManager"] = function (request, data, root) {
  var i808 = root || request.c( 'GameManager' )
  var i809 = data
  i808.onGameWin = request.d('UnityEngine.Events.UnityEvent', i809[0], i808.onGameWin)
  i808.onCoinCountChanged = request.d('UnityEngine.Events.UnityEvent`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i809[1], i808.onCoinCountChanged)
  request.r(i809[2], i809[3], 0, i808, 'uiManager')
  return i808
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i811 = data
  i810.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i811[0], i810.m_PersistentCalls)
  return i810
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('UnityEngine.Events.PersistentCall', i815[i + 0]));
  }
  i812.m_Calls = i814
  return i812
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_Target')
  i818.m_TargetAssemblyTypeName = i819[2]
  i818.m_MethodName = i819[3]
  i818.m_Mode = i819[4]
  i818.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i819[5], i818.m_Arguments)
  i818.m_CallState = i819[6]
  return i818
}

Deserializers["UnityEngine.Events.UnityEvent`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i820 = root || new (UnityEngine.Events.UnityEvent$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i821 = data
  i820.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i821[0], i820.m_PersistentCalls)
  return i820
}

Deserializers["UIManager"] = function (request, data, root) {
  var i822 = root || request.c( 'UIManager' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'coinText')
  i822.counterFormat = i823[2]
  request.r(i823[3], i823[4], 0, i822, 'winPanel')
  request.r(i823[5], i823[6], 0, i822, 'victoryImage')
  request.r(i823[7], i823[8], 0, i822, 'ctaButton')
  i822.ctaUrl = i823[9]
  i822.winPanelStartScale = new pc.Vec3( i823[10], i823[11], i823[12] )
  i822.winPanelFadeDuration = i823[13]
  i822.winPanelScaleDuration = i823[14]
  i822.victoryImageDelay = i823[15]
  i822.victoryImageDuration = i823[16]
  i822.victoryImageStartRotation = i823[17]
  i822.victoryImagePunch = i823[18]
  i822.enableVictoryPulse = !!i823[19]
  i822.victoryPulseScale = i823[20]
  i822.victoryPulseDuration = i823[21]
  i822.victoryPulseDelay = i823[22]
  request.r(i823[23], i823[24], 0, i822, 'flyingCoinSprite')
  i822.flyingCoinSize = i823[25]
  i822.flyingCoinDuration = i823[26]
  i822.flyingCoinEndScale = i823[27]
  i822.flyingCoinArc = i823[28]
  i822.punchStrength = i823[29]
  i822.punchDuration = i823[30]
  i822.enableButtonPulse = !!i823[31]
  i822.pulseScale = i823[32]
  i822.pulseDuration = i823[33]
  i822.enableButtonSway = !!i823[34]
  i822.swayAngle = i823[35]
  i822.swayDuration = i823[36]
  request.r(i823[37], i823[38], 0, i822, 'worldCamera')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i825 = data
  i824.pivot = new pc.Vec2( i825[0], i825[1] )
  i824.anchorMin = new pc.Vec2( i825[2], i825[3] )
  i824.anchorMax = new pc.Vec2( i825[4], i825[5] )
  i824.sizeDelta = new pc.Vec2( i825[6], i825[7] )
  i824.anchoredPosition3D = new pc.Vec3( i825[8], i825[9], i825[10] )
  i824.rotation = new pc.Quat(i825[11], i825[12], i825[13], i825[14])
  i824.scale = new pc.Vec3( i825[15], i825[16], i825[17] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i827 = data
  i826.planeDistance = i827[0]
  i826.referencePixelsPerUnit = i827[1]
  i826.isFallbackOverlay = !!i827[2]
  i826.renderMode = i827[3]
  i826.renderOrder = i827[4]
  i826.sortingLayerName = i827[5]
  i826.sortingOrder = i827[6]
  i826.scaleFactor = i827[7]
  request.r(i827[8], i827[9], 0, i826, 'worldCamera')
  i826.overrideSorting = !!i827[10]
  i826.pixelPerfect = !!i827[11]
  i826.targetDisplay = i827[12]
  i826.overridePixelPerfect = !!i827[13]
  i826.enabled = !!i827[14]
  return i826
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i829 = data
  i828.m_UiScaleMode = i829[0]
  i828.m_ReferencePixelsPerUnit = i829[1]
  i828.m_ScaleFactor = i829[2]
  i828.m_ReferenceResolution = new pc.Vec2( i829[3], i829[4] )
  i828.m_ScreenMatchMode = i829[5]
  i828.m_MatchWidthOrHeight = i829[6]
  i828.m_PhysicalUnit = i829[7]
  i828.m_FallbackScreenDPI = i829[8]
  i828.m_DefaultSpriteDPI = i829[9]
  i828.m_DynamicPixelsPerUnit = i829[10]
  i828.m_PresetInfoIsWorld = !!i829[11]
  return i828
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i831 = data
  i830.m_IgnoreReversedGraphics = !!i831[0]
  i830.m_BlockingObjects = i831[1]
  i830.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i831[2] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i833 = data
  i832.cullTransparentMesh = !!i833[0]
  return i832
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i835 = data
  i834.m_hasFontAssetChanged = !!i835[0]
  request.r(i835[1], i835[2], 0, i834, 'm_baseMaterial')
  i834.m_maskOffset = new pc.Vec4( i835[3], i835[4], i835[5], i835[6] )
  i834.m_text = i835[7]
  i834.m_isRightToLeft = !!i835[8]
  request.r(i835[9], i835[10], 0, i834, 'm_fontAsset')
  request.r(i835[11], i835[12], 0, i834, 'm_sharedMaterial')
  var i837 = i835[13]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.m_fontSharedMaterials = i836
  request.r(i835[14], i835[15], 0, i834, 'm_fontMaterial')
  var i839 = i835[16]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i834.m_fontMaterials = i838
  i834.m_fontColor32 = UnityEngine.Color32.ConstructColor(i835[17], i835[18], i835[19], i835[20])
  i834.m_fontColor = new pc.Color(i835[21], i835[22], i835[23], i835[24])
  i834.m_enableVertexGradient = !!i835[25]
  i834.m_colorMode = i835[26]
  i834.m_fontColorGradient = request.d('TMPro.VertexGradient', i835[27], i834.m_fontColorGradient)
  request.r(i835[28], i835[29], 0, i834, 'm_fontColorGradientPreset')
  request.r(i835[30], i835[31], 0, i834, 'm_spriteAsset')
  i834.m_tintAllSprites = !!i835[32]
  request.r(i835[33], i835[34], 0, i834, 'm_StyleSheet')
  i834.m_TextStyleHashCode = i835[35]
  i834.m_overrideHtmlColors = !!i835[36]
  i834.m_faceColor = UnityEngine.Color32.ConstructColor(i835[37], i835[38], i835[39], i835[40])
  i834.m_fontSize = i835[41]
  i834.m_fontSizeBase = i835[42]
  i834.m_fontWeight = i835[43]
  i834.m_enableAutoSizing = !!i835[44]
  i834.m_fontSizeMin = i835[45]
  i834.m_fontSizeMax = i835[46]
  i834.m_fontStyle = i835[47]
  i834.m_HorizontalAlignment = i835[48]
  i834.m_VerticalAlignment = i835[49]
  i834.m_textAlignment = i835[50]
  i834.m_characterSpacing = i835[51]
  i834.m_characterHorizontalScale = i835[52]
  i834.m_wordSpacing = i835[53]
  i834.m_lineSpacing = i835[54]
  i834.m_lineSpacingMax = i835[55]
  i834.m_paragraphSpacing = i835[56]
  i834.m_charWidthMaxAdj = i835[57]
  i834.m_TextWrappingMode = i835[58]
  i834.m_wordWrappingRatios = i835[59]
  i834.m_overflowMode = i835[60]
  request.r(i835[61], i835[62], 0, i834, 'm_linkedTextComponent')
  request.r(i835[63], i835[64], 0, i834, 'parentLinkedComponent')
  i834.m_enableKerning = !!i835[65]
  var i841 = i835[66]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(i841[i + 0]);
  }
  i834.m_ActiveFontFeatures = i840
  i834.m_enableExtraPadding = !!i835[67]
  i834.checkPaddingRequired = !!i835[68]
  i834.m_isRichText = !!i835[69]
  i834.m_parseCtrlCharacters = !!i835[70]
  i834.m_isOrthographic = !!i835[71]
  i834.m_isCullingEnabled = !!i835[72]
  i834.m_horizontalMapping = i835[73]
  i834.m_verticalMapping = i835[74]
  i834.m_uvLineOffset = i835[75]
  i834.m_geometrySortingOrder = i835[76]
  i834.m_IsTextObjectScaleStatic = !!i835[77]
  i834.m_VertexBufferAutoSizeReduction = !!i835[78]
  i834.m_useMaxVisibleDescender = !!i835[79]
  i834.m_pageToDisplay = i835[80]
  i834.m_margin = new pc.Vec4( i835[81], i835[82], i835[83], i835[84] )
  i834.m_isUsingLegacyAnimationComponent = !!i835[85]
  i834.m_isVolumetricText = !!i835[86]
  request.r(i835[87], i835[88], 0, i834, 'm_Material')
  i834.m_EmojiFallbackSupport = !!i835[89]
  i834.m_Maskable = !!i835[90]
  i834.m_Color = new pc.Color(i835[91], i835[92], i835[93], i835[94])
  i834.m_RaycastTarget = !!i835[95]
  i834.m_RaycastPadding = new pc.Vec4( i835[96], i835[97], i835[98], i835[99] )
  return i834
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.VertexGradient' )
  var i843 = data
  i842.topLeft = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  i842.topRight = new pc.Color(i843[4], i843[5], i843[6], i843[7])
  i842.bottomLeft = new pc.Color(i843[8], i843[9], i843[10], i843[11])
  i842.bottomRight = new pc.Color(i843[12], i843[13], i843[14], i843[15])
  return i842
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Image' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_Sprite')
  i846.m_Type = i847[2]
  i846.m_PreserveAspect = !!i847[3]
  i846.m_FillCenter = !!i847[4]
  i846.m_FillMethod = i847[5]
  i846.m_FillAmount = i847[6]
  i846.m_FillClockwise = !!i847[7]
  i846.m_FillOrigin = i847[8]
  i846.m_UseSpriteMesh = !!i847[9]
  i846.m_PixelsPerUnitMultiplier = i847[10]
  request.r(i847[11], i847[12], 0, i846, 'm_Material')
  i846.m_Maskable = !!i847[13]
  i846.m_Color = new pc.Color(i847[14], i847[15], i847[16], i847[17])
  i846.m_RaycastTarget = !!i847[18]
  i846.m_RaycastPadding = new pc.Vec4( i847[19], i847[20], i847[21], i847[22] )
  return i846
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.Button' )
  var i849 = data
  i848.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i849[0], i848.m_OnClick)
  i848.m_Navigation = request.d('UnityEngine.UI.Navigation', i849[1], i848.m_Navigation)
  i848.m_Transition = i849[2]
  i848.m_Colors = request.d('UnityEngine.UI.ColorBlock', i849[3], i848.m_Colors)
  i848.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i849[4], i848.m_SpriteState)
  i848.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i849[5], i848.m_AnimationTriggers)
  i848.m_Interactable = !!i849[6]
  request.r(i849[7], i849[8], 0, i848, 'm_TargetGraphic')
  return i848
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i851 = data
  i850.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i851[0], i850.m_PersistentCalls)
  return i850
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i853 = data
  i852.m_Mode = i853[0]
  i852.m_WrapAround = !!i853[1]
  request.r(i853[2], i853[3], 0, i852, 'm_SelectOnUp')
  request.r(i853[4], i853[5], 0, i852, 'm_SelectOnDown')
  request.r(i853[6], i853[7], 0, i852, 'm_SelectOnLeft')
  request.r(i853[8], i853[9], 0, i852, 'm_SelectOnRight')
  return i852
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i855 = data
  i854.m_NormalColor = new pc.Color(i855[0], i855[1], i855[2], i855[3])
  i854.m_HighlightedColor = new pc.Color(i855[4], i855[5], i855[6], i855[7])
  i854.m_PressedColor = new pc.Color(i855[8], i855[9], i855[10], i855[11])
  i854.m_SelectedColor = new pc.Color(i855[12], i855[13], i855[14], i855[15])
  i854.m_DisabledColor = new pc.Color(i855[16], i855[17], i855[18], i855[19])
  i854.m_ColorMultiplier = i855[20]
  i854.m_FadeDuration = i855[21]
  return i854
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'm_HighlightedSprite')
  request.r(i857[2], i857[3], 0, i856, 'm_PressedSprite')
  request.r(i857[4], i857[5], 0, i856, 'm_SelectedSprite')
  request.r(i857[6], i857[7], 0, i856, 'm_DisabledSprite')
  return i856
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i859 = data
  i858.m_NormalTrigger = i859[0]
  i858.m_HighlightedTrigger = i859[1]
  i858.m_PressedTrigger = i859[2]
  i858.m_SelectedTrigger = i859[3]
  i858.m_DisabledTrigger = i859[4]
  return i858
}

Deserializers["VirtualJoystick"] = function (request, data, root) {
  var i860 = root || request.c( 'VirtualJoystick' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'background')
  request.r(i861[2], i861[3], 0, i860, 'handle')
  i860.handleRange = i861[4]
  return i860
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_FirstSelected')
  i862.m_sendNavigationEvents = !!i863[2]
  i862.m_DragThreshold = i863[3]
  return i862
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i865 = data
  i864.m_MoveRepeatDelay = i865[0]
  i864.m_MoveRepeatRate = i865[1]
  request.r(i865[2], i865[3], 0, i864, 'm_XRTrackingOrigin')
  request.r(i865[4], i865[5], 0, i864, 'm_ActionsAsset')
  request.r(i865[6], i865[7], 0, i864, 'm_PointAction')
  request.r(i865[8], i865[9], 0, i864, 'm_MoveAction')
  request.r(i865[10], i865[11], 0, i864, 'm_SubmitAction')
  request.r(i865[12], i865[13], 0, i864, 'm_CancelAction')
  request.r(i865[14], i865[15], 0, i864, 'm_LeftClickAction')
  request.r(i865[16], i865[17], 0, i864, 'm_MiddleClickAction')
  request.r(i865[18], i865[19], 0, i864, 'm_RightClickAction')
  request.r(i865[20], i865[21], 0, i864, 'm_ScrollWheelAction')
  request.r(i865[22], i865[23], 0, i864, 'm_TrackedDevicePositionAction')
  request.r(i865[24], i865[25], 0, i864, 'm_TrackedDeviceOrientationAction')
  i864.m_DeselectOnBackgroundClick = !!i865[26]
  i864.m_PointerBehavior = i865[27]
  i864.m_CursorLockBehavior = i865[28]
  i864.m_ScrollDeltaPerTick = i865[29]
  i864.m_SendPointerHoverToParent = !!i865[30]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i867 = data
  i866.center = new pc.Vec3( i867[0], i867[1], i867[2] )
  i866.size = new pc.Vec3( i867[3], i867[4], i867[5] )
  i866.enabled = !!i867[6]
  i866.isTrigger = !!i867[7]
  request.r(i867[8], i867[9], 0, i866, 'material')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i869 = data
  i868.mass = i869[0]
  i868.drag = i869[1]
  i868.angularDrag = i869[2]
  i868.useGravity = !!i869[3]
  i868.isKinematic = !!i869[4]
  i868.constraints = i869[5]
  i868.maxAngularVelocity = i869[6]
  i868.collisionDetectionMode = i869[7]
  i868.interpolation = i869[8]
  return i868
}

Deserializers["PlayerMovement"] = function (request, data, root) {
  var i870 = root || request.c( 'PlayerMovement' )
  var i871 = data
  i870.moveSpeed = i871[0]
  i870.boundary = i871[1]
  i870.rotationSpeed = i871[2]
  i870.inputDeadZone = i871[3]
  request.r(i871[4], i871[5], 0, i870, 'joystick')
  request.r(i871[6], i871[7], 0, i870, 'animator')
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'animatorController')
  request.r(i873[2], i873[3], 0, i872, 'avatar')
  i872.updateMode = i873[4]
  i872.hasTransformHierarchy = !!i873[5]
  i872.applyRootMotion = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.humanBones = i874
  i872.enabled = !!i873[8]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'sharedMesh')
  var i881 = i879[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.bones = i880
  i878.updateWhenOffscreen = !!i879[3]
  i878.localBounds = i879[4]
  request.r(i879[5], i879[6], 0, i878, 'rootBone')
  var i883 = i879[7]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i883[i + 0]) );
  }
  i878.blendShapesWeights = i882
  i878.enabled = !!i879[8]
  request.r(i879[9], i879[10], 0, i878, 'sharedMaterial')
  var i885 = i879[11]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i878.sharedMaterials = i884
  i878.receiveShadows = !!i879[12]
  i878.shadowCastingMode = i879[13]
  i878.sortingLayerID = i879[14]
  i878.sortingOrder = i879[15]
  i878.lightmapIndex = i879[16]
  i878.lightmapSceneIndex = i879[17]
  i878.lightmapScaleOffset = new pc.Vec4( i879[18], i879[19], i879[20], i879[21] )
  i878.lightProbeUsage = i879[22]
  i878.reflectionProbeUsage = i879[23]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i889 = data
  i888.weight = i889[0]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i891 = data
  i890.ambientIntensity = i891[0]
  i890.reflectionIntensity = i891[1]
  i890.ambientMode = i891[2]
  i890.ambientLight = new pc.Color(i891[3], i891[4], i891[5], i891[6])
  i890.ambientSkyColor = new pc.Color(i891[7], i891[8], i891[9], i891[10])
  i890.ambientGroundColor = new pc.Color(i891[11], i891[12], i891[13], i891[14])
  i890.ambientEquatorColor = new pc.Color(i891[15], i891[16], i891[17], i891[18])
  i890.fogColor = new pc.Color(i891[19], i891[20], i891[21], i891[22])
  i890.fogEndDistance = i891[23]
  i890.fogStartDistance = i891[24]
  i890.fogDensity = i891[25]
  i890.fog = !!i891[26]
  request.r(i891[27], i891[28], 0, i890, 'skybox')
  i890.fogMode = i891[29]
  var i893 = i891[30]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i893[i + 0]) );
  }
  i890.lightmaps = i892
  i890.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i891[31], i890.lightProbes)
  i890.lightmapsMode = i891[32]
  i890.mixedBakeMode = i891[33]
  i890.environmentLightingMode = i891[34]
  i890.ambientProbe = new pc.SphericalHarmonicsL2(i891[35])
  request.r(i891[36], i891[37], 0, i890, 'customReflection')
  request.r(i891[38], i891[39], 0, i890, 'defaultReflection')
  i890.defaultReflectionMode = i891[40]
  i890.defaultReflectionResolution = i891[41]
  i890.sunLightObjectId = i891[42]
  i890.pixelLightCount = i891[43]
  i890.defaultReflectionHDR = !!i891[44]
  i890.hasLightDataAsset = !!i891[45]
  i890.hasManualGenerate = !!i891[46]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'lightmapColor')
  request.r(i897[2], i897[3], 0, i896, 'lightmapDirection')
  request.r(i897[4], i897[5], 0, i896, 'shadowMask')
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i898 = root || new UnityEngine.LightProbes()
  var i899 = data
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i907 = data
  i906.AdditionalLightsRenderingMode = i907[0]
  i906.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i907[1], i906.LightRenderingMode)
  i906.MainLightRenderingModeValue = i907[2]
  i906.SupportsMainLightShadows = !!i907[3]
  i906.MixedLightingSupported = !!i907[4]
  i906.MainLightShadowmapResolutionValue = i907[5]
  i906.SupportsSoftShadows = !!i907[6]
  i906.SoftShadowQualityValue = i907[7]
  i906.ShadowDistance = i907[8]
  i906.ShadowCascadeCount = i907[9]
  i906.Cascade2Split = i907[10]
  i906.Cascade3Split = new pc.Vec2( i907[11], i907[12] )
  i906.Cascade4Split = new pc.Vec3( i907[13], i907[14], i907[15] )
  i906.CascadeBorder = i907[16]
  i906.ShadowDepthBias = i907[17]
  i906.ShadowNormalBias = i907[18]
  i906.RequireDepthTexture = !!i907[19]
  i906.RequireOpaqueTexture = !!i907[20]
  i906.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i907[21], i906.scriptableRendererData)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i909 = data
  i908.Disabled = i909[0]
  i908.PerVertex = i909[1]
  i908.PerPixel = i909[2]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i911 = data
  i910.opaqueLayerMask = i911[0]
  i910.transparentLayerMask = i911[1]
  var i913 = i911[2]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i913[i + 0]) );
  }
  i910.RenderObjectsFeatures = i912
  i910.name = i911[3]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i917 = data
  i916.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i917[0], i916.settings)
  i916.name = i917[1]
  i916.typeName = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i919 = data
  var i921 = i919[0]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i921[i + 0]));
  }
  i918.ShaderCompilationErrors = i920
  i918.name = i919[1]
  i918.guid = i919[2]
  var i923 = i919[3]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i918.shaderDefinedKeywords = i922
  var i925 = i919[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i925[i + 0]) );
  }
  i918.passes = i924
  var i927 = i919[5]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i927[i + 0]) );
  }
  i918.usePasses = i926
  var i929 = i919[6]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i929[i + 0]) );
  }
  i918.defaultParameterValues = i928
  request.r(i919[7], i919[8], 0, i918, 'unityFallbackShader')
  i918.readDepth = !!i919[9]
  i918.hasDepthOnlyPass = !!i919[10]
  i918.isCreatedByShaderGraph = !!i919[11]
  i918.disableBatching = !!i919[12]
  i918.compiled = !!i919[13]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i933 = data
  i932.shaderName = i933[0]
  i932.errorMessage = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i938 = root || new pc.UnityShaderPass()
  var i939 = data
  i938.id = i939[0]
  i938.subShaderIndex = i939[1]
  i938.name = i939[2]
  i938.passType = i939[3]
  i938.grabPassTextureName = i939[4]
  i938.usePass = !!i939[5]
  i938.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[6], i938.zTest)
  i938.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[7], i938.zWrite)
  i938.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[8], i938.culling)
  i938.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i939[9], i938.blending)
  i938.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i939[10], i938.alphaBlending)
  i938.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[11], i938.colorWriteMask)
  i938.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[12], i938.offsetUnits)
  i938.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[13], i938.offsetFactor)
  i938.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[14], i938.stencilRef)
  i938.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[15], i938.stencilReadMask)
  i938.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[16], i938.stencilWriteMask)
  i938.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i939[17], i938.stencilOp)
  i938.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i939[18], i938.stencilOpFront)
  i938.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i939[19], i938.stencilOpBack)
  var i941 = i939[20]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i941[i + 0]) );
  }
  i938.tags = i940
  var i943 = i939[21]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( i943[i + 0] );
  }
  i938.passDefinedKeywords = i942
  var i945 = i939[22]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i945[i + 0]) );
  }
  i938.passDefinedKeywordGroups = i944
  var i947 = i939[23]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i947[i + 0]) );
  }
  i938.variants = i946
  var i949 = i939[24]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i949[i + 0]) );
  }
  i938.excludedVariants = i948
  i938.hasDepthReader = !!i939[25]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i951 = data
  i950.val = i951[0]
  i950.name = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i953 = data
  i952.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[0], i952.src)
  i952.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[1], i952.dst)
  i952.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[2], i952.op)
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i955 = data
  i954.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[0], i954.pass)
  i954.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[1], i954.fail)
  i954.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[2], i954.zFail)
  i954.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[3], i954.comp)
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i959 = data
  i958.name = i959[0]
  i958.value = i959[1]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i963 = data
  var i965 = i963[0]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i962.keywords = i964
  i962.hasDiscard = !!i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i969 = data
  i968.passId = i969[0]
  i968.subShaderIndex = i969[1]
  var i971 = i969[2]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i968.keywords = i970
  i968.vertexProgram = i969[3]
  i968.fragmentProgram = i969[4]
  i968.exportedForWebGl2 = !!i969[5]
  i968.readDepth = !!i969[6]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'shader')
  i974.pass = i975[2]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i979 = data
  i978.name = i979[0]
  i978.type = i979[1]
  i978.value = new pc.Vec4( i979[2], i979[3], i979[4], i979[5] )
  i978.textureValue = i979[6]
  i978.shaderPropertyFlag = i979[7]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i981 = data
  i980.name = i981[0]
  request.r(i981[1], i981[2], 0, i980, 'texture')
  i980.aabb = i981[3]
  i980.vertices = i981[4]
  i980.triangles = i981[5]
  i980.textureRect = UnityEngine.Rect.MinMaxRect(i981[6], i981[7], i981[8], i981[9])
  i980.packedRect = UnityEngine.Rect.MinMaxRect(i981[10], i981[11], i981[12], i981[13])
  i980.border = new pc.Vec4( i981[14], i981[15], i981[16], i981[17] )
  i980.transparency = i981[18]
  i980.bounds = i981[19]
  i980.pixelsPerUnit = i981[20]
  i980.textureWidth = i981[21]
  i980.textureHeight = i981[22]
  i980.nativeSize = new pc.Vec2( i981[23], i981[24] )
  i980.pivot = new pc.Vec2( i981[25], i981[26] )
  i980.textureRectOffset = new pc.Vec2( i981[27], i981[28] )
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i983 = data
  i982.name = i983[0]
  i982.wrapMode = i983[1]
  i982.isLooping = !!i983[2]
  i982.length = i983[3]
  var i985 = i983[4]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i985[i + 0]) );
  }
  i982.curves = i984
  var i987 = i983[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i987[i + 0]) );
  }
  i982.events = i986
  i982.halfPrecision = !!i983[6]
  i982._frameRate = i983[7]
  i982.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i983[8], i982.localBounds)
  i982.hasMuscleCurves = !!i983[9]
  var i989 = i983[10]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i982.clipMuscleConstant = i988
  i982.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i983[11], i982.clipBindingConstant)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i993 = data
  i992.path = i993[0]
  i992.hash = i993[1]
  i992.componentType = i993[2]
  i992.property = i993[3]
  i992.keys = i993[4]
  var i995 = i993[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i995[i + 0]) );
  }
  i992.objectReferenceKeys = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i999 = data
  i998.time = i999[0]
  request.r(i999[1], i999[2], 0, i998, 'value')
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1003 = data
  i1002.functionName = i1003[0]
  i1002.floatParameter = i1003[1]
  i1002.intParameter = i1003[2]
  i1002.stringParameter = i1003[3]
  request.r(i1003[4], i1003[5], 0, i1002, 'objectReferenceParameter')
  i1002.time = i1003[6]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1005 = data
  i1004.center = new pc.Vec3( i1005[0], i1005[1], i1005[2] )
  i1004.extends = new pc.Vec3( i1005[3], i1005[4], i1005[5] )
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1008.genericBindings = i1010
  var i1013 = i1009[1]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1008.pptrCurveMapping = i1012
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.ascent = i1015[1]
  i1014.originalLineHeight = i1015[2]
  i1014.fontSize = i1015[3]
  var i1017 = i1015[4]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1017[i + 0]) );
  }
  i1014.characterInfo = i1016
  request.r(i1015[5], i1015[6], 0, i1014, 'texture')
  i1014.originalFontSize = i1015[7]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1021 = data
  i1020.index = i1021[0]
  i1020.advance = i1021[1]
  i1020.bearing = i1021[2]
  i1020.glyphWidth = i1021[3]
  i1020.glyphHeight = i1021[4]
  i1020.minX = i1021[5]
  i1020.maxX = i1021[6]
  i1020.minY = i1021[7]
  i1020.maxY = i1021[8]
  i1020.uvBottomLeftX = i1021[9]
  i1020.uvBottomLeftY = i1021[10]
  i1020.uvBottomRightX = i1021[11]
  i1020.uvBottomRightY = i1021[12]
  i1020.uvTopLeftX = i1021[13]
  i1020.uvTopLeftY = i1021[14]
  i1020.uvTopRightX = i1021[15]
  i1020.uvTopRightY = i1021[16]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1023 = data
  i1022.name = i1023[0]
  var i1025 = i1023[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1025[i + 0]) );
  }
  i1022.layers = i1024
  var i1027 = i1023[2]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1027[i + 0]) );
  }
  i1022.parameters = i1026
  i1022.animationClips = i1023[3]
  i1022.avatarUnsupported = i1023[4]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.defaultWeight = i1031[1]
  i1030.blendingMode = i1031[2]
  i1030.avatarMask = i1031[3]
  i1030.syncedLayerIndex = i1031[4]
  i1030.syncedLayerAffectsTiming = !!i1031[5]
  i1030.syncedLayers = i1031[6]
  i1030.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1031[7], i1030.stateMachine)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1033 = data
  i1032.id = i1033[0]
  i1032.name = i1033[1]
  i1032.path = i1033[2]
  var i1035 = i1033[3]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1035[i + 0]) );
  }
  i1032.states = i1034
  var i1037 = i1033[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1037[i + 0]) );
  }
  i1032.machines = i1036
  var i1039 = i1033[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1039[i + 0]) );
  }
  i1032.entryStateTransitions = i1038
  var i1041 = i1033[6]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1041[i + 0]) );
  }
  i1032.exitStateTransitions = i1040
  var i1043 = i1033[7]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1043[i + 0]) );
  }
  i1032.anyStateTransitions = i1042
  i1032.defaultStateId = i1033[8]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  i1046.cycleOffset = i1047[2]
  i1046.cycleOffsetParameter = i1047[3]
  i1046.cycleOffsetParameterActive = !!i1047[4]
  i1046.mirror = !!i1047[5]
  i1046.mirrorParameter = i1047[6]
  i1046.mirrorParameterActive = !!i1047[7]
  i1046.motionId = i1047[8]
  i1046.nameHash = i1047[9]
  i1046.fullPathHash = i1047[10]
  i1046.speed = i1047[11]
  i1046.speedParameter = i1047[12]
  i1046.speedParameterActive = !!i1047[13]
  i1046.tag = i1047[14]
  i1046.tagHash = i1047[15]
  i1046.writeDefaultValues = !!i1047[16]
  var i1049 = i1047[17]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 2, i1048, '')
  }
  i1046.behaviours = i1048
  var i1051 = i1047[18]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1051[i + 0]) );
  }
  i1046.transitions = i1050
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1057 = data
  i1056.fullPath = i1057[0]
  i1056.canTransitionToSelf = !!i1057[1]
  i1056.duration = i1057[2]
  i1056.exitTime = i1057[3]
  i1056.hasExitTime = !!i1057[4]
  i1056.hasFixedDuration = !!i1057[5]
  i1056.interruptionSource = i1057[6]
  i1056.offset = i1057[7]
  i1056.orderedInterruption = !!i1057[8]
  i1056.destinationStateId = i1057[9]
  i1056.isExit = !!i1057[10]
  i1056.mute = !!i1057[11]
  i1056.solo = !!i1057[12]
  var i1059 = i1057[13]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1059[i + 0]) );
  }
  i1056.conditions = i1058
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1063 = data
  i1062.mode = i1063[0]
  i1062.parameter = i1063[1]
  i1062.threshold = i1063[2]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1069 = data
  i1068.destinationStateId = i1069[0]
  i1068.isExit = !!i1069[1]
  i1068.mute = !!i1069[2]
  i1068.solo = !!i1069[3]
  var i1071 = i1069[4]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1071[i + 0]) );
  }
  i1068.conditions = i1070
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1075 = data
  i1074.defaultBool = !!i1075[0]
  i1074.defaultFloat = i1075[1]
  i1074.defaultInt = i1075[2]
  i1074.name = i1075[3]
  i1074.nameHash = i1075[4]
  i1074.type = i1075[5]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.bytes64 = i1077[1]
  i1076.data = i1077[2]
  return i1076
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1078.components = i1080
  return i1078
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1085 = data
  i1084.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1085[0], i1084.mode)
  i1084.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1085[1], i1084.neutralHDRRangeReductionMode)
  i1084.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1085[2], i1084.acesPreset)
  i1084.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[3], i1084.hueShiftAmount)
  i1084.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1085[4], i1084.detectPaperWhite)
  i1084.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[5], i1084.paperWhite)
  i1084.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1085[6], i1084.detectBrightnessLimits)
  i1084.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[7], i1084.minNits)
  i1084.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[8], i1084.maxNits)
  i1084.active = !!i1085[9]
  return i1084
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1087 = data
  i1086.m_Value = i1087[0]
  i1086.m_OverrideState = !!i1087[1]
  return i1086
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1089 = data
  i1088.m_Value = i1089[0]
  i1088.m_OverrideState = !!i1089[1]
  return i1088
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1091 = data
  i1090.m_Value = i1091[0]
  i1090.m_OverrideState = !!i1091[1]
  return i1090
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1093 = data
  i1092.m_Value = i1093[0]
  i1092.m_OverrideState = !!i1093[1]
  return i1092
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1095 = data
  i1094.m_Value = !!i1095[0]
  i1094.m_OverrideState = !!i1095[1]
  return i1094
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1097 = data
  i1096.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1097[0], i1096.skipIterations)
  i1096.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[1], i1096.threshold)
  i1096.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[2], i1096.intensity)
  i1096.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1097[3], i1096.scatter)
  i1096.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[4], i1096.clamp)
  i1096.tint = request.d('UnityEngine.Rendering.ColorParameter', i1097[5], i1096.tint)
  i1096.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1097[6], i1096.highQualityFiltering)
  i1096.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1097[7], i1096.downscale)
  i1096.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1097[8], i1096.maxIterations)
  i1096.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1097[9], i1096.dirtTexture)
  i1096.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[10], i1096.dirtIntensity)
  i1096.active = !!i1097[11]
  return i1096
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1099 = data
  i1098.m_Value = i1099[0]
  i1098.m_OverrideState = !!i1099[1]
  return i1098
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1101 = data
  i1100.m_Value = i1101[0]
  i1100.m_OverrideState = !!i1101[1]
  return i1100
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1103 = data
  i1102.m_Value = new pc.Color(i1103[0], i1103[1], i1103[2], i1103[3])
  i1102.m_OverrideState = !!i1103[4]
  return i1102
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1105 = data
  i1104.m_Value = i1105[0]
  i1104.m_OverrideState = !!i1105[1]
  return i1104
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1107 = data
  i1106.dimension = i1107[0]
  request.r(i1107[1], i1107[2], 0, i1106, 'm_Value')
  i1106.m_OverrideState = !!i1107[3]
  return i1106
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i1109 = data
  i1108.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i1109[0], i1108.mode)
  i1108.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i1109[1], i1108.quality)
  i1108.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1109[2], i1108.intensity)
  i1108.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1109[3], i1108.clamp)
  i1108.active = !!i1109[4]
  return i1108
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i1111 = data
  i1110.m_Value = i1111[0]
  i1110.m_OverrideState = !!i1111[1]
  return i1110
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i1113 = data
  i1112.m_Value = i1113[0]
  i1112.m_OverrideState = !!i1113[1]
  return i1112
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1115 = data
  i1114.color = request.d('UnityEngine.Rendering.ColorParameter', i1115[0], i1114.color)
  i1114.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1115[1], i1114.center)
  i1114.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1115[2], i1114.intensity)
  i1114.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1115[3], i1114.smoothness)
  i1114.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1115[4], i1114.rounded)
  i1114.active = !!i1115[5]
  return i1114
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1117 = data
  i1116.m_Value = new pc.Vec2( i1117[0], i1117[1] )
  i1116.m_OverrideState = !!i1117[2]
  return i1116
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1119 = data
  i1118.normalStyle = i1119[0]
  i1118.normalSpacingOffset = i1119[1]
  i1118.boldStyle = i1119[2]
  i1118.boldSpacing = i1119[3]
  i1118.italicStyle = i1119[4]
  i1118.tabSize = i1119[5]
  request.r(i1119[6], i1119[7], 0, i1118, 'atlas')
  i1118.m_SourceFontFileGUID = i1119[8]
  i1118.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1119[9], i1118.m_CreationSettings)
  request.r(i1119[10], i1119[11], 0, i1118, 'm_SourceFontFile')
  i1118.m_SourceFontFilePath = i1119[12]
  i1118.m_AtlasPopulationMode = i1119[13]
  i1118.InternalDynamicOS = !!i1119[14]
  var i1121 = i1119[15]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('UnityEngine.TextCore.Glyph', i1121[i + 0]));
  }
  i1118.m_GlyphTable = i1120
  var i1123 = i1119[16]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.TMP_Character', i1123[i + 0]));
  }
  i1118.m_CharacterTable = i1122
  var i1125 = i1119[17]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1118.m_AtlasTextures = i1124
  i1118.m_AtlasTextureIndex = i1119[18]
  i1118.m_IsMultiAtlasTexturesEnabled = !!i1119[19]
  i1118.m_GetFontFeatures = !!i1119[20]
  i1118.m_ClearDynamicDataOnBuild = !!i1119[21]
  i1118.m_AtlasWidth = i1119[22]
  i1118.m_AtlasHeight = i1119[23]
  i1118.m_AtlasPadding = i1119[24]
  i1118.m_AtlasRenderMode = i1119[25]
  var i1127 = i1119[26]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('UnityEngine.TextCore.GlyphRect', i1127[i + 0]));
  }
  i1118.m_UsedGlyphRects = i1126
  var i1129 = i1119[27]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('UnityEngine.TextCore.GlyphRect', i1129[i + 0]));
  }
  i1118.m_FreeGlyphRects = i1128
  i1118.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1119[28], i1118.m_FontFeatureTable)
  i1118.m_ShouldReimportFontFeatures = !!i1119[29]
  var i1131 = i1119[30]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 1, i1130, '')
  }
  i1118.m_FallbackFontAssetTable = i1130
  var i1133 = i1119[31]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('TMPro.TMP_FontWeightPair', i1133[i + 0]) );
  }
  i1118.m_FontWeightTable = i1132
  var i1135 = i1119[32]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('TMPro.TMP_FontWeightPair', i1135[i + 0]) );
  }
  i1118.fontWeights = i1134
  i1118.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1119[33], i1118.m_fontInfo)
  var i1137 = i1119[34]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('TMPro.TMP_Glyph', i1137[i + 0]));
  }
  i1118.m_glyphInfoList = i1136
  i1118.m_KerningTable = request.d('TMPro.KerningTable', i1119[35], i1118.m_KerningTable)
  var i1139 = i1119[36]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 1, i1138, '')
  }
  i1118.fallbackFontAssets = i1138
  i1118.m_Version = i1119[37]
  i1118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1119[38], i1118.m_FaceInfo)
  request.r(i1119[39], i1119[40], 0, i1118, 'm_Material')
  return i1118
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1141 = data
  i1140.sourceFontFileName = i1141[0]
  i1140.sourceFontFileGUID = i1141[1]
  i1140.faceIndex = i1141[2]
  i1140.pointSizeSamplingMode = i1141[3]
  i1140.pointSize = i1141[4]
  i1140.padding = i1141[5]
  i1140.paddingMode = i1141[6]
  i1140.packingMode = i1141[7]
  i1140.atlasWidth = i1141[8]
  i1140.atlasHeight = i1141[9]
  i1140.characterSetSelectionMode = i1141[10]
  i1140.characterSequence = i1141[11]
  i1140.referencedFontAssetGUID = i1141[12]
  i1140.referencedTextAssetGUID = i1141[13]
  i1140.fontStyle = i1141[14]
  i1140.fontStyleModifier = i1141[15]
  i1140.renderMode = i1141[16]
  i1140.includeFontFeatures = !!i1141[17]
  return i1140
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1145 = data
  i1144.m_Index = i1145[0]
  i1144.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1145[1], i1144.m_Metrics)
  i1144.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1145[2], i1144.m_GlyphRect)
  i1144.m_Scale = i1145[3]
  i1144.m_AtlasIndex = i1145[4]
  i1144.m_ClassDefinitionType = i1145[5]
  return i1144
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1147 = data
  i1146.m_Width = i1147[0]
  i1146.m_Height = i1147[1]
  i1146.m_HorizontalBearingX = i1147[2]
  i1146.m_HorizontalBearingY = i1147[3]
  i1146.m_HorizontalAdvance = i1147[4]
  return i1146
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1149 = data
  i1148.m_X = i1149[0]
  i1148.m_Y = i1149[1]
  i1148.m_Width = i1149[2]
  i1148.m_Height = i1149[3]
  return i1148
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Character' )
  var i1153 = data
  i1152.m_ElementType = i1153[0]
  i1152.m_Unicode = i1153[1]
  i1152.m_GlyphIndex = i1153[2]
  i1152.m_Scale = i1153[3]
  return i1152
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.MultipleSubstitutionRecord', i1161[i + 0]));
  }
  i1158.m_MultipleSubstitutionRecords = i1160
  var i1163 = i1159[1]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('TMPro.LigatureSubstitutionRecord', i1163[i + 0]));
  }
  i1158.m_LigatureSubstitutionRecords = i1162
  var i1165 = i1159[2]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1165[i + 0]));
  }
  i1158.m_GlyphPairAdjustmentRecords = i1164
  var i1167 = i1159[3]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1167[i + 0]));
  }
  i1158.m_MarkToBaseAdjustmentRecords = i1166
  var i1169 = i1159[4]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1169[i + 0]));
  }
  i1158.m_MarkToMarkAdjustmentRecords = i1168
  return i1158
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1173 = data
  i1172.m_TargetGlyphID = i1173[0]
  i1172.m_SubstituteGlyphIDs = i1173[1]
  return i1172
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1177 = data
  i1176.m_ComponentGlyphIDs = i1177[0]
  i1176.m_LigatureGlyphID = i1177[1]
  return i1176
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1181 = data
  i1180.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1181[0], i1180.m_FirstAdjustmentRecord)
  i1180.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1181[1], i1180.m_SecondAdjustmentRecord)
  i1180.m_FeatureLookupFlags = i1181[2]
  return i1180
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1183 = data
  i1182.m_GlyphIndex = i1183[0]
  i1182.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1183[1], i1182.m_GlyphValueRecord)
  return i1182
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1185 = data
  i1184.m_XPlacement = i1185[0]
  i1184.m_YPlacement = i1185[1]
  i1184.m_XAdvance = i1185[2]
  i1184.m_YAdvance = i1185[3]
  return i1184
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1189 = data
  i1188.m_BaseGlyphID = i1189[0]
  i1188.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1189[1], i1188.m_BaseGlyphAnchorPoint)
  i1188.m_MarkGlyphID = i1189[2]
  i1188.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1189[3], i1188.m_MarkPositionAdjustment)
  return i1188
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1193 = data
  i1192.m_BaseMarkGlyphID = i1193[0]
  i1192.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1193[1], i1192.m_BaseMarkGlyphAnchorPoint)
  i1192.m_CombiningMarkGlyphID = i1193[2]
  i1192.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1193[3], i1192.m_CombiningMarkPositionAdjustment)
  return i1192
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'regularTypeface')
  request.r(i1199[2], i1199[3], 0, i1198, 'italicTypeface')
  return i1198
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1201 = data
  i1200.Name = i1201[0]
  i1200.PointSize = i1201[1]
  i1200.Scale = i1201[2]
  i1200.CharacterCount = i1201[3]
  i1200.LineHeight = i1201[4]
  i1200.Baseline = i1201[5]
  i1200.Ascender = i1201[6]
  i1200.CapHeight = i1201[7]
  i1200.Descender = i1201[8]
  i1200.CenterLine = i1201[9]
  i1200.SuperscriptOffset = i1201[10]
  i1200.SubscriptOffset = i1201[11]
  i1200.SubSize = i1201[12]
  i1200.Underline = i1201[13]
  i1200.UnderlineThickness = i1201[14]
  i1200.strikethrough = i1201[15]
  i1200.strikethroughThickness = i1201[16]
  i1200.TabWidth = i1201[17]
  i1200.Padding = i1201[18]
  i1200.AtlasWidth = i1201[19]
  i1200.AtlasHeight = i1201[20]
  return i1200
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.x = i1205[1]
  i1204.y = i1205[2]
  i1204.width = i1205[3]
  i1204.height = i1205[4]
  i1204.xOffset = i1205[5]
  i1204.yOffset = i1205[6]
  i1204.xAdvance = i1205[7]
  i1204.scale = i1205[8]
  return i1204
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.KerningTable' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.KerningPair', i1209[i + 0]));
  }
  i1206.kerningPairs = i1208
  return i1206
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.KerningPair' )
  var i1213 = data
  i1212.xOffset = i1213[0]
  i1212.m_FirstGlyph = i1213[1]
  i1212.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1213[2], i1212.m_FirstGlyphAdjustments)
  i1212.m_SecondGlyph = i1213[3]
  i1212.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1213[4], i1212.m_SecondGlyphAdjustments)
  i1212.m_IgnoreSpacingAdjustments = !!i1213[5]
  return i1212
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1215 = data
  i1214.m_FaceIndex = i1215[0]
  i1214.m_FamilyName = i1215[1]
  i1214.m_StyleName = i1215[2]
  i1214.m_PointSize = i1215[3]
  i1214.m_Scale = i1215[4]
  i1214.m_UnitsPerEM = i1215[5]
  i1214.m_LineHeight = i1215[6]
  i1214.m_AscentLine = i1215[7]
  i1214.m_CapLine = i1215[8]
  i1214.m_MeanLine = i1215[9]
  i1214.m_Baseline = i1215[10]
  i1214.m_DescentLine = i1215[11]
  i1214.m_SuperscriptOffset = i1215[12]
  i1214.m_SuperscriptSize = i1215[13]
  i1214.m_SubscriptOffset = i1215[14]
  i1214.m_SubscriptSize = i1215[15]
  i1214.m_UnderlineOffset = i1215[16]
  i1214.m_UnderlineThickness = i1215[17]
  i1214.m_StrikethroughOffset = i1215[18]
  i1214.m_StrikethroughThickness = i1215[19]
  i1214.m_TabWidth = i1215[20]
  return i1214
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1217 = data
  var i1219 = i1217[0]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('UnityEngine.InputSystem.InputActionMap', i1219[i + 0]) );
  }
  i1216.m_ActionMaps = i1218
  var i1221 = i1217[1]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1221[i + 0]) );
  }
  i1216.m_ControlSchemes = i1220
  i1216.m_IsProjectWide = !!i1217[2]
  return i1216
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1225 = data
  i1224.m_Name = i1225[0]
  i1224.m_Id = i1225[1]
  request.r(i1225[2], i1225[3], 0, i1224, 'm_Asset')
  var i1227 = i1225[4]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('UnityEngine.InputSystem.InputAction', i1227[i + 0]) );
  }
  i1224.m_Actions = i1226
  var i1229 = i1225[5]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('UnityEngine.InputSystem.InputBinding', i1229[i + 0]) );
  }
  i1224.m_Bindings = i1228
  return i1224
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1233 = data
  i1232.m_Name = i1233[0]
  i1232.m_Type = i1233[1]
  i1232.m_ExpectedControlType = i1233[2]
  i1232.m_Id = i1233[3]
  i1232.m_Processors = i1233[4]
  i1232.m_Interactions = i1233[5]
  var i1235 = i1233[6]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('UnityEngine.InputSystem.InputBinding', i1235[i + 0]) );
  }
  i1232.m_SingletonActionBindings = i1234
  i1232.m_Flags = i1233[7]
  return i1232
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1239 = data
  i1238.m_Name = i1239[0]
  i1238.m_Id = i1239[1]
  i1238.m_Path = i1239[2]
  i1238.m_Interactions = i1239[3]
  i1238.m_Processors = i1239[4]
  i1238.m_Groups = i1239[5]
  i1238.m_Action = i1239[6]
  i1238.m_Flags = i1239[7]
  return i1238
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1243 = data
  i1242.m_Name = i1243[0]
  i1242.m_BindingGroup = i1243[1]
  var i1245 = i1243[2]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1245[i + 0]) );
  }
  i1242.m_DeviceRequirements = i1244
  return i1242
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1249 = data
  i1248.m_ControlPath = i1249[0]
  i1248.m_Flags = i1249[1]
  return i1248
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'm_Asset')
  i1250.m_ActionId = i1251[2]
  return i1250
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1253 = data
  i1252.useSafeMode = !!i1253[0]
  i1252.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1253[1], i1252.safeModeOptions)
  i1252.timeScale = i1253[2]
  i1252.unscaledTimeScale = i1253[3]
  i1252.useSmoothDeltaTime = !!i1253[4]
  i1252.maxSmoothUnscaledTime = i1253[5]
  i1252.rewindCallbackMode = i1253[6]
  i1252.showUnityEditorReport = !!i1253[7]
  i1252.logBehaviour = i1253[8]
  i1252.drawGizmos = !!i1253[9]
  i1252.defaultRecyclable = !!i1253[10]
  i1252.defaultAutoPlay = i1253[11]
  i1252.defaultUpdateType = i1253[12]
  i1252.defaultTimeScaleIndependent = !!i1253[13]
  i1252.defaultEaseType = i1253[14]
  i1252.defaultEaseOvershootOrAmplitude = i1253[15]
  i1252.defaultEasePeriod = i1253[16]
  i1252.defaultAutoKill = !!i1253[17]
  i1252.defaultLoopType = i1253[18]
  i1252.debugMode = !!i1253[19]
  i1252.debugStoreTargetId = !!i1253[20]
  i1252.showPreviewPanel = !!i1253[21]
  i1252.storeSettingsLocation = i1253[22]
  i1252.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1253[23], i1252.modules)
  i1252.createASMDEF = !!i1253[24]
  i1252.showPlayingTweens = !!i1253[25]
  i1252.showPausedTweens = !!i1253[26]
  return i1252
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1254 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1255 = data
  i1254.logBehaviour = i1255[0]
  i1254.nestedTweenFailureBehaviour = i1255[1]
  return i1254
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1256 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1257 = data
  i1256.showPanel = !!i1257[0]
  i1256.audioEnabled = !!i1257[1]
  i1256.physicsEnabled = !!i1257[2]
  i1256.physics2DEnabled = !!i1257[3]
  i1256.spriteEnabled = !!i1257[4]
  i1256.uiEnabled = !!i1257[5]
  i1256.uiToolkitEnabled = !!i1257[6]
  i1256.textMeshProEnabled = !!i1257[7]
  i1256.tk2DEnabled = !!i1257[8]
  i1256.deAudioEnabled = !!i1257[9]
  i1256.deAudioV2Enabled = !!i1257[10]
  i1256.deUnityExtendedEnabled = !!i1257[11]
  i1256.epoOutlineEnabled = !!i1257[12]
  return i1256
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_Settings' )
  var i1259 = data
  i1258.assetVersion = i1259[0]
  i1258.m_TextWrappingMode = i1259[1]
  i1258.m_enableKerning = !!i1259[2]
  var i1261 = i1259[3]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(i1261[i + 0]);
  }
  i1258.m_ActiveFontFeatures = i1260
  i1258.m_enableExtraPadding = !!i1259[4]
  i1258.m_enableTintAllSprites = !!i1259[5]
  i1258.m_enableParseEscapeCharacters = !!i1259[6]
  i1258.m_EnableRaycastTarget = !!i1259[7]
  i1258.m_GetFontFeaturesAtRuntime = !!i1259[8]
  i1258.m_missingGlyphCharacter = i1259[9]
  i1258.m_ClearDynamicDataOnBuild = !!i1259[10]
  i1258.m_warningsDisabled = !!i1259[11]
  request.r(i1259[12], i1259[13], 0, i1258, 'm_defaultFontAsset')
  i1258.m_defaultFontAssetPath = i1259[14]
  i1258.m_defaultFontSize = i1259[15]
  i1258.m_defaultAutoSizeMinRatio = i1259[16]
  i1258.m_defaultAutoSizeMaxRatio = i1259[17]
  i1258.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1259[18], i1259[19] )
  i1258.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1259[20], i1259[21] )
  i1258.m_autoSizeTextContainer = !!i1259[22]
  i1258.m_IsTextObjectScaleStatic = !!i1259[23]
  var i1263 = i1259[24]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 1, i1262, '')
  }
  i1258.m_fallbackFontAssets = i1262
  i1258.m_matchMaterialPreset = !!i1259[25]
  i1258.m_HideSubTextObjects = !!i1259[26]
  request.r(i1259[27], i1259[28], 0, i1258, 'm_defaultSpriteAsset')
  i1258.m_defaultSpriteAssetPath = i1259[29]
  i1258.m_enableEmojiSupport = !!i1259[30]
  i1258.m_MissingCharacterSpriteUnicode = i1259[31]
  var i1265 = i1259[32]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1265.length; i += 2) {
  request.r(i1265[i + 0], i1265[i + 1], 1, i1264, '')
  }
  i1258.m_EmojiFallbackTextAssets = i1264
  i1258.m_defaultColorGradientPresetsPath = i1259[33]
  request.r(i1259[34], i1259[35], 0, i1258, 'm_defaultStyleSheet')
  i1258.m_StyleSheetsResourcePath = i1259[36]
  request.r(i1259[37], i1259[38], 0, i1258, 'm_leadingCharacters')
  request.r(i1259[39], i1259[40], 0, i1258, 'm_followingCharacters')
  i1258.m_UseModernHangulLineBreakingRules = !!i1259[41]
  return i1258
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'spriteSheet')
  var i1271 = i1269[2]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.TMP_Sprite', i1271[i + 0]));
  }
  i1268.spriteInfoList = i1270
  var i1273 = i1269[3]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 1, i1272, '')
  }
  i1268.fallbackSpriteAssets = i1272
  var i1275 = i1269[4]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.TMP_SpriteCharacter', i1275[i + 0]));
  }
  i1268.m_SpriteCharacterTable = i1274
  var i1277 = i1269[5]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.TMP_SpriteGlyph', i1277[i + 0]));
  }
  i1268.m_GlyphTable = i1276
  i1268.m_Version = i1269[6]
  i1268.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1269[7], i1268.m_FaceInfo)
  request.r(i1269[8], i1269[9], 0, i1268, 'm_Material')
  return i1268
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.hashCode = i1281[1]
  i1280.unicode = i1281[2]
  i1280.pivot = new pc.Vec2( i1281[3], i1281[4] )
  request.r(i1281[5], i1281[6], 0, i1280, 'sprite')
  i1280.id = i1281[7]
  i1280.x = i1281[8]
  i1280.y = i1281[9]
  i1280.width = i1281[10]
  i1280.height = i1281[11]
  i1280.xOffset = i1281[12]
  i1280.yOffset = i1281[13]
  i1280.xAdvance = i1281[14]
  i1280.scale = i1281[15]
  return i1280
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1287 = data
  i1286.m_Name = i1287[0]
  i1286.m_ElementType = i1287[1]
  i1286.m_Unicode = i1287[2]
  i1286.m_GlyphIndex = i1287[3]
  i1286.m_Scale = i1287[4]
  return i1286
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'sprite')
  i1290.m_Index = i1291[2]
  i1290.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1291[3], i1290.m_Metrics)
  i1290.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1291[4], i1290.m_GlyphRect)
  i1290.m_Scale = i1291[5]
  i1290.m_AtlasIndex = i1291[6]
  i1290.m_ClassDefinitionType = i1291[7]
  return i1290
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('TMPro.TMP_Style', i1295[i + 0]));
  }
  i1292.m_StyleList = i1294
  return i1292
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_Style' )
  var i1299 = data
  i1298.m_Name = i1299[0]
  i1298.m_HashCode = i1299[1]
  i1298.m_OpeningDefinition = i1299[2]
  i1298.m_ClosingDefinition = i1299[3]
  i1298.m_OpeningTagArray = i1299[4]
  i1298.m_ClosingTagArray = i1299[5]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1301 = data
  var i1303 = i1301[0]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1303[i + 0]) );
  }
  i1300.files = i1302
  i1300.componentToPrefabIds = i1301[1]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1307 = data
  i1306.path = i1307[0]
  request.r(i1307[1], i1307[2], 0, i1306, 'unityObject')
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1311[i + 0]) );
  }
  i1308.scriptsExecutionOrder = i1310
  var i1313 = i1309[1]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1313[i + 0]) );
  }
  i1308.sortingLayers = i1312
  var i1315 = i1309[2]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1315[i + 0]) );
  }
  i1308.cullingLayers = i1314
  i1308.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1309[3], i1308.timeSettings)
  i1308.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1309[4], i1308.physicsSettings)
  i1308.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1309[5], i1308.physics2DSettings)
  i1308.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1309[6], i1308.qualitySettings)
  i1308.enableRealtimeShadows = !!i1309[7]
  i1308.enableAutoInstancing = !!i1309[8]
  i1308.enableStaticBatching = !!i1309[9]
  i1308.enableDynamicBatching = !!i1309[10]
  i1308.usePreservativeDynamicBatching = !!i1309[11]
  i1308.lightmapEncodingQuality = i1309[12]
  i1308.desiredColorSpace = i1309[13]
  var i1317 = i1309[14]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( i1317[i + 0] );
  }
  i1308.allTags = i1316
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1321 = data
  i1320.name = i1321[0]
  i1320.value = i1321[1]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1325 = data
  i1324.id = i1325[0]
  i1324.name = i1325[1]
  i1324.value = i1325[2]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1329 = data
  i1328.id = i1329[0]
  i1328.name = i1329[1]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1331 = data
  i1330.fixedDeltaTime = i1331[0]
  i1330.maximumDeltaTime = i1331[1]
  i1330.timeScale = i1331[2]
  i1330.maximumParticleTimestep = i1331[3]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1333 = data
  i1332.gravity = new pc.Vec3( i1333[0], i1333[1], i1333[2] )
  i1332.defaultSolverIterations = i1333[3]
  i1332.bounceThreshold = i1333[4]
  i1332.autoSyncTransforms = !!i1333[5]
  i1332.autoSimulation = !!i1333[6]
  var i1335 = i1333[7]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1335[i + 0]) );
  }
  i1332.collisionMatrix = i1334
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1339 = data
  i1338.enabled = !!i1339[0]
  i1338.layerId = i1339[1]
  i1338.otherLayerId = i1339[2]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'material')
  i1340.gravity = new pc.Vec2( i1341[2], i1341[3] )
  i1340.positionIterations = i1341[4]
  i1340.velocityIterations = i1341[5]
  i1340.velocityThreshold = i1341[6]
  i1340.maxLinearCorrection = i1341[7]
  i1340.maxAngularCorrection = i1341[8]
  i1340.maxTranslationSpeed = i1341[9]
  i1340.maxRotationSpeed = i1341[10]
  i1340.baumgarteScale = i1341[11]
  i1340.baumgarteTOIScale = i1341[12]
  i1340.timeToSleep = i1341[13]
  i1340.linearSleepTolerance = i1341[14]
  i1340.angularSleepTolerance = i1341[15]
  i1340.defaultContactOffset = i1341[16]
  i1340.autoSimulation = !!i1341[17]
  i1340.queriesHitTriggers = !!i1341[18]
  i1340.queriesStartInColliders = !!i1341[19]
  i1340.callbacksOnDisable = !!i1341[20]
  i1340.reuseCollisionCallbacks = !!i1341[21]
  i1340.autoSyncTransforms = !!i1341[22]
  var i1343 = i1341[23]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1343[i + 0]) );
  }
  i1340.collisionMatrix = i1342
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1347 = data
  i1346.enabled = !!i1347[0]
  i1346.layerId = i1347[1]
  i1346.otherLayerId = i1347[2]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1351[i + 0]) );
  }
  i1348.qualityLevels = i1350
  var i1353 = i1349[1]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( i1353[i + 0] );
  }
  i1348.names = i1352
  i1348.shadows = i1349[2]
  i1348.anisotropicFiltering = i1349[3]
  i1348.antiAliasing = i1349[4]
  i1348.lodBias = i1349[5]
  i1348.shadowCascades = i1349[6]
  i1348.shadowDistance = i1349[7]
  i1348.shadowmaskMode = i1349[8]
  i1348.shadowProjection = i1349[9]
  i1348.shadowResolution = i1349[10]
  i1348.softParticles = !!i1349[11]
  i1348.softVegetation = !!i1349[12]
  i1348.activeColorSpace = i1349[13]
  i1348.desiredColorSpace = i1349[14]
  i1348.masterTextureLimit = i1349[15]
  i1348.maxQueuedFrames = i1349[16]
  i1348.particleRaycastBudget = i1349[17]
  i1348.pixelLightCount = i1349[18]
  i1348.realtimeReflectionProbes = !!i1349[19]
  i1348.shadowCascade2Split = i1349[20]
  i1348.shadowCascade4Split = new pc.Vec3( i1349[21], i1349[22], i1349[23] )
  i1348.streamingMipmapsActive = !!i1349[24]
  i1348.vSyncCount = i1349[25]
  i1348.asyncUploadBufferSize = i1349[26]
  i1348.asyncUploadTimeSlice = i1349[27]
  i1348.billboardsFaceCameraPosition = !!i1349[28]
  i1348.shadowNearPlaneOffset = i1349[29]
  i1348.streamingMipmapsMemoryBudget = i1349[30]
  i1348.maximumLODLevel = i1349[31]
  i1348.streamingMipmapsAddAllCameras = !!i1349[32]
  i1348.streamingMipmapsMaxLevelReduction = i1349[33]
  i1348.streamingMipmapsRenderersPerFrame = i1349[34]
  i1348.resolutionScalingFixedDPIFactor = i1349[35]
  i1348.streamingMipmapsMaxFileIORequests = i1349[36]
  i1348.currentQualityLevel = i1349[37]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1359 = data
  i1358.weight = i1359[0]
  i1358.vertices = i1359[1]
  i1358.normals = i1359[2]
  i1358.tangents = i1359[3]
  return i1358
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'm_ObjectArgument')
  i1360.m_ObjectArgumentAssemblyTypeName = i1361[2]
  i1360.m_IntArgument = i1361[3]
  i1360.m_FloatArgument = i1361[4]
  i1360.m_StringArgument = i1361[5]
  i1360.m_BoolArgument = !!i1361[6]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1363 = data
  i1362.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1363[0], i1362.Event)
  i1362.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1363[1], i1362.filterSettings)
  i1362.overrideMaterialId = i1363[2]
  i1362.overrideMaterialPassIndex = i1363[3]
  i1362.overrideShaderId = i1363[4]
  i1362.overrideShaderPassIndex = i1363[5]
  i1362.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1363[6], i1362.overrideMode)
  i1362.overrideDepthState = !!i1363[7]
  i1362.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1363[8], i1362.depthCompareFunction)
  i1362.enableWrite = !!i1363[9]
  i1362.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1363[10], i1362.stencilSettings)
  i1362.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1363[11], i1362.cameraSettings)
  return i1362
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1365 = data
  i1364.m_XCoordinate = i1365[0]
  i1364.m_YCoordinate = i1365[1]
  return i1364
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1367 = data
  i1366.m_XPositionAdjustment = i1367[0]
  i1366.m_YPositionAdjustment = i1367[1]
  return i1366
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1369 = data
  i1368.xPlacement = i1369[0]
  i1368.yPlacement = i1369[1]
  i1368.xAdvance = i1369[2]
  i1368.yAdvance = i1369[3]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1371 = data
  i1370.Value = i1371[0]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1373 = data
  i1372.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1373[0], i1372.RenderQueueType)
  i1372.LayerMask = i1373[1]
  var i1375 = i1373[2]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1372.PassNames = i1374
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1377 = data
  i1376.overrideStencilState = !!i1377[0]
  i1376.stencilReference = i1377[1]
  i1376.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1377[2], i1376.stencilCompareFunctionValue)
  i1376.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1377[3], i1376.passOperationValue)
  i1376.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1377[4], i1376.failOperationValue)
  i1376.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1377[5], i1376.zFailOperationValue)
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1379 = data
  i1378.overrideCamera = !!i1379[0]
  i1378.restoreCamera = !!i1379[1]
  i1378.offset = new pc.Vec4( i1379[2], i1379[3], i1379[4], i1379[5] )
  i1378.cameraFieldOfView = i1379[6]
  return i1378
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[40],"61":[2],"62":[36],"63":[36],"64":[36],"65":[36],"66":[36],"67":[36],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[2],"83":[12],"84":[85],"86":[85],"23":[20],"32":[31],"87":[23],"88":[20],"89":[2],"5":[2],"7":[6],"90":[20],"91":[12,20],"18":[20,27],"92":[20],"93":[27,20],"94":[12],"95":[27,20],"96":[20],"97":[98],"99":[98],"100":[98],"101":[20],"102":[20],"26":[23],"29":[27,20],"103":[20],"25":[23],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[27,20],"114":[20],"115":[20],"116":[20],"117":[20],"118":[27,20],"119":[20],"120":[31],"121":[31],"122":[31],"123":[31],"124":[2],"125":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Coin","UnityEngine.SphereCollider","UnityEngine.Material","GameManager","UIManager","TMPro.TextMeshProUGUI","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.UI.Button","UnityEngine.Sprite","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.Image","VirtualJoystick","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","UnityEngine.BoxCollider","UnityEngine.Rigidbody","PlayerMovement","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","UnityEngine.Transform","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.63f1";

Deserializers.productName = "PlaybleAdsLol";

Deserializers.lunaInitializationTime = "11/01/2026 14:14:18";

Deserializers.lunaDaysRunning = "1.4";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "lolKeck";

Deserializers.lunaAppID = "43702";

Deserializers.projectId = "548ebd3ae4f05b04cb14b21b906eaa95";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.16.0\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1732";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4420";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlaybleAdsLol";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "ea24138f-9a0a-4d90-b2f3-bdbb1ae9215c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

