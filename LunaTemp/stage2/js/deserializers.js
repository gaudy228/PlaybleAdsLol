var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSpring' )
  var i2071 = data
  i2070.spring = i2071[0]
  i2070.damper = i2071[1]
  i2070.targetPosition = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointMotor' )
  var i2073 = data
  i2072.m_TargetVelocity = i2073[0]
  i2072.m_Force = i2073[1]
  i2072.m_FreeSpin = i2073[2]
  return i2072
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.JointLimits' )
  var i2075 = data
  i2074.m_Min = i2075[0]
  i2074.m_Max = i2075[1]
  i2074.m_Bounciness = i2075[2]
  i2074.m_BounceMinVelocity = i2075[3]
  i2074.m_ContactDistance = i2075[4]
  i2074.minBounce = i2075[5]
  i2074.maxBounce = i2075[6]
  return i2074
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointDrive' )
  var i2077 = data
  i2076.m_PositionSpring = i2077[0]
  i2076.m_PositionDamper = i2077[1]
  i2076.m_MaximumForce = i2077[2]
  i2076.m_UseAcceleration = i2077[3]
  return i2076
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2079 = data
  i2078.m_Spring = i2079[0]
  i2078.m_Damper = i2079[1]
  return i2078
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2081 = data
  i2080.m_Limit = i2081[0]
  i2080.m_Bounciness = i2081[1]
  i2080.m_ContactDistance = i2081[2]
  return i2080
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2083 = data
  i2082.m_ExtremumSlip = i2083[0]
  i2082.m_ExtremumValue = i2083[1]
  i2082.m_AsymptoteSlip = i2083[2]
  i2082.m_AsymptoteValue = i2083[3]
  i2082.m_Stiffness = i2083[4]
  return i2082
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2085 = data
  i2084.m_LowerAngle = i2085[0]
  i2084.m_UpperAngle = i2085[1]
  return i2084
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2087 = data
  i2086.m_MotorSpeed = i2087[0]
  i2086.m_MaximumMotorTorque = i2087[1]
  return i2086
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2089 = data
  i2088.m_DampingRatio = i2089[0]
  i2088.m_Frequency = i2089[1]
  i2088.m_Angle = i2089[2]
  return i2088
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2091 = data
  i2090.m_LowerTranslation = i2091[0]
  i2090.m_UpperTranslation = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.halfPrecision = !!i2093[1]
  i2092.useSimplification = !!i2093[2]
  i2092.useUInt32IndexFormat = !!i2093[3]
  i2092.vertexCount = i2093[4]
  i2092.aabb = i2093[5]
  var i2095 = i2093[6]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( !!i2095[i + 0] );
  }
  i2092.streams = i2094
  i2092.vertices = i2093[7]
  var i2097 = i2093[8]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2097[i + 0]) );
  }
  i2092.subMeshes = i2096
  var i2099 = i2093[9]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 16) {
    i2098.push( new pc.Mat4().setData(i2099[i + 0], i2099[i + 1], i2099[i + 2], i2099[i + 3],  i2099[i + 4], i2099[i + 5], i2099[i + 6], i2099[i + 7],  i2099[i + 8], i2099[i + 9], i2099[i + 10], i2099[i + 11],  i2099[i + 12], i2099[i + 13], i2099[i + 14], i2099[i + 15]) );
  }
  i2092.bindposes = i2098
  var i2101 = i2093[10]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2101[i + 0]) );
  }
  i2092.blendShapes = i2100
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2107 = data
  i2106.triangles = i2107[0]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2113 = data
  i2112.name = i2113[0]
  var i2115 = i2113[1]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2115[i + 0]) );
  }
  i2112.frames = i2114
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2116 = root || new pc.UnityMaterial()
  var i2117 = data
  i2116.name = i2117[0]
  request.r(i2117[1], i2117[2], 0, i2116, 'shader')
  i2116.renderQueue = i2117[3]
  i2116.enableInstancing = !!i2117[4]
  var i2119 = i2117[5]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2119[i + 0]) );
  }
  i2116.floatParameters = i2118
  var i2121 = i2117[6]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2121[i + 0]) );
  }
  i2116.colorParameters = i2120
  var i2123 = i2117[7]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2123[i + 0]) );
  }
  i2116.vectorParameters = i2122
  var i2125 = i2117[8]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2125[i + 0]) );
  }
  i2116.textureParameters = i2124
  var i2127 = i2117[9]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2127[i + 0]) );
  }
  i2116.materialFlags = i2126
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2131 = data
  i2130.name = i2131[0]
  i2130.value = i2131[1]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2135 = data
  i2134.name = i2135[0]
  i2134.value = new pc.Color(i2135[1], i2135[2], i2135[3], i2135[4])
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.value = new pc.Vec4( i2139[1], i2139[2], i2139[3], i2139[4] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2143 = data
  i2142.name = i2143[0]
  request.r(i2143[1], i2143[2], 0, i2142, 'value')
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.enabled = !!i2147[1]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.width = i2149[1]
  i2148.height = i2149[2]
  i2148.mipmapCount = i2149[3]
  i2148.anisoLevel = i2149[4]
  i2148.filterMode = i2149[5]
  i2148.hdr = !!i2149[6]
  i2148.format = i2149[7]
  i2148.wrapMode = i2149[8]
  i2148.alphaIsTransparency = !!i2149[9]
  i2148.alphaSource = i2149[10]
  i2148.graphicsFormat = i2149[11]
  i2148.sRGBTexture = !!i2149[12]
  i2148.desiredColorSpace = i2149[13]
  i2148.wrapU = i2149[14]
  i2148.wrapV = i2149[15]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.atlasId = i2151[1]
  i2150.mipmapCount = i2151[2]
  i2150.hdr = !!i2151[3]
  i2150.size = i2151[4]
  i2150.anisoLevel = i2151[5]
  i2150.filterMode = i2151[6]
  var i2153 = i2151[7]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 4) {
    i2152.push( UnityEngine.Rect.MinMaxRect(i2153[i + 0], i2153[i + 1], i2153[i + 2], i2153[i + 3]) );
  }
  i2150.rects = i2152
  i2150.wrapU = i2151[8]
  i2150.wrapV = i2151[9]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2157 = data
  i2156.name = i2157[0]
  i2156.index = i2157[1]
  i2156.startup = !!i2157[2]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2159 = data
  i2158.aspect = i2159[0]
  i2158.orthographic = !!i2159[1]
  i2158.orthographicSize = i2159[2]
  i2158.backgroundColor = new pc.Color(i2159[3], i2159[4], i2159[5], i2159[6])
  i2158.nearClipPlane = i2159[7]
  i2158.farClipPlane = i2159[8]
  i2158.fieldOfView = i2159[9]
  i2158.depth = i2159[10]
  i2158.clearFlags = i2159[11]
  i2158.cullingMask = i2159[12]
  i2158.rect = i2159[13]
  request.r(i2159[14], i2159[15], 0, i2158, 'targetTexture')
  i2158.usePhysicalProperties = !!i2159[16]
  i2158.focalLength = i2159[17]
  i2158.sensorSize = new pc.Vec2( i2159[18], i2159[19] )
  i2158.lensShift = new pc.Vec2( i2159[20], i2159[21] )
  i2158.gateFit = i2159[22]
  i2158.commandBufferCount = i2159[23]
  i2158.cameraType = i2159[24]
  i2158.enabled = !!i2159[25]
  return i2158
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2161 = data
  i2160.m_RenderShadows = !!i2161[0]
  i2160.m_RequiresDepthTextureOption = i2161[1]
  i2160.m_RequiresOpaqueTextureOption = i2161[2]
  i2160.m_CameraType = i2161[3]
  var i2163 = i2161[4]
  var i2162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2163.length; i += 2) {
  request.r(i2163[i + 0], i2163[i + 1], 1, i2162, '')
  }
  i2160.m_Cameras = i2162
  i2160.m_RendererIndex = i2161[5]
  i2160.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2161[6] )
  request.r(i2161[7], i2161[8], 0, i2160, 'm_VolumeTrigger')
  i2160.m_VolumeFrameworkUpdateModeOption = i2161[9]
  i2160.m_RenderPostProcessing = !!i2161[10]
  i2160.m_Antialiasing = i2161[11]
  i2160.m_AntialiasingQuality = i2161[12]
  i2160.m_StopNaN = !!i2161[13]
  i2160.m_Dithering = !!i2161[14]
  i2160.m_ClearDepth = !!i2161[15]
  i2160.m_AllowXRRendering = !!i2161[16]
  i2160.m_AllowHDROutput = !!i2161[17]
  i2160.m_UseScreenCoordOverride = !!i2161[18]
  i2160.m_ScreenSizeOverride = new pc.Vec4( i2161[19], i2161[20], i2161[21], i2161[22] )
  i2160.m_ScreenCoordScaleBias = new pc.Vec4( i2161[23], i2161[24], i2161[25], i2161[26] )
  i2160.m_RequiresDepthTexture = !!i2161[27]
  i2160.m_RequiresColorTexture = !!i2161[28]
  i2160.m_Version = i2161[29]
  i2160.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2161[30], i2160.m_TaaSettings)
  return i2160
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2167 = data
  i2166.m_Quality = i2167[0]
  i2166.m_FrameInfluence = i2167[1]
  i2166.m_JitterScale = i2167[2]
  i2166.m_MipBias = i2167[3]
  i2166.m_VarianceClampScale = i2167[4]
  i2166.m_ContrastAdaptiveSharpening = i2167[5]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.tagId = i2169[1]
  i2168.enabled = !!i2169[2]
  i2168.isStatic = !!i2169[3]
  i2168.layer = i2169[4]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2171 = data
  i2170.type = i2171[0]
  i2170.color = new pc.Color(i2171[1], i2171[2], i2171[3], i2171[4])
  i2170.cullingMask = i2171[5]
  i2170.intensity = i2171[6]
  i2170.range = i2171[7]
  i2170.spotAngle = i2171[8]
  i2170.shadows = i2171[9]
  i2170.shadowNormalBias = i2171[10]
  i2170.shadowBias = i2171[11]
  i2170.shadowStrength = i2171[12]
  i2170.shadowResolution = i2171[13]
  i2170.lightmapBakeType = i2171[14]
  i2170.renderMode = i2171[15]
  request.r(i2171[16], i2171[17], 0, i2170, 'cookie')
  i2170.cookieSize = i2171[18]
  i2170.shadowNearPlane = i2171[19]
  i2170.occlusionMaskChannel = i2171[20]
  i2170.isBaked = !!i2171[21]
  i2170.mixedLightingMode = i2171[22]
  i2170.enabled = !!i2171[23]
  return i2170
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2173 = data
  i2172.m_Version = i2173[0]
  i2172.m_UsePipelineSettings = !!i2173[1]
  i2172.m_AdditionalLightsShadowResolutionTier = i2173[2]
  i2172.m_LightLayerMask = i2173[3]
  i2172.m_RenderingLayers = i2173[4]
  i2172.m_CustomShadowLayers = !!i2173[5]
  i2172.m_ShadowLayerMask = i2173[6]
  i2172.m_ShadowRenderingLayers = i2173[7]
  i2172.m_LightCookieSize = new pc.Vec2( i2173[8], i2173[9] )
  i2172.m_LightCookieOffset = new pc.Vec2( i2173[10], i2173[11] )
  i2172.m_SoftShadowQuality = i2173[12]
  return i2172
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2175 = data
  i2174.priority = i2175[0]
  i2174.blendDistance = i2175[1]
  i2174.weight = i2175[2]
  request.r(i2175[3], i2175[4], 0, i2174, 'sharedProfile')
  i2174.m_IsGlobal = !!i2175[5]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'sharedMesh')
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'additionalVertexStreams')
  i2178.enabled = !!i2179[2]
  request.r(i2179[3], i2179[4], 0, i2178, 'sharedMaterial')
  var i2181 = i2179[5]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 2, i2180, '')
  }
  i2178.sharedMaterials = i2180
  i2178.receiveShadows = !!i2179[6]
  i2178.shadowCastingMode = i2179[7]
  i2178.sortingLayerID = i2179[8]
  i2178.sortingOrder = i2179[9]
  i2178.lightmapIndex = i2179[10]
  i2178.lightmapSceneIndex = i2179[11]
  i2178.lightmapScaleOffset = new pc.Vec4( i2179[12], i2179[13], i2179[14], i2179[15] )
  i2178.lightProbeUsage = i2179[16]
  i2178.reflectionProbeUsage = i2179[17]
  return i2178
}

