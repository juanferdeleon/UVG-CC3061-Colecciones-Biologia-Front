﻿///////////////////////////////////////////////////////////////////////////////
//
// This file was automatically generated by RANOREX.
// DO NOT MODIFY THIS FILE! It is regenerated by the designer.
// All your modifications will be lost!
// http://www.ranorex.com
//
///////////////////////////////////////////////////////////////////////////////

using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Drawing;
using System.Threading;
using WinForms = System.Windows.Forms;

using Ranorex;
using Ranorex.Core;
using Ranorex.Core.Testing;
using Ranorex.Core.Repository;

namespace Colecciones_Biologia
{
#pragma warning disable 0436 //(CS0436) The type 'type' in 'assembly' conflicts with the imported type 'type2' in 'assembly'. Using the type defined in 'assembly'.
    /// <summary>
    ///The navBarUtility recording.
    /// </summary>
    [TestModule("eec0fc39-f47a-48df-8bf5-7acccbd057fb", ModuleType.Recording, 1)]
    public partial class navBarUtility : ITestModule
    {
        /// <summary>
        /// Holds an instance of the Colecciones_BiologiaRepository repository.
        /// </summary>
        public static Colecciones_BiologiaRepository repo = Colecciones_BiologiaRepository.Instance;

        static navBarUtility instance = new navBarUtility();

        /// <summary>
        /// Constructs a new instance.
        /// </summary>
        public navBarUtility()
        {
        }

        /// <summary>
        /// Gets a static instance of this recording.
        /// </summary>
        public static navBarUtility Instance
        {
            get { return instance; }
        }

#region Variables

#endregion

        /// <summary>
        /// Starts the replay of the static recording <see cref="Instance"/>.
        /// </summary>
        [System.CodeDom.Compiler.GeneratedCode("Ranorex", global::Ranorex.Core.Constants.CodeGenVersion)]
        public static void Start()
        {
            TestModuleRunner.Run(Instance);
        }

        /// <summary>
        /// Performs the playback of actions in this recording.
        /// </summary>
        /// <remarks>You should not call this method directly, instead pass the module
        /// instance to the <see cref="TestModuleRunner.Run(ITestModule)"/> method
        /// that will in turn invoke this method.</remarks>
        [System.CodeDom.Compiler.GeneratedCode("Ranorex", global::Ranorex.Core.Constants.CodeGenVersion)]
        void ITestModule.Run()
        {
            Mouse.DefaultMoveTime = 300;
            Keyboard.DefaultKeyPressTime = 20;
            Delay.SpeedFactor = 1.00;

            Init();

            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.Home' at 42;8.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.HomeInfo, new RecordItemIndex(0));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.Home.Click("42;8");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Validation", "Validating AttributeEqual (Text='http://localhost:3000/about-us') on item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotros'.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotrosInfo, new RecordItemIndex(1));
            Validate.AttributeEqual(repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotrosInfo, "Text", "http://localhost:3000/about-us");
            Delay.Milliseconds(100);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotros' at 77;20.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotrosInfo, new RecordItemIndex(2));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotros.Click("77;20");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1' at 1386;45.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1Info, new RecordItemIndex(3));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1.Click("1386;45");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Validation", "Validating AttributeEqual (Visible='True') on item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1'.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1Info, new RecordItemIndex(4));
            Validate.AttributeEqual(repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1Info, "Visible", "True");
            Delay.Milliseconds(100);
            
            Report.Log(ReportLevel.Info, "Validation", "Validating AttributeEqual (AccessibleState='None') on item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1'.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1Info, new RecordItemIndex(5));
            Validate.AttributeEqual(repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None1Info, "AccessibleState", "None");
            Delay.Milliseconds(100);
            
        }

#region Image Feature Data
#endregion
    }
#pragma warning restore 0436
}