Deserializers["Coin"] = function (request, data, root) {
  var i2184 = root || request.c( 'Coin' )
  var i2185 = data
  i2184.rotateDuration = i2185[0]
  i2184.rotateMode = i2185[1]
  i2184.bobAmplitude = i2185[2]
  i2184.bobDuration = i2185[3]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2187 = data
  i2186.center = new pc.Vec3( i2187[0], i2187[1], i2187[2] )
  i2186.radius = i2187[3]
  i2186.enabled = !!i2187[4]
  i2186.isTrigger = !!i2187[5]
  request.r(i2187[6], i2187[7], 0, i2186, 'material')
  return i2186
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2188 = root || request.c( 'GameManager' )
  var i2189 = data
  i2188.onGameWin = request.d('UnityEngine.Events.UnityEvent', i2189[0], i2188.onGameWin)
  i2188.onCoinCountChanged = request.d('UnityEngine.Events.UnityEvent`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2189[1], i2188.onCoinCountChanged)
  request.r(i2189[2], i2189[3], 0, i2188, 'uiManager')
  return i2188
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2191 = data
  i2190.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2191[0], i2190.m_PersistentCalls)
  return i2190
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2193 = data
  var i2195 = i2193[0]
  var i2194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.add(request.d('UnityEngine.Events.PersistentCall', i2195[i + 0]));
  }
  i2192.m_Calls = i2194
  return i2192
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'm_Target')
  i2198.m_TargetAssemblyTypeName = i2199[2]
  i2198.m_MethodName = i2199[3]
  i2198.m_Mode = i2199[4]
  i2198.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2199[5], i2198.m_Arguments)
  i2198.m_CallState = i2199[6]
  return i2198
}

Deserializers["UnityEngine.Events.UnityEvent`2[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2200 = root || new (UnityEngine.Events.UnityEvent$2( Bridge.ns( 'System.Int32' ),Bridge.ns( 'System.Int32' ) ))
  var i2201 = data
  i2200.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2201[0], i2200.m_PersistentCalls)
  return i2200
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2202 = root || request.c( 'UIManager' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'coinText')
  i2202.counterFormat = i2203[2]
  request.r(i2203[3], i2203[4], 0, i2202, 'winPanel')
  request.r(i2203[5], i2203[6], 0, i2202, 'victoryImage')
  request.r(i2203[7], i2203[8], 0, i2202, 'ctaButton')
  i2202.ctaUrl = i2203[9]
  i2202.winPanelStartScale = new pc.Vec3( i2203[10], i2203[11], i2203[12] )
  i2202.winPanelFadeDuration = i2203[13]
  i2202.winPanelScaleDuration = i2203[14]
  i2202.victoryImageDelay = i2203[15]
  i2202.victoryImageDuration = i2203[16]
  i2202.victoryImageStartRotation = i2203[17]
  i2202.victoryImagePunch = i2203[18]
  i2202.enableVictoryPulse = !!i2203[19]
  i2202.victoryPulseScale = i2203[20]
  i2202.victoryPulseDuration = i2203[21]
  i2202.victoryPulseDelay = i2203[22]
  request.r(i2203[23], i2203[24], 0, i2202, 'flyingCoinSprite')
  i2202.flyingCoinSize = i2203[25]
  i2202.flyingCoinDuration = i2203[26]
  i2202.flyingCoinEndScale = i2203[27]
  i2202.flyingCoinArc = i2203[28]
  i2202.punchStrength = i2203[29]
  i2202.punchDuration = i2203[30]
  i2202.enableButtonPulse = !!i2203[31]
  i2202.pulseScale = i2203[32]
  i2202.pulseDuration = i2203[33]
  i2202.enableButtonSway = !!i2203[34]
  i2202.swayAngle = i2203[35]
  i2202.swayDuration = i2203[36]
  request.r(i2203[37], i2203[38], 0, i2202, 'worldCamera')
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2205 = data
  i2204.pivot = new pc.Vec2( i2205[0], i2205[1] )
  i2204.anchorMin = new pc.Vec2( i2205[2], i2205[3] )
  i2204.anchorMax = new pc.Vec2( i2205[4], i2205[5] )
  i2204.sizeDelta = new pc.Vec2( i2205[6], i2205[7] )
  i2204.anchoredPosition3D = new pc.Vec3( i2205[8], i2205[9], i2205[10] )
  i2204.rotation = new pc.Quat(i2205[11], i2205[12], i2205[13], i2205[14])
  i2204.scale = new pc.Vec3( i2205[15], i2205[16], i2205[17] )
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2207 = data
  i2206.planeDistance = i2207[0]
  i2206.referencePixelsPerUnit = i2207[1]
  i2206.isFallbackOverlay = !!i2207[2]
  i2206.renderMode = i2207[3]
  i2206.renderOrder = i2207[4]
  i2206.sortingLayerName = i2207[5]
  i2206.sortingOrder = i2207[6]
  i2206.scaleFactor = i2207[7]
  request.r(i2207[8], i2207[9], 0, i2206, 'worldCamera')
  i2206.overrideSorting = !!i2207[10]
  i2206.pixelPerfect = !!i2207[11]
  i2206.targetDisplay = i2207[12]
  i2206.overridePixelPerfect = !!i2207[13]
  i2206.enabled = !!i2207[14]
  return i2206
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2209 = data
  i2208.m_UiScaleMode = i2209[0]
  i2208.m_ReferencePixelsPerUnit = i2209[1]
  i2208.m_ScaleFactor = i2209[2]
  i2208.m_ReferenceResolution = new pc.Vec2( i2209[3], i2209[4] )
  i2208.m_ScreenMatchMode = i2209[5]
  i2208.m_MatchWidthOrHeight = i2209[6]
  i2208.m_PhysicalUnit = i2209[7]
  i2208.m_FallbackScreenDPI = i2209[8]
  i2208.m_DefaultSpriteDPI = i2209[9]
  i2208.m_DynamicPixelsPerUnit = i2209[10]
  i2208.m_PresetInfoIsWorld = !!i2209[11]
  return i2208
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2211 = data
  i2210.m_IgnoreReversedGraphics = !!i2211[0]
  i2210.m_BlockingObjects = i2211[1]
  i2210.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2211[2] )
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2213 = data
  i2212.cullTransparentMesh = !!i2213[0]
  return i2212
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2214 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2215 = data
  i2214.m_hasFontAssetChanged = !!i2215[0]
  request.r(i2215[1], i2215[2], 0, i2214, 'm_baseMaterial')
  i2214.m_maskOffset = new pc.Vec4( i2215[3], i2215[4], i2215[5], i2215[6] )
  i2214.m_text = i2215[7]
  i2214.m_isRightToLeft = !!i2215[8]
  request.r(i2215[9], i2215[10], 0, i2214, 'm_fontAsset')
  request.r(i2215[11], i2215[12], 0, i2214, 'm_sharedMaterial')
  var i2217 = i2215[13]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2214.m_fontSharedMaterials = i2216
  request.r(i2215[14], i2215[15], 0, i2214, 'm_fontMaterial')
  var i2219 = i2215[16]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 2, i2218, '')
  }
  i2214.m_fontMaterials = i2218
  i2214.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2215[17], i2215[18], i2215[19], i2215[20])
  i2214.m_fontColor = new pc.Color(i2215[21], i2215[22], i2215[23], i2215[24])
  i2214.m_enableVertexGradient = !!i2215[25]
  i2214.m_colorMode = i2215[26]
  i2214.m_fontColorGradient = request.d('TMPro.VertexGradient', i2215[27], i2214.m_fontColorGradient)
  request.r(i2215[28], i2215[29], 0, i2214, 'm_fontColorGradientPreset')
  request.r(i2215[30], i2215[31], 0, i2214, 'm_spriteAsset')
  i2214.m_tintAllSprites = !!i2215[32]
  request.r(i2215[33], i2215[34], 0, i2214, 'm_StyleSheet')
  i2214.m_TextStyleHashCode = i2215[35]
  i2214.m_overrideHtmlColors = !!i2215[36]
  i2214.m_faceColor = UnityEngine.Color32.ConstructColor(i2215[37], i2215[38], i2215[39], i2215[40])
  i2214.m_fontSize = i2215[41]
  i2214.m_fontSizeBase = i2215[42]
  i2214.m_fontWeight = i2215[43]
  i2214.m_enableAutoSizing = !!i2215[44]
  i2214.m_fontSizeMin = i2215[45]
  i2214.m_fontSizeMax = i2215[46]
  i2214.m_fontStyle = i2215[47]
  i2214.m_HorizontalAlignment = i2215[48]
  i2214.m_VerticalAlignment = i2215[49]
  i2214.m_textAlignment = i2215[50]
  i2214.m_characterSpacing = i2215[51]
  i2214.m_characterHorizontalScale = i2215[52]
  i2214.m_wordSpacing = i2215[53]
  i2214.m_lineSpacing = i2215[54]
  i2214.m_lineSpacingMax = i2215[55]
  i2214.m_paragraphSpacing = i2215[56]
  i2214.m_charWidthMaxAdj = i2215[57]
  i2214.m_TextWrappingMode = i2215[58]
  i2214.m_wordWrappingRatios = i2215[59]
  i2214.m_overflowMode = i2215[60]
  request.r(i2215[61], i2215[62], 0, i2214, 'm_linkedTextComponent')
  request.r(i2215[63], i2215[64], 0, i2214, 'parentLinkedComponent')
  i2214.m_enableKerning = !!i2215[65]
  var i2221 = i2215[66]
  var i2220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.add(i2221[i + 0]);
  }
  i2214.m_ActiveFontFeatures = i2220
  i2214.m_enableExtraPadding = !!i2215[67]
  i2214.checkPaddingRequired = !!i2215[68]
  i2214.m_isRichText = !!i2215[69]
  i2214.m_parseCtrlCharacters = !!i2215[70]
  i2214.m_isOrthographic = !!i2215[71]
  i2214.m_isCullingEnabled = !!i2215[72]
  i2214.m_horizontalMapping = i2215[73]
  i2214.m_verticalMapping = i2215[74]
  i2214.m_uvLineOffset = i2215[75]
  i2214.m_geometrySortingOrder = i2215[76]
  i2214.m_IsTextObjectScaleStatic = !!i2215[77]
  i2214.m_VertexBufferAutoSizeReduction = !!i2215[78]
  i2214.m_useMaxVisibleDescender = !!i2215[79]
  i2214.m_pageToDisplay = i2215[80]
  i2214.m_margin = new pc.Vec4( i2215[81], i2215[82], i2215[83], i2215[84] )
  i2214.m_isUsingLegacyAnimationComponent = !!i2215[85]
  i2214.m_isVolumetricText = !!i2215[86]
  request.r(i2215[87], i2215[88], 0, i2214, 'm_Material')
  i2214.m_EmojiFallbackSupport = !!i2215[89]
  i2214.m_Maskable = !!i2215[90]
  i2214.m_Color = new pc.Color(i2215[91], i2215[92], i2215[93], i2215[94])
  i2214.m_RaycastTarget = !!i2215[95]
  i2214.m_RaycastPadding = new pc.Vec4( i2215[96], i2215[97], i2215[98], i2215[99] )
  return i2214
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2222 = root || request.c( 'TMPro.VertexGradient' )
  var i2223 = data
  i2222.topLeft = new pc.Color(i2223[0], i2223[1], i2223[2], i2223[3])
  i2222.topRight = new pc.Color(i2223[4], i2223[5], i2223[6], i2223[7])
  i2222.bottomLeft = new pc.Color(i2223[8], i2223[9], i2223[10], i2223[11])
  i2222.bottomRight = new pc.Color(i2223[12], i2223[13], i2223[14], i2223[15])
  return i2222
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.UI.Image' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'm_Sprite')
  i2226.m_Type = i2227[2]
  i2226.m_PreserveAspect = !!i2227[3]
  i2226.m_FillCenter = !!i2227[4]
  i2226.m_FillMethod = i2227[5]
  i2226.m_FillAmount = i2227[6]
  i2226.m_FillClockwise = !!i2227[7]
  i2226.m_FillOrigin = i2227[8]
  i2226.m_UseSpriteMesh = !!i2227[9]
  i2226.m_PixelsPerUnitMultiplier = i2227[10]
  request.r(i2227[11], i2227[12], 0, i2226, 'm_Material')
  i2226.m_Maskable = !!i2227[13]
  i2226.m_Color = new pc.Color(i2227[14], i2227[15], i2227[16], i2227[17])
  i2226.m_RaycastTarget = !!i2227[18]
  i2226.m_RaycastPadding = new pc.Vec4( i2227[19], i2227[20], i2227[21], i2227[22] )
  return i2226
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.UI.Button' )
  var i2229 = data
  i2228.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2229[0], i2228.m_OnClick)
  i2228.m_Navigation = request.d('UnityEngine.UI.Navigation', i2229[1], i2228.m_Navigation)
  i2228.m_Transition = i2229[2]
  i2228.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2229[3], i2228.m_Colors)
  i2228.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2229[4], i2228.m_SpriteState)
  i2228.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2229[5], i2228.m_AnimationTriggers)
  i2228.m_Interactable = !!i2229[6]
  request.r(i2229[7], i2229[8], 0, i2228, 'm_TargetGraphic')
  return i2228
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2231 = data
  i2230.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2231[0], i2230.m_PersistentCalls)
  return i2230
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2233 = data
  i2232.m_Mode = i2233[0]
  i2232.m_WrapAround = !!i2233[1]
  request.r(i2233[2], i2233[3], 0, i2232, 'm_SelectOnUp')
  request.r(i2233[4], i2233[5], 0, i2232, 'm_SelectOnDown')
  request.r(i2233[6], i2233[7], 0, i2232, 'm_SelectOnLeft')
  request.r(i2233[8], i2233[9], 0, i2232, 'm_SelectOnRight')
  return i2232
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2235 = data
  i2234.m_NormalColor = new pc.Color(i2235[0], i2235[1], i2235[2], i2235[3])
  i2234.m_HighlightedColor = new pc.Color(i2235[4], i2235[5], i2235[6], i2235[7])
  i2234.m_PressedColor = new pc.Color(i2235[8], i2235[9], i2235[10], i2235[11])
  i2234.m_SelectedColor = new pc.Color(i2235[12], i2235[13], i2235[14], i2235[15])
  i2234.m_DisabledColor = new pc.Color(i2235[16], i2235[17], i2235[18], i2235[19])
  i2234.m_ColorMultiplier = i2235[20]
  i2234.m_FadeDuration = i2235[21]
  return i2234
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'm_HighlightedSprite')
  request.r(i2237[2], i2237[3], 0, i2236, 'm_PressedSprite')
  request.r(i2237[4], i2237[5], 0, i2236, 'm_SelectedSprite')
  request.r(i2237[6], i2237[7], 0, i2236, 'm_DisabledSprite')
  return i2236
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2239 = data
  i2238.m_NormalTrigger = i2239[0]
  i2238.m_HighlightedTrigger = i2239[1]
  i2238.m_PressedTrigger = i2239[2]
  i2238.m_SelectedTrigger = i2239[3]
  i2238.m_DisabledTrigger = i2239[4]
  return i2238
}

Deserializers["VirtualJoystick"] = function (request, data, root) {
  var i2240 = root || request.c( 'VirtualJoystick' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'background')
  request.r(i2241[2], i2241[3], 0, i2240, 'handle')
  i2240.handleRange = i2241[4]
  return i2240
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'm_FirstSelected')
  i2242.m_sendNavigationEvents = !!i2243[2]
  i2242.m_DragThreshold = i2243[3]
  return i2242
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i2245 = data
  i2244.m_MoveRepeatDelay = i2245[0]
  i2244.m_MoveRepeatRate = i2245[1]
  request.r(i2245[2], i2245[3], 0, i2244, 'm_XRTrackingOrigin')
  request.r(i2245[4], i2245[5], 0, i2244, 'm_ActionsAsset')
  request.r(i2245[6], i2245[7], 0, i2244, 'm_PointAction')
  request.r(i2245[8], i2245[9], 0, i2244, 'm_MoveAction')
  request.r(i2245[10], i2245[11], 0, i2244, 'm_SubmitAction')
  request.r(i2245[12], i2245[13], 0, i2244, 'm_CancelAction')
  request.r(i2245[14], i2245[15], 0, i2244, 'm_LeftClickAction')
  request.r(i2245[16], i2245[17], 0, i2244, 'm_MiddleClickAction')
  request.r(i2245[18], i2245[19], 0, i2244, 'm_RightClickAction')
  request.r(i2245[20], i2245[21], 0, i2244, 'm_ScrollWheelAction')
  request.r(i2245[22], i2245[23], 0, i2244, 'm_TrackedDevicePositionAction')
  request.r(i2245[24], i2245[25], 0, i2244, 'm_TrackedDeviceOrientationAction')
  i2244.m_DeselectOnBackgroundClick = !!i2245[26]
  i2244.m_PointerBehavior = i2245[27]
  i2244.m_CursorLockBehavior = i2245[28]
  i2244.m_ScrollDeltaPerTick = i2245[29]
  i2244.m_SendPointerHoverToParent = !!i2245[30]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2247 = data
  i2246.center = new pc.Vec3( i2247[0], i2247[1], i2247[2] )
  i2246.size = new pc.Vec3( i2247[3], i2247[4], i2247[5] )
  i2246.enabled = !!i2247[6]
  i2246.isTrigger = !!i2247[7]
  request.r(i2247[8], i2247[9], 0, i2246, 'material')
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2249 = data
  i2248.mass = i2249[0]
  i2248.drag = i2249[1]
  i2248.angularDrag = i2249[2]
  i2248.useGravity = !!i2249[3]
  i2248.isKinematic = !!i2249[4]
  i2248.constraints = i2249[5]
  i2248.maxAngularVelocity = i2249[6]
  i2248.collisionDetectionMode = i2249[7]
  i2248.interpolation = i2249[8]
  return i2248
}

Deserializers["PlayerMovement"] = function (request, data, root) {
  var i2250 = root || request.c( 'PlayerMovement' )
  var i2251 = data
  i2250.moveSpeed = i2251[0]
  i2250.boundary = i2251[1]
  i2250.rotationSpeed = i2251[2]
  i2250.inputDeadZone = i2251[3]
  request.r(i2251[4], i2251[5], 0, i2250, 'joystick')
  request.r(i2251[6], i2251[7], 0, i2250, 'animator')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'animatorController')
  request.r(i2253[2], i2253[3], 0, i2252, 'avatar')
  i2252.updateMode = i2253[4]
  i2252.hasTransformHierarchy = !!i2253[5]
  i2252.applyRootMotion = !!i2253[6]
  var i2255 = i2253[7]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 2, i2254, '')
  }
  i2252.humanBones = i2254
  i2252.enabled = !!i2253[8]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'sharedMesh')
  var i2261 = i2259[2]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 2, i2260, '')
  }
  i2258.bones = i2260
  i2258.updateWhenOffscreen = !!i2259[3]
  i2258.localBounds = i2259[4]
  request.r(i2259[5], i2259[6], 0, i2258, 'rootBone')
  var i2263 = i2259[7]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2263[i + 0]) );
  }
  i2258.blendShapesWeights = i2262
  i2258.enabled = !!i2259[8]
  request.r(i2259[9], i2259[10], 0, i2258, 'sharedMaterial')
  var i2265 = i2259[11]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 2) {
  request.r(i2265[i + 0], i2265[i + 1], 2, i2264, '')
  }
  i2258.sharedMaterials = i2264
  i2258.receiveShadows = !!i2259[12]
  i2258.shadowCastingMode = i2259[13]
  i2258.sortingLayerID = i2259[14]
  i2258.sortingOrder = i2259[15]
  i2258.lightmapIndex = i2259[16]
  i2258.lightmapSceneIndex = i2259[17]
  i2258.lightmapScaleOffset = new pc.Vec4( i2259[18], i2259[19], i2259[20], i2259[21] )
  i2258.lightProbeUsage = i2259[22]
  i2258.reflectionProbeUsage = i2259[23]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2269 = data
  i2268.weight = i2269[0]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2271 = data
  i2270.ambientIntensity = i2271[0]
  i2270.reflectionIntensity = i2271[1]
  i2270.ambientMode = i2271[2]
  i2270.ambientLight = new pc.Color(i2271[3], i2271[4], i2271[5], i2271[6])
  i2270.ambientSkyColor = new pc.Color(i2271[7], i2271[8], i2271[9], i2271[10])
  i2270.ambientGroundColor = new pc.Color(i2271[11], i2271[12], i2271[13], i2271[14])
  i2270.ambientEquatorColor = new pc.Color(i2271[15], i2271[16], i2271[17], i2271[18])
  i2270.fogColor = new pc.Color(i2271[19], i2271[20], i2271[21], i2271[22])
  i2270.fogEndDistance = i2271[23]
  i2270.fogStartDistance = i2271[24]
  i2270.fogDensity = i2271[25]
  i2270.fog = !!i2271[26]
  request.r(i2271[27], i2271[28], 0, i2270, 'skybox')
  i2270.fogMode = i2271[29]
  var i2273 = i2271[30]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2273[i + 0]) );
  }
  i2270.lightmaps = i2272
  i2270.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2271[31], i2270.lightProbes)
  i2270.lightmapsMode = i2271[32]
  i2270.mixedBakeMode = i2271[33]
  i2270.environmentLightingMode = i2271[34]
  i2270.ambientProbe = new pc.SphericalHarmonicsL2(i2271[35])
  request.r(i2271[36], i2271[37], 0, i2270, 'customReflection')
  request.r(i2271[38], i2271[39], 0, i2270, 'defaultReflection')
  i2270.defaultReflectionMode = i2271[40]
  i2270.defaultReflectionResolution = i2271[41]
  i2270.sunLightObjectId = i2271[42]
  i2270.pixelLightCount = i2271[43]
  i2270.defaultReflectionHDR = !!i2271[44]
  i2270.hasLightDataAsset = !!i2271[45]
  i2270.hasManualGenerate = !!i2271[46]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'lightmapColor')
  request.r(i2277[2], i2277[3], 0, i2276, 'lightmapDirection')
  request.r(i2277[4], i2277[5], 0, i2276, 'shadowMask')
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2278 = root || new UnityEngine.LightProbes()
  var i2279 = data
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2287 = data
  i2286.AdditionalLightsRenderingMode = i2287[0]
  i2286.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2287[1], i2286.LightRenderingMode)
  i2286.MainLightRenderingModeValue = i2287[2]
  i2286.SupportsMainLightShadows = !!i2287[3]
  i2286.MixedLightingSupported = !!i2287[4]
  i2286.MainLightShadowmapResolutionValue = i2287[5]
  i2286.SupportsSoftShadows = !!i2287[6]
  i2286.SoftShadowQualityValue = i2287[7]
  i2286.ShadowDistance = i2287[8]
  i2286.ShadowCascadeCount = i2287[9]
  i2286.Cascade2Split = i2287[10]
  i2286.Cascade3Split = new pc.Vec2( i2287[11], i2287[12] )
  i2286.Cascade4Split = new pc.Vec3( i2287[13], i2287[14], i2287[15] )
  i2286.CascadeBorder = i2287[16]
  i2286.ShadowDepthBias = i2287[17]
  i2286.ShadowNormalBias = i2287[18]
  i2286.RequireDepthTexture = !!i2287[19]
  i2286.RequireOpaqueTexture = !!i2287[20]
  i2286.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i2287[21], i2286.scriptableRendererData)
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2289 = data
  i2288.Disabled = i2289[0]
  i2288.PerVertex = i2289[1]
  i2288.PerPixel = i2289[2]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i2291 = data
  i2290.opaqueLayerMask = i2291[0]
  i2290.transparentLayerMask = i2291[1]
  var i2293 = i2291[2]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i2293[i + 0]) );
  }
  i2290.RenderObjectsFeatures = i2292
  i2290.name = i2291[3]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i2297 = data
  i2296.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i2297[0], i2296.settings)
  i2296.name = i2297[1]
  i2296.typeName = i2297[2]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2301[i + 0]));
  }
  i2298.ShaderCompilationErrors = i2300
  i2298.name = i2299[1]
  i2298.guid = i2299[2]
  var i2303 = i2299[3]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( i2303[i + 0] );
  }
  i2298.shaderDefinedKeywords = i2302
  var i2305 = i2299[4]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2305[i + 0]) );
  }
  i2298.passes = i2304
  var i2307 = i2299[5]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2307[i + 0]) );
  }
  i2298.usePasses = i2306
  var i2309 = i2299[6]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2309[i + 0]) );
  }
  i2298.defaultParameterValues = i2308
  request.r(i2299[7], i2299[8], 0, i2298, 'unityFallbackShader')
  i2298.readDepth = !!i2299[9]
  i2298.hasDepthOnlyPass = !!i2299[10]
  i2298.isCreatedByShaderGraph = !!i2299[11]
  i2298.disableBatching = !!i2299[12]
  i2298.compiled = !!i2299[13]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2313 = data
  i2312.shaderName = i2313[0]
  i2312.errorMessage = i2313[1]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2318 = root || new pc.UnityShaderPass()
  var i2319 = data
  i2318.id = i2319[0]
  i2318.subShaderIndex = i2319[1]
  i2318.name = i2319[2]
  i2318.passType = i2319[3]
  i2318.grabPassTextureName = i2319[4]
  i2318.usePass = !!i2319[5]
  i2318.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[6], i2318.zTest)
  i2318.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[7], i2318.zWrite)
  i2318.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[8], i2318.culling)
  i2318.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2319[9], i2318.blending)
  i2318.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2319[10], i2318.alphaBlending)
  i2318.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[11], i2318.colorWriteMask)
  i2318.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[12], i2318.offsetUnits)
  i2318.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[13], i2318.offsetFactor)
  i2318.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[14], i2318.stencilRef)
  i2318.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[15], i2318.stencilReadMask)
  i2318.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[16], i2318.stencilWriteMask)
  i2318.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2319[17], i2318.stencilOp)
  i2318.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2319[18], i2318.stencilOpFront)
  i2318.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2319[19], i2318.stencilOpBack)
  var i2321 = i2319[20]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2321[i + 0]) );
  }
  i2318.tags = i2320
  var i2323 = i2319[21]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( i2323[i + 0] );
  }
  i2318.passDefinedKeywords = i2322
  var i2325 = i2319[22]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2325[i + 0]) );
  }
  i2318.passDefinedKeywordGroups = i2324
  var i2327 = i2319[23]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2327[i + 0]) );
  }
  i2318.variants = i2326
  var i2329 = i2319[24]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2329[i + 0]) );
  }
  i2318.excludedVariants = i2328
  i2318.hasDepthReader = !!i2319[25]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2331 = data
  i2330.val = i2331[0]
  i2330.name = i2331[1]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2333 = data
  i2332.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2333[0], i2332.src)
  i2332.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2333[1], i2332.dst)
  i2332.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2333[2], i2332.op)
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2335 = data
  i2334.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[0], i2334.pass)
  i2334.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[1], i2334.fail)
  i2334.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[2], i2334.zFail)
  i2334.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[3], i2334.comp)
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.value = i2339[1]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( i2345[i + 0] );
  }
  i2342.keywords = i2344
  i2342.hasDiscard = !!i2343[1]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2349 = data
  i2348.passId = i2349[0]
  i2348.subShaderIndex = i2349[1]
  var i2351 = i2349[2]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( i2351[i + 0] );
  }
  i2348.keywords = i2350
  i2348.vertexProgram = i2349[3]
  i2348.fragmentProgram = i2349[4]
  i2348.exportedForWebGl2 = !!i2349[5]
  i2348.readDepth = !!i2349[6]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'shader')
  i2354.pass = i2355[2]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2359 = data
  i2358.name = i2359[0]
  i2358.type = i2359[1]
  i2358.value = new pc.Vec4( i2359[2], i2359[3], i2359[4], i2359[5] )
  i2358.textureValue = i2359[6]
  i2358.shaderPropertyFlag = i2359[7]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2361 = data
  i2360.name = i2361[0]
  request.r(i2361[1], i2361[2], 0, i2360, 'texture')
  i2360.aabb = i2361[3]
  i2360.vertices = i2361[4]
  i2360.triangles = i2361[5]
  i2360.textureRect = UnityEngine.Rect.MinMaxRect(i2361[6], i2361[7], i2361[8], i2361[9])
  i2360.packedRect = UnityEngine.Rect.MinMaxRect(i2361[10], i2361[11], i2361[12], i2361[13])
  i2360.border = new pc.Vec4( i2361[14], i2361[15], i2361[16], i2361[17] )
  i2360.transparency = i2361[18]
  i2360.bounds = i2361[19]
  i2360.pixelsPerUnit = i2361[20]
  i2360.textureWidth = i2361[21]
  i2360.textureHeight = i2361[22]
  i2360.nativeSize = new pc.Vec2( i2361[23], i2361[24] )
  i2360.pivot = new pc.Vec2( i2361[25], i2361[26] )
  i2360.textureRectOffset = new pc.Vec2( i2361[27], i2361[28] )
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2363 = data
  i2362.name = i2363[0]
  i2362.wrapMode = i2363[1]
  i2362.isLooping = !!i2363[2]
  i2362.length = i2363[3]
  var i2365 = i2363[4]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2365[i + 0]) );
  }
  i2362.curves = i2364
  var i2367 = i2363[5]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2367[i + 0]) );
  }
  i2362.events = i2366
  i2362.halfPrecision = !!i2363[6]
  i2362._frameRate = i2363[7]
  i2362.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2363[8], i2362.localBounds)
  i2362.hasMuscleCurves = !!i2363[9]
  var i2369 = i2363[10]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( i2369[i + 0] );
  }
  i2362.clipMuscleConstant = i2368
  i2362.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2363[11], i2362.clipBindingConstant)
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2373 = data
  i2372.path = i2373[0]
  i2372.hash = i2373[1]
  i2372.componentType = i2373[2]
  i2372.property = i2373[3]
  i2372.keys = i2373[4]
  var i2375 = i2373[5]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2375[i + 0]) );
  }
  i2372.objectReferenceKeys = i2374
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2379 = data
  i2378.time = i2379[0]
  request.r(i2379[1], i2379[2], 0, i2378, 'value')
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2383 = data
  i2382.functionName = i2383[0]
  i2382.floatParameter = i2383[1]
  i2382.intParameter = i2383[2]
  i2382.stringParameter = i2383[3]
  request.r(i2383[4], i2383[5], 0, i2382, 'objectReferenceParameter')
  i2382.time = i2383[6]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2385 = data
  i2384.center = new pc.Vec3( i2385[0], i2385[1], i2385[2] )
  i2384.extends = new pc.Vec3( i2385[3], i2385[4], i2385[5] )
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2389 = data
  var i2391 = i2389[0]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( i2391[i + 0] );
  }
  i2388.genericBindings = i2390
  var i2393 = i2389[1]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( i2393[i + 0] );
  }
  i2388.pptrCurveMapping = i2392
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2395 = data
  i2394.name = i2395[0]
  i2394.ascent = i2395[1]
  i2394.originalLineHeight = i2395[2]
  i2394.fontSize = i2395[3]
  var i2397 = i2395[4]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2397[i + 0]) );
  }
  i2394.characterInfo = i2396
  request.r(i2395[5], i2395[6], 0, i2394, 'texture')
  i2394.originalFontSize = i2395[7]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2401 = data
  i2400.index = i2401[0]
  i2400.advance = i2401[1]
  i2400.bearing = i2401[2]
  i2400.glyphWidth = i2401[3]
  i2400.glyphHeight = i2401[4]
  i2400.minX = i2401[5]
  i2400.maxX = i2401[6]
  i2400.minY = i2401[7]
  i2400.maxY = i2401[8]
  i2400.uvBottomLeftX = i2401[9]
  i2400.uvBottomLeftY = i2401[10]
  i2400.uvBottomRightX = i2401[11]
  i2400.uvBottomRightY = i2401[12]
  i2400.uvTopLeftX = i2401[13]
  i2400.uvTopLeftY = i2401[14]
  i2400.uvTopRightX = i2401[15]
  i2400.uvTopRightY = i2401[16]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2403 = data
  i2402.name = i2403[0]
  var i2405 = i2403[1]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2405[i + 0]) );
  }
  i2402.layers = i2404
  var i2407 = i2403[2]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2407[i + 0]) );
  }
  i2402.parameters = i2406
  i2402.animationClips = i2403[3]
  i2402.avatarUnsupported = i2403[4]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2411 = data
  i2410.name = i2411[0]
  i2410.defaultWeight = i2411[1]
  i2410.blendingMode = i2411[2]
  i2410.avatarMask = i2411[3]
  i2410.syncedLayerIndex = i2411[4]
  i2410.syncedLayerAffectsTiming = !!i2411[5]
  i2410.syncedLayers = i2411[6]
  i2410.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2411[7], i2410.stateMachine)
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2413 = data
  i2412.id = i2413[0]
  i2412.name = i2413[1]
  i2412.path = i2413[2]
  var i2415 = i2413[3]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2415[i + 0]) );
  }
  i2412.states = i2414
  var i2417 = i2413[4]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2417[i + 0]) );
  }
  i2412.machines = i2416
  var i2419 = i2413[5]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2419[i + 0]) );
  }
  i2412.entryStateTransitions = i2418
  var i2421 = i2413[6]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2421[i + 0]) );
  }
  i2412.exitStateTransitions = i2420
  var i2423 = i2413[7]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2423[i + 0]) );
  }
  i2412.anyStateTransitions = i2422
  i2412.defaultStateId = i2413[8]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2427 = data
  i2426.id = i2427[0]
  i2426.name = i2427[1]
  i2426.cycleOffset = i2427[2]
  i2426.cycleOffsetParameter = i2427[3]
  i2426.cycleOffsetParameterActive = !!i2427[4]
  i2426.mirror = !!i2427[5]
  i2426.mirrorParameter = i2427[6]
  i2426.mirrorParameterActive = !!i2427[7]
  i2426.motionId = i2427[8]
  i2426.nameHash = i2427[9]
  i2426.fullPathHash = i2427[10]
  i2426.speed = i2427[11]
  i2426.speedParameter = i2427[12]
  i2426.speedParameterActive = !!i2427[13]
  i2426.tag = i2427[14]
  i2426.tagHash = i2427[15]
  i2426.writeDefaultValues = !!i2427[16]
  var i2429 = i2427[17]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 2) {
  request.r(i2429[i + 0], i2429[i + 1], 2, i2428, '')
  }
  i2426.behaviours = i2428
  var i2431 = i2427[18]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2431[i + 0]) );
  }
  i2426.transitions = i2430
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2437 = data
  i2436.fullPath = i2437[0]
  i2436.canTransitionToSelf = !!i2437[1]
  i2436.duration = i2437[2]
  i2436.exitTime = i2437[3]
  i2436.hasExitTime = !!i2437[4]
  i2436.hasFixedDuration = !!i2437[5]
  i2436.interruptionSource = i2437[6]
  i2436.offset = i2437[7]
  i2436.orderedInterruption = !!i2437[8]
  i2436.destinationStateId = i2437[9]
  i2436.isExit = !!i2437[10]
  i2436.mute = !!i2437[11]
  i2436.solo = !!i2437[12]
  var i2439 = i2437[13]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2439[i + 0]) );
  }
  i2436.conditions = i2438
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2443 = data
  i2442.mode = i2443[0]
  i2442.parameter = i2443[1]
  i2442.threshold = i2443[2]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2449 = data
  i2448.destinationStateId = i2449[0]
  i2448.isExit = !!i2449[1]
  i2448.mute = !!i2449[2]
  i2448.solo = !!i2449[3]
  var i2451 = i2449[4]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2451[i + 0]) );
  }
  i2448.conditions = i2450
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2455 = data
  i2454.defaultBool = !!i2455[0]
  i2454.defaultFloat = i2455[1]
  i2454.defaultInt = i2455[2]
  i2454.name = i2455[3]
  i2454.nameHash = i2455[4]
  i2454.type = i2455[5]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.bytes64 = i2457[1]
  i2456.data = i2457[2]
  return i2456
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2458 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2459 = data
  var i2461 = i2459[0]
  var i2460 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2461.length; i += 2) {
  request.r(i2461[i + 0], i2461[i + 1], 1, i2460, '')
  }
  i2458.components = i2460
  return i2458
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2465 = data
  i2464.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2465[0], i2464.mode)
  i2464.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2465[1], i2464.neutralHDRRangeReductionMode)
  i2464.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2465[2], i2464.acesPreset)
  i2464.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2465[3], i2464.hueShiftAmount)
  i2464.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2465[4], i2464.detectPaperWhite)
  i2464.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2465[5], i2464.paperWhite)
  i2464.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2465[6], i2464.detectBrightnessLimits)
  i2464.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2465[7], i2464.minNits)
  i2464.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2465[8], i2464.maxNits)
  i2464.active = !!i2465[9]
  return i2464
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2466 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2467 = data
  i2466.m_Value = i2467[0]
  i2466.m_OverrideState = !!i2467[1]
  return i2466
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2469 = data
  i2468.m_Value = i2469[0]
  i2468.m_OverrideState = !!i2469[1]
  return i2468
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2470 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2471 = data
  i2470.m_Value = i2471[0]
  i2470.m_OverrideState = !!i2471[1]
  return i2470
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2473 = data
  i2472.m_Value = i2473[0]
  i2472.m_OverrideState = !!i2473[1]
  return i2472
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2475 = data
  i2474.m_Value = !!i2475[0]
  i2474.m_OverrideState = !!i2475[1]
  return i2474
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2477 = data
  i2476.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2477[0], i2476.skipIterations)
  i2476.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2477[1], i2476.threshold)
  i2476.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2477[2], i2476.intensity)
  i2476.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2477[3], i2476.scatter)
  i2476.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2477[4], i2476.clamp)
  i2476.tint = request.d('UnityEngine.Rendering.ColorParameter', i2477[5], i2476.tint)
  i2476.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2477[6], i2476.highQualityFiltering)
  i2476.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2477[7], i2476.downscale)
  i2476.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2477[8], i2476.maxIterations)
  i2476.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2477[9], i2476.dirtTexture)
  i2476.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2477[10], i2476.dirtIntensity)
  i2476.active = !!i2477[11]
  return i2476
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2479 = data
  i2478.m_Value = i2479[0]
  i2478.m_OverrideState = !!i2479[1]
  return i2478
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2481 = data
  i2480.m_Value = i2481[0]
  i2480.m_OverrideState = !!i2481[1]
  return i2480
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2483 = data
  i2482.m_Value = new pc.Color(i2483[0], i2483[1], i2483[2], i2483[3])
  i2482.m_OverrideState = !!i2483[4]
  return i2482
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2485 = data
  i2484.m_Value = i2485[0]
  i2484.m_OverrideState = !!i2485[1]
  return i2484
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2487 = data
  i2486.dimension = i2487[0]
  request.r(i2487[1], i2487[2], 0, i2486, 'm_Value')
  i2486.m_OverrideState = !!i2487[3]
  return i2486
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i2489 = data
  i2488.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i2489[0], i2488.mode)
  i2488.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i2489[1], i2488.quality)
  i2488.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2489[2], i2488.intensity)
  i2488.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2489[3], i2488.clamp)
  i2488.active = !!i2489[4]
  return i2488
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i2491 = data
  i2490.m_Value = i2491[0]
  i2490.m_OverrideState = !!i2491[1]
  return i2490
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i2493 = data
  i2492.m_Value = i2493[0]
  i2492.m_OverrideState = !!i2493[1]
  return i2492
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2495 = data
  i2494.color = request.d('UnityEngine.Rendering.ColorParameter', i2495[0], i2494.color)
  i2494.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2495[1], i2494.center)
  i2494.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2495[2], i2494.intensity)
  i2494.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2495[3], i2494.smoothness)
  i2494.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2495[4], i2494.rounded)
  i2494.active = !!i2495[5]
  return i2494
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2497 = data
  i2496.m_Value = new pc.Vec2( i2497[0], i2497[1] )
  i2496.m_OverrideState = !!i2497[2]
  return i2496
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2498 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2499 = data
  i2498.normalStyle = i2499[0]
  i2498.normalSpacingOffset = i2499[1]
  i2498.boldStyle = i2499[2]
  i2498.boldSpacing = i2499[3]
  i2498.italicStyle = i2499[4]
  i2498.tabSize = i2499[5]
  request.r(i2499[6], i2499[7], 0, i2498, 'atlas')
  i2498.m_SourceFontFileGUID = i2499[8]
  i2498.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2499[9], i2498.m_CreationSettings)
  request.r(i2499[10], i2499[11], 0, i2498, 'm_SourceFontFile')
  i2498.m_SourceFontFilePath = i2499[12]
  i2498.m_AtlasPopulationMode = i2499[13]
  i2498.InternalDynamicOS = !!i2499[14]
  var i2501 = i2499[15]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.add(request.d('UnityEngine.TextCore.Glyph', i2501[i + 0]));
  }
  i2498.m_GlyphTable = i2500
  var i2503 = i2499[16]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.add(request.d('TMPro.TMP_Character', i2503[i + 0]));
  }
  i2498.m_CharacterTable = i2502
  var i2505 = i2499[17]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 2) {
  request.r(i2505[i + 0], i2505[i + 1], 2, i2504, '')
  }
  i2498.m_AtlasTextures = i2504
  i2498.m_AtlasTextureIndex = i2499[18]
  i2498.m_IsMultiAtlasTexturesEnabled = !!i2499[19]
  i2498.m_GetFontFeatures = !!i2499[20]
  i2498.m_ClearDynamicDataOnBuild = !!i2499[21]
  i2498.m_AtlasWidth = i2499[22]
  i2498.m_AtlasHeight = i2499[23]
  i2498.m_AtlasPadding = i2499[24]
  i2498.m_AtlasRenderMode = i2499[25]
  var i2507 = i2499[26]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.add(request.d('UnityEngine.TextCore.GlyphRect', i2507[i + 0]));
  }
  i2498.m_UsedGlyphRects = i2506
  var i2509 = i2499[27]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.add(request.d('UnityEngine.TextCore.GlyphRect', i2509[i + 0]));
  }
  i2498.m_FreeGlyphRects = i2508
  i2498.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2499[28], i2498.m_FontFeatureTable)
  i2498.m_ShouldReimportFontFeatures = !!i2499[29]
  var i2511 = i2499[30]
  var i2510 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2511.length; i += 2) {
  request.r(i2511[i + 0], i2511[i + 1], 1, i2510, '')
  }
  i2498.m_FallbackFontAssetTable = i2510
  var i2513 = i2499[31]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('TMPro.TMP_FontWeightPair', i2513[i + 0]) );
  }
  i2498.m_FontWeightTable = i2512
  var i2515 = i2499[32]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('TMPro.TMP_FontWeightPair', i2515[i + 0]) );
  }
  i2498.fontWeights = i2514
  i2498.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2499[33], i2498.m_fontInfo)
  var i2517 = i2499[34]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.add(request.d('TMPro.TMP_Glyph', i2517[i + 0]));
  }
  i2498.m_glyphInfoList = i2516
  i2498.m_KerningTable = request.d('TMPro.KerningTable', i2499[35], i2498.m_KerningTable)
  var i2519 = i2499[36]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 1, i2518, '')
  }
  i2498.fallbackFontAssets = i2518
  i2498.m_Version = i2499[37]
  i2498.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2499[38], i2498.m_FaceInfo)
  request.r(i2499[39], i2499[40], 0, i2498, 'm_Material')
  return i2498
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2521 = data
  i2520.sourceFontFileName = i2521[0]
  i2520.sourceFontFileGUID = i2521[1]
  i2520.faceIndex = i2521[2]
  i2520.pointSizeSamplingMode = i2521[3]
  i2520.pointSize = i2521[4]
  i2520.padding = i2521[5]
  i2520.paddingMode = i2521[6]
  i2520.packingMode = i2521[7]
  i2520.atlasWidth = i2521[8]
  i2520.atlasHeight = i2521[9]
  i2520.characterSetSelectionMode = i2521[10]
  i2520.characterSequence = i2521[11]
  i2520.referencedFontAssetGUID = i2521[12]
  i2520.referencedTextAssetGUID = i2521[13]
  i2520.fontStyle = i2521[14]
  i2520.fontStyleModifier = i2521[15]
  i2520.renderMode = i2521[16]
  i2520.includeFontFeatures = !!i2521[17]
  return i2520
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2524 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2525 = data
  i2524.m_Index = i2525[0]
  i2524.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2525[1], i2524.m_Metrics)
  i2524.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2525[2], i2524.m_GlyphRect)
  i2524.m_Scale = i2525[3]
  i2524.m_AtlasIndex = i2525[4]
  i2524.m_ClassDefinitionType = i2525[5]
  return i2524
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2526 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2527 = data
  i2526.m_Width = i2527[0]
  i2526.m_Height = i2527[1]
  i2526.m_HorizontalBearingX = i2527[2]
  i2526.m_HorizontalBearingY = i2527[3]
  i2526.m_HorizontalAdvance = i2527[4]
  return i2526
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2528 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2529 = data
  i2528.m_X = i2529[0]
  i2528.m_Y = i2529[1]
  i2528.m_Width = i2529[2]
  i2528.m_Height = i2529[3]
  return i2528
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2532 = root || request.c( 'TMPro.TMP_Character' )
  var i2533 = data
  i2532.m_ElementType = i2533[0]
  i2532.m_Unicode = i2533[1]
  i2532.m_GlyphIndex = i2533[2]
  i2532.m_Scale = i2533[3]
  return i2532
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2539 = data
  var i2541 = i2539[0]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.add(request.d('TMPro.MultipleSubstitutionRecord', i2541[i + 0]));
  }
  i2538.m_MultipleSubstitutionRecords = i2540
  var i2543 = i2539[1]
  var i2542 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.add(request.d('TMPro.LigatureSubstitutionRecord', i2543[i + 0]));
  }
  i2538.m_LigatureSubstitutionRecords = i2542
  var i2545 = i2539[2]
  var i2544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2545[i + 0]));
  }
  i2538.m_GlyphPairAdjustmentRecords = i2544
  var i2547 = i2539[3]
  var i2546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2547[i + 0]));
  }
  i2538.m_MarkToBaseAdjustmentRecords = i2546
  var i2549 = i2539[4]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2549[i + 0]));
  }
  i2538.m_MarkToMarkAdjustmentRecords = i2548
  return i2538
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2552 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2553 = data
  i2552.m_TargetGlyphID = i2553[0]
  i2552.m_SubstituteGlyphIDs = i2553[1]
  return i2552
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2557 = data
  i2556.m_ComponentGlyphIDs = i2557[0]
  i2556.m_LigatureGlyphID = i2557[1]
  return i2556
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2560 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2561 = data
  i2560.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2561[0], i2560.m_FirstAdjustmentRecord)
  i2560.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2561[1], i2560.m_SecondAdjustmentRecord)
  i2560.m_FeatureLookupFlags = i2561[2]
  return i2560
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2563 = data
  i2562.m_GlyphIndex = i2563[0]
  i2562.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2563[1], i2562.m_GlyphValueRecord)
  return i2562
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2565 = data
  i2564.m_XPlacement = i2565[0]
  i2564.m_YPlacement = i2565[1]
  i2564.m_XAdvance = i2565[2]
  i2564.m_YAdvance = i2565[3]
  return i2564
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2568 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2569 = data
  i2568.m_BaseGlyphID = i2569[0]
  i2568.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2569[1], i2568.m_BaseGlyphAnchorPoint)
  i2568.m_MarkGlyphID = i2569[2]
  i2568.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2569[3], i2568.m_MarkPositionAdjustment)
  return i2568
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2572 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2573 = data
  i2572.m_BaseMarkGlyphID = i2573[0]
  i2572.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2573[1], i2572.m_BaseMarkGlyphAnchorPoint)
  i2572.m_CombiningMarkGlyphID = i2573[2]
  i2572.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2573[3], i2572.m_CombiningMarkPositionAdjustment)
  return i2572
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'regularTypeface')
  request.r(i2579[2], i2579[3], 0, i2578, 'italicTypeface')
  return i2578
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2581 = data
  i2580.Name = i2581[0]
  i2580.PointSize = i2581[1]
  i2580.Scale = i2581[2]
  i2580.CharacterCount = i2581[3]
  i2580.LineHeight = i2581[4]
  i2580.Baseline = i2581[5]
  i2580.Ascender = i2581[6]
  i2580.CapHeight = i2581[7]
  i2580.Descender = i2581[8]
  i2580.CenterLine = i2581[9]
  i2580.SuperscriptOffset = i2581[10]
  i2580.SubscriptOffset = i2581[11]
  i2580.SubSize = i2581[12]
  i2580.Underline = i2581[13]
  i2580.UnderlineThickness = i2581[14]
  i2580.strikethrough = i2581[15]
  i2580.strikethroughThickness = i2581[16]
  i2580.TabWidth = i2581[17]
  i2580.Padding = i2581[18]
  i2580.AtlasWidth = i2581[19]
  i2580.AtlasHeight = i2581[20]
  return i2580
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2584 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2585 = data
  i2584.id = i2585[0]
  i2584.x = i2585[1]
  i2584.y = i2585[2]
  i2584.width = i2585[3]
  i2584.height = i2585[4]
  i2584.xOffset = i2585[5]
  i2584.yOffset = i2585[6]
  i2584.xAdvance = i2585[7]
  i2584.scale = i2585[8]
  return i2584
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2586 = root || request.c( 'TMPro.KerningTable' )
  var i2587 = data
  var i2589 = i2587[0]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('TMPro.KerningPair', i2589[i + 0]));
  }
  i2586.kerningPairs = i2588
  return i2586
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.KerningPair' )
  var i2593 = data
  i2592.xOffset = i2593[0]
  i2592.m_FirstGlyph = i2593[1]
  i2592.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2593[2], i2592.m_FirstGlyphAdjustments)
  i2592.m_SecondGlyph = i2593[3]
  i2592.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2593[4], i2592.m_SecondGlyphAdjustments)
  i2592.m_IgnoreSpacingAdjustments = !!i2593[5]
  return i2592
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2595 = data
  i2594.m_FaceIndex = i2595[0]
  i2594.m_FamilyName = i2595[1]
  i2594.m_StyleName = i2595[2]
  i2594.m_PointSize = i2595[3]
  i2594.m_Scale = i2595[4]
  i2594.m_UnitsPerEM = i2595[5]
  i2594.m_LineHeight = i2595[6]
  i2594.m_AscentLine = i2595[7]
  i2594.m_CapLine = i2595[8]
  i2594.m_MeanLine = i2595[9]
  i2594.m_Baseline = i2595[10]
  i2594.m_DescentLine = i2595[11]
  i2594.m_SuperscriptOffset = i2595[12]
  i2594.m_SuperscriptSize = i2595[13]
  i2594.m_SubscriptOffset = i2595[14]
  i2594.m_SubscriptSize = i2595[15]
  i2594.m_UnderlineOffset = i2595[16]
  i2594.m_UnderlineThickness = i2595[17]
  i2594.m_StrikethroughOffset = i2595[18]
  i2594.m_StrikethroughThickness = i2595[19]
  i2594.m_TabWidth = i2595[20]
  return i2594
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i2597 = data
  var i2599 = i2597[0]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('UnityEngine.InputSystem.InputActionMap', i2599[i + 0]) );
  }
  i2596.m_ActionMaps = i2598
  var i2601 = i2597[1]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('UnityEngine.InputSystem.InputControlScheme', i2601[i + 0]) );
  }
  i2596.m_ControlSchemes = i2600
  i2596.m_IsProjectWide = !!i2597[2]
  return i2596
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i2605 = data
  i2604.m_Name = i2605[0]
  i2604.m_Id = i2605[1]
  request.r(i2605[2], i2605[3], 0, i2604, 'm_Asset')
  var i2607 = i2605[4]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( request.d('UnityEngine.InputSystem.InputAction', i2607[i + 0]) );
  }
  i2604.m_Actions = i2606
  var i2609 = i2605[5]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('UnityEngine.InputSystem.InputBinding', i2609[i + 0]) );
  }
  i2604.m_Bindings = i2608
  return i2604
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i2613 = data
  i2612.m_Name = i2613[0]
  i2612.m_Type = i2613[1]
  i2612.m_ExpectedControlType = i2613[2]
  i2612.m_Id = i2613[3]
  i2612.m_Processors = i2613[4]
  i2612.m_Interactions = i2613[5]
  var i2615 = i2613[6]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('UnityEngine.InputSystem.InputBinding', i2615[i + 0]) );
  }
  i2612.m_SingletonActionBindings = i2614
  i2612.m_Flags = i2613[7]
  return i2612
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i2619 = data
  i2618.m_Name = i2619[0]
  i2618.m_Id = i2619[1]
  i2618.m_Path = i2619[2]
  i2618.m_Interactions = i2619[3]
  i2618.m_Processors = i2619[4]
  i2618.m_Groups = i2619[5]
  i2618.m_Action = i2619[6]
  i2618.m_Flags = i2619[7]
  return i2618
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i2623 = data
  i2622.m_Name = i2623[0]
  i2622.m_BindingGroup = i2623[1]
  var i2625 = i2623[2]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i2625[i + 0]) );
  }
  i2622.m_DeviceRequirements = i2624
  return i2622
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i2629 = data
  i2628.m_ControlPath = i2629[0]
  i2628.m_Flags = i2629[1]
  return i2628
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'm_Asset')
  i2630.m_ActionId = i2631[2]
  return i2630
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2632 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2633 = data
  i2632.useSafeMode = !!i2633[0]
  i2632.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2633[1], i2632.safeModeOptions)
  i2632.timeScale = i2633[2]
  i2632.unscaledTimeScale = i2633[3]
  i2632.useSmoothDeltaTime = !!i2633[4]
  i2632.maxSmoothUnscaledTime = i2633[5]
  i2632.rewindCallbackMode = i2633[6]
  i2632.showUnityEditorReport = !!i2633[7]
  i2632.logBehaviour = i2633[8]
  i2632.drawGizmos = !!i2633[9]
  i2632.defaultRecyclable = !!i2633[10]
  i2632.defaultAutoPlay = i2633[11]
  i2632.defaultUpdateType = i2633[12]
  i2632.defaultTimeScaleIndependent = !!i2633[13]
  i2632.defaultEaseType = i2633[14]
  i2632.defaultEaseOvershootOrAmplitude = i2633[15]
  i2632.defaultEasePeriod = i2633[16]
  i2632.defaultAutoKill = !!i2633[17]
  i2632.defaultLoopType = i2633[18]
  i2632.debugMode = !!i2633[19]
  i2632.debugStoreTargetId = !!i2633[20]
  i2632.showPreviewPanel = !!i2633[21]
  i2632.storeSettingsLocation = i2633[22]
  i2632.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2633[23], i2632.modules)
  i2632.createASMDEF = !!i2633[24]
  i2632.showPlayingTweens = !!i2633[25]
  i2632.showPausedTweens = !!i2633[26]
  return i2632
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2634 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2635 = data
  i2634.logBehaviour = i2635[0]
  i2634.nestedTweenFailureBehaviour = i2635[1]
  return i2634
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2636 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2637 = data
  i2636.showPanel = !!i2637[0]
  i2636.audioEnabled = !!i2637[1]
  i2636.physicsEnabled = !!i2637[2]
  i2636.physics2DEnabled = !!i2637[3]
  i2636.spriteEnabled = !!i2637[4]
  i2636.uiEnabled = !!i2637[5]
  i2636.uiToolkitEnabled = !!i2637[6]
  i2636.textMeshProEnabled = !!i2637[7]
  i2636.tk2DEnabled = !!i2637[8]
  i2636.deAudioEnabled = !!i2637[9]
  i2636.deAudioV2Enabled = !!i2637[10]
  i2636.deUnityExtendedEnabled = !!i2637[11]
  i2636.epoOutlineEnabled = !!i2637[12]
  return i2636
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.TMP_Settings' )
  var i2639 = data
  i2638.assetVersion = i2639[0]
  i2638.m_TextWrappingMode = i2639[1]
  i2638.m_enableKerning = !!i2639[2]
  var i2641 = i2639[3]
  var i2640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.add(i2641[i + 0]);
  }
  i2638.m_ActiveFontFeatures = i2640
  i2638.m_enableExtraPadding = !!i2639[4]
  i2638.m_enableTintAllSprites = !!i2639[5]
  i2638.m_enableParseEscapeCharacters = !!i2639[6]
  i2638.m_EnableRaycastTarget = !!i2639[7]
  i2638.m_GetFontFeaturesAtRuntime = !!i2639[8]
  i2638.m_missingGlyphCharacter = i2639[9]
  i2638.m_ClearDynamicDataOnBuild = !!i2639[10]
  i2638.m_warningsDisabled = !!i2639[11]
  request.r(i2639[12], i2639[13], 0, i2638, 'm_defaultFontAsset')
  i2638.m_defaultFontAssetPath = i2639[14]
  i2638.m_defaultFontSize = i2639[15]
  i2638.m_defaultAutoSizeMinRatio = i2639[16]
  i2638.m_defaultAutoSizeMaxRatio = i2639[17]
  i2638.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2639[18], i2639[19] )
  i2638.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2639[20], i2639[21] )
  i2638.m_autoSizeTextContainer = !!i2639[22]
  i2638.m_IsTextObjectScaleStatic = !!i2639[23]
  var i2643 = i2639[24]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 1, i2642, '')
  }
  i2638.m_fallbackFontAssets = i2642
  i2638.m_matchMaterialPreset = !!i2639[25]
  i2638.m_HideSubTextObjects = !!i2639[26]
  request.r(i2639[27], i2639[28], 0, i2638, 'm_defaultSpriteAsset')
  i2638.m_defaultSpriteAssetPath = i2639[29]
  i2638.m_enableEmojiSupport = !!i2639[30]
  i2638.m_MissingCharacterSpriteUnicode = i2639[31]
  var i2645 = i2639[32]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 1, i2644, '')
  }
  i2638.m_EmojiFallbackTextAssets = i2644
  i2638.m_defaultColorGradientPresetsPath = i2639[33]
  request.r(i2639[34], i2639[35], 0, i2638, 'm_defaultStyleSheet')
  i2638.m_StyleSheetsResourcePath = i2639[36]
  request.r(i2639[37], i2639[38], 0, i2638, 'm_leadingCharacters')
  request.r(i2639[39], i2639[40], 0, i2638, 'm_followingCharacters')
  i2638.m_UseModernHangulLineBreakingRules = !!i2639[41]
  return i2638
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2648 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'spriteSheet')
  var i2651 = i2649[2]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.add(request.d('TMPro.TMP_Sprite', i2651[i + 0]));
  }
  i2648.spriteInfoList = i2650
  var i2653 = i2649[3]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 1, i2652, '')
  }
  i2648.fallbackSpriteAssets = i2652
  var i2655 = i2649[4]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(request.d('TMPro.TMP_SpriteCharacter', i2655[i + 0]));
  }
  i2648.m_SpriteCharacterTable = i2654
  var i2657 = i2649[5]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.add(request.d('TMPro.TMP_SpriteGlyph', i2657[i + 0]));
  }
  i2648.m_GlyphTable = i2656
  i2648.m_Version = i2649[6]
  i2648.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2649[7], i2648.m_FaceInfo)
  request.r(i2649[8], i2649[9], 0, i2648, 'm_Material')
  return i2648
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2661 = data
  i2660.name = i2661[0]
  i2660.hashCode = i2661[1]
  i2660.unicode = i2661[2]
  i2660.pivot = new pc.Vec2( i2661[3], i2661[4] )
  request.r(i2661[5], i2661[6], 0, i2660, 'sprite')
  i2660.id = i2661[7]
  i2660.x = i2661[8]
  i2660.y = i2661[9]
  i2660.width = i2661[10]
  i2660.height = i2661[11]
  i2660.xOffset = i2661[12]
  i2660.yOffset = i2661[13]
  i2660.xAdvance = i2661[14]
  i2660.scale = i2661[15]
  return i2660
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2667 = data
  i2666.m_Name = i2667[0]
  i2666.m_ElementType = i2667[1]
  i2666.m_Unicode = i2667[2]
  i2666.m_GlyphIndex = i2667[3]
  i2666.m_Scale = i2667[4]
  return i2666
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2670 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'sprite')
  i2670.m_Index = i2671[2]
  i2670.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2671[3], i2670.m_Metrics)
  i2670.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2671[4], i2670.m_GlyphRect)
  i2670.m_Scale = i2671[5]
  i2670.m_AtlasIndex = i2671[6]
  i2670.m_ClassDefinitionType = i2671[7]
  return i2670
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2672 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2673 = data
  var i2675 = i2673[0]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.TMP_Style', i2675[i + 0]));
  }
  i2672.m_StyleList = i2674
  return i2672
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.TMP_Style' )
  var i2679 = data
  i2678.m_Name = i2679[0]
  i2678.m_HashCode = i2679[1]
  i2678.m_OpeningDefinition = i2679[2]
  i2678.m_ClosingDefinition = i2679[3]
  i2678.m_OpeningTagArray = i2679[4]
  i2678.m_ClosingTagArray = i2679[5]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2681 = data
  var i2683 = i2681[0]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2683[i + 0]) );
  }
  i2680.files = i2682
  i2680.componentToPrefabIds = i2681[1]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2687 = data
  i2686.path = i2687[0]
  request.r(i2687[1], i2687[2], 0, i2686, 'unityObject')
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2691[i + 0]) );
  }
  i2688.scriptsExecutionOrder = i2690
  var i2693 = i2689[1]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2693[i + 0]) );
  }
  i2688.sortingLayers = i2692
  var i2695 = i2689[2]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2695[i + 0]) );
  }
  i2688.cullingLayers = i2694
  i2688.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2689[3], i2688.timeSettings)
  i2688.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2689[4], i2688.physicsSettings)
  i2688.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2689[5], i2688.physics2DSettings)
  i2688.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2689[6], i2688.qualitySettings)
  i2688.enableRealtimeShadows = !!i2689[7]
  i2688.enableAutoInstancing = !!i2689[8]
  i2688.enableStaticBatching = !!i2689[9]
  i2688.enableDynamicBatching = !!i2689[10]
  i2688.usePreservativeDynamicBatching = !!i2689[11]
  i2688.lightmapEncodingQuality = i2689[12]
  i2688.desiredColorSpace = i2689[13]
  var i2697 = i2689[14]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( i2697[i + 0] );
  }
  i2688.allTags = i2696
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2701 = data
  i2700.name = i2701[0]
  i2700.value = i2701[1]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2705 = data
  i2704.id = i2705[0]
  i2704.name = i2705[1]
  i2704.value = i2705[2]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2709 = data
  i2708.id = i2709[0]
  i2708.name = i2709[1]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2711 = data
  i2710.fixedDeltaTime = i2711[0]
  i2710.maximumDeltaTime = i2711[1]
  i2710.timeScale = i2711[2]
  i2710.maximumParticleTimestep = i2711[3]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2713 = data
  i2712.gravity = new pc.Vec3( i2713[0], i2713[1], i2713[2] )
  i2712.defaultSolverIterations = i2713[3]
  i2712.bounceThreshold = i2713[4]
  i2712.autoSyncTransforms = !!i2713[5]
  i2712.autoSimulation = !!i2713[6]
  var i2715 = i2713[7]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2715[i + 0]) );
  }
  i2712.collisionMatrix = i2714
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2719 = data
  i2718.enabled = !!i2719[0]
  i2718.layerId = i2719[1]
  i2718.otherLayerId = i2719[2]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2721 = data
  request.r(i2721[0], i2721[1], 0, i2720, 'material')
  i2720.gravity = new pc.Vec2( i2721[2], i2721[3] )
  i2720.positionIterations = i2721[4]
  i2720.velocityIterations = i2721[5]
  i2720.velocityThreshold = i2721[6]
  i2720.maxLinearCorrection = i2721[7]
  i2720.maxAngularCorrection = i2721[8]
  i2720.maxTranslationSpeed = i2721[9]
  i2720.maxRotationSpeed = i2721[10]
  i2720.baumgarteScale = i2721[11]
  i2720.baumgarteTOIScale = i2721[12]
  i2720.timeToSleep = i2721[13]
  i2720.linearSleepTolerance = i2721[14]
  i2720.angularSleepTolerance = i2721[15]
  i2720.defaultContactOffset = i2721[16]
  i2720.autoSimulation = !!i2721[17]
  i2720.queriesHitTriggers = !!i2721[18]
  i2720.queriesStartInColliders = !!i2721[19]
  i2720.callbacksOnDisable = !!i2721[20]
  i2720.reuseCollisionCallbacks = !!i2721[21]
  i2720.autoSyncTransforms = !!i2721[22]
  var i2723 = i2721[23]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2723[i + 0]) );
  }
  i2720.collisionMatrix = i2722
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2727 = data
  i2726.enabled = !!i2727[0]
  i2726.layerId = i2727[1]
  i2726.otherLayerId = i2727[2]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2729 = data
  var i2731 = i2729[0]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2731[i + 0]) );
  }
  i2728.qualityLevels = i2730
  var i2733 = i2729[1]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( i2733[i + 0] );
  }
  i2728.names = i2732
  i2728.shadows = i2729[2]
  i2728.anisotropicFiltering = i2729[3]
  i2728.antiAliasing = i2729[4]
  i2728.lodBias = i2729[5]
  i2728.shadowCascades = i2729[6]
  i2728.shadowDistance = i2729[7]
  i2728.shadowmaskMode = i2729[8]
  i2728.shadowProjection = i2729[9]
  i2728.shadowResolution = i2729[10]
  i2728.softParticles = !!i2729[11]
  i2728.softVegetation = !!i2729[12]
  i2728.activeColorSpace = i2729[13]
  i2728.desiredColorSpace = i2729[14]
  i2728.masterTextureLimit = i2729[15]
  i2728.maxQueuedFrames = i2729[16]
  i2728.particleRaycastBudget = i2729[17]
  i2728.pixelLightCount = i2729[18]
  i2728.realtimeReflectionProbes = !!i2729[19]
  i2728.shadowCascade2Split = i2729[20]
  i2728.shadowCascade4Split = new pc.Vec3( i2729[21], i2729[22], i2729[23] )
  i2728.streamingMipmapsActive = !!i2729[24]
  i2728.vSyncCount = i2729[25]
  i2728.asyncUploadBufferSize = i2729[26]
  i2728.asyncUploadTimeSlice = i2729[27]
  i2728.billboardsFaceCameraPosition = !!i2729[28]
  i2728.shadowNearPlaneOffset = i2729[29]
  i2728.streamingMipmapsMemoryBudget = i2729[30]
  i2728.maximumLODLevel = i2729[31]
  i2728.streamingMipmapsAddAllCameras = !!i2729[32]
  i2728.streamingMipmapsMaxLevelReduction = i2729[33]
  i2728.streamingMipmapsRenderersPerFrame = i2729[34]
  i2728.resolutionScalingFixedDPIFactor = i2729[35]
  i2728.streamingMipmapsMaxFileIORequests = i2729[36]
  i2728.currentQualityLevel = i2729[37]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2739 = data
  i2738.weight = i2739[0]
  i2738.vertices = i2739[1]
  i2738.normals = i2739[2]
  i2738.tangents = i2739[3]
  return i2738
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2740 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2741 = data
  request.r(i2741[0], i2741[1], 0, i2740, 'm_ObjectArgument')
  i2740.m_ObjectArgumentAssemblyTypeName = i2741[2]
  i2740.m_IntArgument = i2741[3]
  i2740.m_FloatArgument = i2741[4]
  i2740.m_StringArgument = i2741[5]
  i2740.m_BoolArgument = !!i2741[6]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i2743 = data
  i2742.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2743[0], i2742.Event)
  i2742.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i2743[1], i2742.filterSettings)
  i2742.overrideMaterialId = i2743[2]
  i2742.overrideMaterialPassIndex = i2743[3]
  i2742.overrideShaderId = i2743[4]
  i2742.overrideShaderPassIndex = i2743[5]
  i2742.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2743[6], i2742.overrideMode)
  i2742.overrideDepthState = !!i2743[7]
  i2742.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2743[8], i2742.depthCompareFunction)
  i2742.enableWrite = !!i2743[9]
  i2742.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i2743[10], i2742.stencilSettings)
  i2742.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i2743[11], i2742.cameraSettings)
  return i2742
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2745 = data
  i2744.m_XCoordinate = i2745[0]
  i2744.m_YCoordinate = i2745[1]
  return i2744
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2747 = data
  i2746.m_XPositionAdjustment = i2747[0]
  i2746.m_YPositionAdjustment = i2747[1]
  return i2746
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2749 = data
  i2748.xPlacement = i2749[0]
  i2748.yPlacement = i2749[1]
  i2748.xAdvance = i2749[2]
  i2748.yAdvance = i2749[3]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i2751 = data
  i2750.Value = i2751[0]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i2753 = data
  i2752.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2753[0], i2752.RenderQueueType)
  i2752.LayerMask = i2753[1]
  var i2755 = i2753[2]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( i2755[i + 0] );
  }
  i2752.PassNames = i2754
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i2757 = data
  i2756.overrideStencilState = !!i2757[0]
  i2756.stencilReference = i2757[1]
  i2756.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2757[2], i2756.stencilCompareFunctionValue)
  i2756.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2757[3], i2756.passOperationValue)
  i2756.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2757[4], i2756.failOperationValue)
  i2756.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2757[5], i2756.zFailOperationValue)
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i2759 = data
  i2758.overrideCamera = !!i2759[0]
  i2758.restoreCamera = !!i2759[1]
  i2758.offset = new pc.Vec4( i2759[2], i2759[3], i2759[4], i2759[5] )
  i2758.cameraFieldOfView = i2759[6]
  return i2758
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

Deserializers.buildID = "b56e104b-ef04-4247-ad9f-a955fac134f7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

