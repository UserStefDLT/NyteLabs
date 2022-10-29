
var CriticalTime = [
    {Campaign: 1, Episode: 1, StartsAt: "17:53", BreakStart: "1:32:21", BreakEnds: "1:43:50", Ends: "3:02:49", TotalTime: "3:03:34"},
    {Campaign: 1, Episode: 2, StartsAt: "13:28", BreakStart: "1:29:15", BreakEnds: "1:43:31", Ends: "2:58:20", TotalTime: "3:00:11"},
    {Campaign: 1, Episode: 3, StartsAt: "0:10", BreakStart: "1:15:24", BreakEnds: "1:27:21", Ends: "2:33:44", TotalTime: "2:36:16"},
    {Campaign: 1, Episode: 51, StartsAt: "4:47", BreakStart: "0:00:00", BreakEnds: "0:00:00", Ends: "2:54:25", TotalTime: "2:54:25"},
    {Campaign: 1, Episode: 52, StartsAt: "11:30", BreakStart: "0:00:00", BreakEnds: "0:00:00", Ends: "3:15:07", TotalTime: "3:19:27"},

    {Campaign: 2, Episode: 1, StartsAt: "16:37", BreakStart: "1:32:11", BreakEnds: "1:49:06", Ends: "3:17:25", TotalTime: "3:24:31"},
    {Campaign: 2, Episode: 2, StartsAt: "8:25", BreakStart: "2:06:13", BreakEnds: "2:20:40", Ends: "4:12:06", TotalTime: "4:22:08"},
    {Campaign: 2, Episode: 3, StartsAt: "7:01", BreakStart: "2:13:04", BreakEnds: "2:27:45", Ends: "3:49:08", TotalTime: "3:59:27"},
    {Campaign: 2, Episode: 93, StartsAt: "10:15", BreakStart: "2:10:00", BreakEnds: "2:34:40", Ends: "3:53:15", TotalTime: "3:53:30"},
    
    {Campaign: 3, Episode: 1, StartsAt: "13:08", BreakStart: "2:31:55", BreakEnds: "2:40:52", Ends: "3:58:08", TotalTime: "3:58:24"},
    {Campaign: 3, Episode: 2, StartsAt: "13:23", BreakStart: "2:06:32", BreakEnds: "2:16:33", Ends: "4:07:24", TotalTime: "4:07:39"},
    {Campaign: 3, Episode: 3, StartsAt: "4:27", BreakStart: "1:31:46", BreakEnds: "1:42:28", Ends: "4:08:26", TotalTime: "4:08:41"},
    {Campaign: 3, Episode: 29, StartsAt: "9:14", BreakStart: "2:00:38", BreakEnds: "2:10:45", Ends: "3:36:32", TotalTime: "3:36:48"},

    {Campaign: 3, Episode: 0, StartsAt: "0:00", BreakStart: "0:00:00", BreakEnds: "0:00:00", Ends: "0:00:00", TotalTime: "0:00:00"},
    {},
];

var ListOfEpisodes = [
    {no: 1, title: "Arrival at Kraghammer", se: "(1x01)", date: "2015-03-12", link: "https://www.youtube.com/watch?v=i-p9lWIhcLQ", runtime: "3:03:07"},
    {no: 2, title: "Into the Greyspine Mines", se: "(1x02)", date: "2015-03-19", link: "https://www.youtube.com/watch?v=JTie0S_5gjE", runtime: "3:19:40"},
    {no: 3, title: "Strange Bedfellows", se: "(1x03)", date: "2015-03-26", link: "https://www.youtube.com/watch?v=kpkCcb--r90", runtime: "2:36:16"},
    {no: 4, title: "Attack on the Duergar Warcamp", se: "(1x04)", date: "2015-04-02", link: "https://www.youtube.com/watch?v=kGxiZNbjwGI", runtime: "4:42:42"},
    {no: 5, title: "The Trick about Falling", se: "(1x05)", date: "2015-04-09", link: "https://www.youtube.com/watch?v=u6QpXDL7E8Y", runtime: "3:09:41"},
    {no: 6, title: "Breaching the Emberhold", se: "(1x06)", date: "2015-04-16", link: "https://www.youtube.com/watch?v=cemCmD27Rnc", runtime: "2:57:00"},
    {no: 7, title: "The Throne Room", se: "(1x07)", date: "2015-04-23", link: "https://www.youtube.com/watch?v=XGs3bOX4XFQ", runtime: "3:58:41"},
    {no: 8, title: "Glass and Bone", se: "(1x08)", date: "2015-04-30", link: "https://www.youtube.com/watch?v=A14MzQxxdwM", runtime: "3:01:25"},
    {no: 9, title: "Yug'Voril Uncovered", se: "(1x09)", date: "2015-05-07", link: "https://www.youtube.com/watch?v=IsLIiKFSJLQ", runtime: "3:05:52"},
    {no: 10, title: "K'Varn Revealed", se: "(1x10)", date: "2015-05-14", link: "https://www.youtube.com/watch?v=AvnaMU7Dr-E", runtime: "4:38:34"},
    {no: 11, title: "The Temple Showdown", se: "(1x11)", date: "2015-05-21", link: "https://www.youtube.com/watch?v=xoYyHYsl5po", runtime: "5:32:34"},
    {no: 12, title: "Dungeons & Dragons Campaign Tips", se: "(1x12)", date: "2015-05-28", link: "https://www.youtube.com/watch?v=P8EcS0WYbuc", runtime: "5:32:34"},
    {no: 13, title: "Escape from the Underdark", se: "(1x13)", date: "2015-06-04", link: "https://www.youtube.com/watch?v=315mZGX-mjs", runtime: "3:28:37"},
    {no: 14, title: "Shopping and Shipping", se: "(1x14)", date: "2015-06-11", link: "https://www.youtube.com/watch?v=Z4tjssfei5E", runtime: "3:21:14"},
    {no: 15, title: "Skyward", se: "(1x15)", date: "2015-06-25", link: "https://www.youtube.com/watch?v=_dIBh0dGhzI", runtime: "4:09:01"},
    {no: 16, title: "Enter Vasselheim", se: "(1x16)", date: "2015-07-02", link: "https://www.youtube.com/watch?v=elarLmuDtzU", runtime: "2:57:38"},
    {no: 17, title: "Hubris", se: "(1x17)", date: "2015-07-23", link: "https://www.youtube.com/watch?v=QDdT5UqGaDw", runtime: "4:05:43"},
    {no: 18, title: "Trial of the Take: Part 1", se: "(1x18)", date: "2015-07-30", link: "https://www.youtube.com/watch?v=60sUkTh6xBc", runtime: "3:01:59"},
    {no: 19, title: "Trial of the Take: Part 2", se: "(1x19)", date: "2015-08-06", link: "https://www.youtube.com/watch?v=IW6GgFQg3kk", runtime: "4:43:04"},
    {no: 20, title: "Trial of the Take: Part 3", se: "(1x20)", date: "2015-08-13", link: "https://www.youtube.com/watch?v=GFU_qqwSs0U", runtime: "3:14:44"},
    {no: 21, title: "Trial of the Take: Part 4", se: "(1x21)", date: "2015-08-20", link: "https://www.youtube.com/watch?v=zGaISHs2s7Q", runtime: "4:44:19"},
    {no: 22, title: "Aramente to Pyrah", se: "(1x22)", date: "2015-08-27", link: "https://www.youtube.com/watch?v=1GY3HTZE5R0", runtime: "4:40:27"},
    {no: 23, title: "The Rematch", se: "(1x23)", date: "2015-09-10", link: "https://www.youtube.com/watch?v=FM6L4tuyXq0", runtime: "4:40:27"},
    {no: 24, title: "The Feast", se: "(1x24)", date: "2015-09-17", link: "https://www.youtube.com/watch?v=kre27f30IVs", runtime: "3:56:02"},
    {no: 25, title: "Crimson Diplomacy", se: "(1x25)", date: "2015-09-24", link: "https://www.youtube.com/watch?v=yrrB_q-V8G0", runtime: "3:47:12"},
    {no: 26, title: "Consequences and Cows", se: "(1x26)", date: "2015-10-01", link: "https://www.youtube.com/watch?v=_2CCQnD4AQ8", runtime: "4:41:18"},
    {no: 27, title: "The Path to Whitestone", se: "(1x27)", date: "2015-10-08", link: "https://www.youtube.com/watch?v=2mB-aM2bIBk", runtime: "3:34:00"},
    {no: 28, title: "The Sun Tree", se: "(1x28)", date: "2015-10-15", link: "https://www.youtube.com/watch?v=yE27NwtXjPY", runtime: "3:08:00"},
    {no: 29, title: "Whispers", se: "(1x29)", date: "2015-10-22", link: "https://www.youtube.com/watch?v=gq4av949-3Y", runtime: "4:04:00"},
    {no: 30, title: "Stoke the Flames", se: "(1x30)", date: "2015-10-29", link: "https://www.youtube.com/watch?v=MtS1LGdqxuI", runtime: "3:15:00"},
    {no: 31, title: "Gunpowder Plot", se: "(1x31)", date: "2015-11-05", link: "https://www.youtube.com/watch?v=CVSgD1iB1G0", runtime: "3:15:57"},
    {no: 32, title: "Against the Tide of Bone", se: "(1x32)", date: "2015-11-12", link: "https://www.youtube.com/watch?v=B5sUXSaTHKc", runtime: "3:36:29"},
    {no: 33, title: "Reunions", se: "(1x33)", date: "2015-11-19", link: "https://www.youtube.com/watch?v=EtdswJtQ_Ew", runtime: "4:24:22"},
    {no: 34, title: "Race to the Ziggurat", se: "(1x34)", date: "2015-12-03", link: "https://www.youtube.com/watch?v=2AqLu-u-GcY", runtime: "4:41:33"},
    {no: 35, title: "Denouement", se: "(1x35)", date: "2015-12-10", link: "https://www.youtube.com/watch?v=p8p5qZcqIk0", runtime: "3:14:56"},
    {no: 36, title: "Winter's Crest in Whitestone", se: "(1x36)", date: "2015-12-17", link: "https://www.youtube.com/watch?v=EikRMYRf5-Y", runtime: "2:48:24"},
    {no: 37, title: "A Musician's Nostalgia", se: "(1x37)", date: "2016-01-07", link: "https://www.youtube.com/watch?v=1cbxJRfvBtI", runtime: "4:23:28"},
    {no: 38, title: "Echoes of the Past", se: "(1x38)", date: "2016-01-14", link: "https://www.youtube.com/watch?v=wCj4kCq1Z9Y", runtime: "4:23:28"},
    {no: 39, title: "Omens", se: "(1x39)", date: "2016-01-21", link: "https://www.youtube.com/watch?v=9EToAf4nhDw", runtime: "3:55:51"},
    {no: 40, title: "Desperate Measures", se: "(1x40)", date: "2016-01-28", link: "https://www.youtube.com/watch?v=0W_by9hT6VQ", runtime: "3:01:47"},
    {no: 41, title: "In Ruins", se: "(1x41)", date: "2016-02-04", link: "https://www.youtube.com/watch?v=L8xSI6QoT-A", runtime: "4:32:41"},
    {no: 42, title: "Dangerous Dealings", se: "(1x42)", date: "2016-02-11", link: "https://www.youtube.com/watch?v=qWoloOxtvc0", runtime: "3:38:50"},
    {no: 43, title: "Return to Vasselheim", se: "(1x43)", date: "2016-02-18", link: "https://www.youtube.com/watch?v=zr2n1fLVasU", runtime: "3:44:33"},
    {no: 44, title: "The Sunken Tomb", se: "(1x44)", date: "2016-03-10", link: "https://www.youtube.com/watch?v=KHsA0R_GovU", runtime: "4:55:26"},
    {no: 45, title: "Those Who Walk Away", se: "(1x45)", date: "2016-03-17", link: "https://www.youtube.com/watch?v=0uazTyTrk-8", runtime: "3:03:24"},
    {no: 46, title: "Cindergrove Revisited", se: "(1x46)", date: "2016-03-24", link: "https://www.youtube.com/watch?v=uw1crQ1d9AU", runtime: "3:23:03"},
    {no: 47, title: "The Family Business", se: "(1x47)", date: "2016-03-31", link: "https://www.youtube.com/watch?v=QqU5pqKoH2c", runtime: "3:00:33"},
    {no: 48, title: "Into the Frostweald", se: "(1x48)", date: "2016-04-07", link: "https://www.youtube.com/watch?v=1uMH-hFJz0Q", runtime: "3:24:37"},
    {no: 49, title: "A Name Is Earned", se: "(1x49)", date: "2016-04-14", link: "https://www.youtube.com/watch?v=PfvVssT83MU", runtime: "4:51:32"},
    {no: 50, title: "Best Laid Plans...", se: "(1x50)", date: "2016-04-21", link: "https://www.youtube.com/watch?v=W4e4gTmoGi4", runtime: "3:05:00"},
    {no: 51, title: "Test of Pride", se: "(1x51)", date: "2016-04-28", link: "https://www.youtube.com/watch?v=9g3cnEacrEo", runtime: "2:54:25"},
    {no: 52, title: "The Kill Box", se: "(1x52)", date: "2016-05-05", link: "https://www.youtube.com/watch?v=9QXZ4LfSi84", runtime: "3:19:27"},
    {no: 53, title: "At Dawn, We Plan!", se: "(1x53)", date: "2016-05-12", link: "https://www.youtube.com/watch?v=Nfcja-6hr24", runtime: "3:37:36"},
    {no: 54, title: "In the Belly of the Beast", se: "(1x54)", date: "2016-05-19", link: "https://www.youtube.com/watch?v=9QRg2YEkVLU", runtime: "4:26:47"},
    {no: 55, title: "Umbrasyl", se: "(1x55)", date: "2016-06-02", link: "https://www.youtube.com/watch?v=A6ma5W_TSDE", runtime: "4:16:57"},
    {no: 56, title: "Hope", se: "(1x56)", date: "2016-06-09", link: "https://www.youtube.com/watch?v=8xpnCiF4im0", runtime: "3:53:14"},
    {no: 57, title: "Duskmeadow", se: "(1x57)", date: "2016-06-16", link: "https://www.youtube.com/watch?v=HMBS__TC5R4", runtime: "3:45:52"},
    {no: 58, title: "A Cycle of Vengeance", se: "(1x58)", date: "2016-06-23", link: "https://www.youtube.com/watch?v=nRBzpiPccOs", runtime: "3:42:51"},
    {no: 59, title: "The Feywild", se: "(1x59)", date: "2016-07-07", link: "https://www.youtube.com/watch?v=l_jwMsIv1oc", runtime: "3:08:33"},
    {no: 60, title: "Heredity and Hats", se: "(1x60)", date: "2016-07-14", link: "https://www.youtube.com/watch?v=Ok4ZW9cNupc", runtime: "2:42:35"},
    {no: 61, title: "Denizens of the Moonbrush", se: "(1x61)", date: "2016-07-28", link: "https://www.youtube.com/watch?v=QKaubU-lk04", runtime: "4:01:21"},
    {no: 62, title: "Uninviting Waters", se: "(1x62)", date: "2016-08-06", link: "https://www.youtube.com/watch?v=QePayxU0kKo", runtime: "2:59:40"},
    {no: 63, title: "The Echo Tree", se: "(1x63)", date: "2016-08-11", link: "https://www.youtube.com/watch?v=OS5aMcxkldI", runtime: "4:10:14"},
    {no: 64, title: "The Frigid Doom", se: "(1x64)", date: "2016-08-18", link: "https://www.youtube.com/watch?v=yqJdHshftrs", runtime: "3:58:37"},
    {no: 65, title: "The Streets of Ank'Harel", se: "(1x65)", date: "2016-08-25", link: "https://www.youtube.com/watch?v=6-Od2lnsiHs", runtime: "4:19:47"},
    {no: 66, title: "A Traveler's Gamble", se: "(1x66)", date: "2016-09-08", link: "https://www.youtube.com/watch?v=jgmBV5NA2A8", runtime: "4:17:28"},
    {no: 67, title: "The Chase to Glintshore", se: "(1x67)", date: "2016-09-15", link: "https://www.youtube.com/watch?v=Z7ozVxDtJzM", runtime: "3:43:09"},
    {no: 68, title: "Cloak and Dagger", se: "(1x68)", date: "2016-09-22", link: "https://www.youtube.com/watch?v=RCnwjLK_ZuQ", runtime: "4:34:22"},
    {no: 69, title: "Passed Through Fire", se: "(1x69)", date: "2016-09-29", link: "https://www.youtube.com/watch?v=YLcRhm8UP8g", runtime: "2:58:27"},
    {no: 70, title: "Trust", se: "(1x70)", date: "2016-10-06", link: "https://www.youtube.com/watch?v=YxWU4r-cLIY", runtime: "3:59:32"},
    {no: 71, title: "Vorugal", se: "(1x71)", date: "2016-10-13", link: "https://www.youtube.com/watch?v=-I_tnzBKSWk", runtime: "4:52:25"},
    {no: 72, title: "The Elephant in the Room", se: "(1x72)", date: "2016-10-20", link: "https://www.youtube.com/watch?v=qn8tLbXWAtc", runtime: "3:06:50"},
    {no: 73, title: "The Coming Storm", se: "(1x73)", date: "2016-10-27", link: "https://www.youtube.com/watch?v=UHUBmvRNrik", runtime: "3:24:38"},
    {no: 74, title: "Path of Brass", se: "(1x74)", date: "2016-11-03", link: "https://www.youtube.com/watch?v=2U21dJrY6ZI", runtime: "4:00:17"},
    {no: 75, title: "Where the Cards Fall", se: "(1x75)", date: "2016-11-10", link: "https://www.youtube.com/watch?v=Qz-twLRAE_A", runtime: "3:57:40"},
    {no: 76, title: "Brawl in the Arches", se: "(1x76)", date: "2016-11-17", link: "https://www.youtube.com/watch?v=L4Sb53wvbKI", runtime: "3:52:02"},
    {no: 77, title: "Clash at Daxio", se: "(1x77)", date: "2016-12-01", link: "https://www.youtube.com/watch?v=43gRUYn4x_M", runtime: "4:25:15"},
    {no: 78, title: "The Siege of Emon", se: "(1x78)", date: "2016-12-08", link: "https://www.youtube.com/watch?v=tEnHX2XiGaQ", runtime: "4:16:26"},
    {no: 79, title: "Thordak", se: "(1x79)", date: "2016-12-15", link: "https://www.youtube.com/watch?v=THyXWq5iS0k", runtime: "4:26:39"},
    {no: 80, title: "Raishan", se: "(1x80)", date: "2017-01-05", link: "https://www.youtube.com/watch?v=5jc1pbOVUX0", runtime: "3:23:30"},
    {no: 81, title: "What Lies Beneath the Surface", se: "(1x81)", date: "2017-01-12", link: "https://www.youtube.com/watch?v=um3mkvNmDPY", runtime: "4:00:50"},
    {no: 82, title: "Deadly Echoes", se: "(1x82)", date: "2017-01-19", link: "https://www.youtube.com/watch?v=Mgjf7knzbx0", runtime: "4:48:33"},
    {no: 83, title: "The Deceiver's Stand", se: "(1x83)", date: "2017-01-26", link: "https://www.youtube.com/watch?v=4z_wF_SJR2I", runtime: "4:18:13"},
    {no: 84, title: "Loose Ends", se: "(1x84)", date: "2017-02-02", link: "https://www.youtube.com/watch?v=KiGoxBJQ_I0", runtime: "3:33:53"},
    {no: 85, title: "A Bard's Lament", se: "(1x85)", date: "2017-02-09", link: "https://www.youtube.com/watch?v=N7DuwqJtCGI", runtime: "3:27:17"},
    {no: 86, title: "Daring Days", se: "(1x86)", date: "2017-02-16", link: "https://www.youtube.com/watch?v=OrOZRVxyR3I", runtime: "3:51:28"},
    {no: 87, title: "Onward to Vesrah", se: "(1x87)", date: "2017-02-23", link: "https://www.youtube.com/watch?v=cZfFsdaK1dg", runtime: "3:33:41"},
    {no: 88, title: "Tangled Depths", se: "(1x88)", date: "2017-03-02", link: "https://www.youtube.com/watch?v=rMEIgwyv2Wc", runtime: "5:30:29"},
    {no: 89, title: "Curious Tides", se: "(1x89)", date: "2017-03-09", link: "https://www.youtube.com/watch?v=5tU-mBn4qsk", runtime: "3:35:50"},
    {no: 90, title: "Voice of the Tempest", se: "(1x90)", date: "2017-03-16", link: "https://www.youtube.com/watch?v=Yr3tvzSqTDQ", runtime: "4:08:37"},
    {no: 91, title: "Vox Machina Go to Hell", se: "(1x91)", date: "2017-03-23", link: "https://www.youtube.com/watch?v=mymhgcNgqBY", runtime: "4:12:27"},
    {no: 92, title: "Deals in the Dark", se: "(1x92)", date: "2017-03-30", link: "https://www.youtube.com/watch?v=uplxc5lB7cQ", runtime: "3:39:09"},
    {no: 93, title: "Bats Out of Hell", se: "(1x93)", date: "2017-04-06", link: "https://www.youtube.com/watch?v=Tcj90Lu6Tyk", runtime: "4:29:26"},
    {no: 94, title: "Jugs and Rods", se: "(1x94)", date: "2017-04-13", link: "https://www.youtube.com/watch?v=BNaWnFwfGJc", runtime: "4:23:32"},
    {no: 95, title: "One Year Later...", se: "(1x95)", date: "2017-04-27", link: "https://www.youtube.com/watch?v=oUoMRr12oQc", runtime: "4:05:35"},
    {no: 96, title: "Family Matters", se: "(1x96)", date: "2017-05-04", link: "https://www.youtube.com/watch?v=ZWkicUhQ7yE", runtime: "4:48:48"},
    {no: 97, title: "Taryon, My Wayward Son", se: "(1x97)", date: "2017-05-11", link: "https://www.youtube.com/watch?v=JweRpzsCiGo", runtime: "4:13:22"},
    {no: 98, title: "The Mines of the Many", se: "(1x98)", date: "2017-05-18", link: "https://www.youtube.com/watch?v=H84po-1-GB0", runtime: "4:30:37"},
    {no: 99, title: "Masquerade", se: "(1x99)", date: "2017-06-01", link: "https://www.youtube.com/watch?v=B16lXrMK5t0", runtime: "4:01:28"},
    {no: 100, title: "Unfinished Business", se: "(1x100)", date: "2017-06-08", link: "https://www.youtube.com/watch?v=Gyk7vcIgPv8", runtime: "5:46:36"},
    {no: 101, title: "Thar Amphala", se: "(1x101)", date: "2017-06-15", link: "https://www.youtube.com/watch?v=MfTj8ZFaUy0", runtime: "3:31:25"},
    {no: 102, title: "Race to the Tower", se: "(1x102)", date: "2017-06-22", link: "https://www.youtube.com/watch?v=N1A-JGIF1Vc", runtime: "4:32:19"},
    {no: 103, title: "The Fate-Touched", se: "(1x103)", date: "2017-06-29", link: "https://www.youtube.com/watch?v=2HOdxvQ_ydU", runtime: "3:33:11"},
    {no: 104, title: "Elysium", se: "(1x104)", date: "2017-07-06", link: "https://www.youtube.com/watch?v=bAYN8qw7FYw", runtime: "3:07:56"},
    {no: 105, title: "The Fear of Isolation", se: "(1x105)", date: "2017-07-13", link: "https://www.youtube.com/watch?v=uwNxxXtGxgM", runtime: "4:08:19"},
    {no: 106, title: "The Endless Atheneum", se: "(1x106)", date: "2017-07-27", link: "https://www.youtube.com/watch?v=Wl1Oi8Rbc1s", runtime: "3:50:03"},
    {no: 107, title: "Scaldseat", se: "(1x107)", date: "2017-08-03", link: "https://www.youtube.com/watch?v=Cr2Rc7MRaf0", runtime: "3:57:25"},
    {no: 108, title: "The Core Anvil", se: "(1x108)", date: "2017-08-10", link: "https://www.youtube.com/watch?v=2sBrNMR5FRE", runtime: "4:31:45"},
    {no: 109, title: "The Ominous March", se: "(1x109)", date: "2017-08-17", link: "https://www.youtube.com/watch?v=t7oLhv6HKl4", runtime: "3:44:21"},
    {no: 110, title: "The Climb Within", se: "(1x110)", date: "2017-08-24", link: "https://www.youtube.com/watch?v=5qQMkxfWkSw", runtime: "3:45:25"},
    {no: 111, title: "Shadows of Thomara", se: "(1x111)", date: "2017-09-14", link: "https://www.youtube.com/watch?v=DFGKgYY7SKk", runtime: "4:30:51"},
    {no: 112, title: "Dark Dealings", se: "(1x112)", date: "2017-09-21", link: "https://www.youtube.com/watch?v=kTd4D8q5MvY", runtime: "4:10:09"},
    {no: 113, title: "The Final Ascent", se: "(1x113)", date: "2017-09-28", link: "https://www.youtube.com/watch?v=zUXL--sSc3A", runtime: "5:02:21"},
    {no: 114, title: "Vecna, the Ascended", se: "(1x114)", date: "2017-10-05", link: "https://www.youtube.com/watch?v=W-SMrG0QLc0", runtime: "5:44:46"},
    {no: 115, title: "The Chapter Closes", se: "(1x115)", date: "2017-10-12", link: "https://www.youtube.com/watch?v=XrKcdyV0eq4", runtime: "4:34:10"},
    
    {no: 1, title: "Curious Beginnings", se: "(2x01)", date: "2018-01-11", link: "https://www.youtube.com/watch?v=byva0hOj8CU", runtime: "3:24:13"},
    {no: 2, title: "A Show of Scrutiny", se: "(2x02)", date: "2018-01-18", link: "https://www.youtube.com/watch?v=MPELLuQXVcE", runtime: "4:13:06"},
    {no: 3, title: "The Midnight Chase", se: "(2x03)", date: "2018-01-25", link: "https://www.youtube.com/watch?v=_Ig_s9j4MuU", runtime: "3:59:27"},
    {no: 4, title: "Disparate Pieces", se: "(2x04)", date: "2018-02-01", link: "https://www.youtube.com/watch?v=JtJTqLSzXaM", runtime: "3:56:12"},
    {no: 5, title: "The Open Road", se: "(2x05)", date: "2018-02-08", link: "https://www.youtube.com/watch?v=m3vPWbJoBrQ", runtime: "3:43:10"},
    {no: 6, title: "The Howling Mines", se: "(2x06)", date: "2018-02-15", link: "https://www.youtube.com/watch?v=5DHEj9nY-wo", runtime: "4:08:23"},
    {no: 7, title: "Hush", se: "(2x07)", date: "2018-02-22", link: "https://www.youtube.com/watch?v=JAyT10WP-cY", runtime: "4:30:27"},
    {no: 8, title: "The Gates of Zadash", se: "(2x08)", date: "2018-03-01", link: "https://www.youtube.com/watch?v=dGv-_8tk8g4", runtime: "3:47:09"},
    {no: 9, title: "Steam and Conversation", se: "(2x09)", date: "2018-03-08", link: "https://www.youtube.com/watch?v=HtnTlm6UBpg", runtime: "3:43:45"},
    {no: 10, title: "Waste and Webs", se: "(2x10)", date: "2018-03-15", link: "https://www.youtube.com/watch?v=R0rx28wgA4E", runtime: "4:13:25"},
    {no: 11, title: "Zemnian Nights", se: "(2x11)", date: "2018-03-22", link: "https://www.youtube.com/watch?v=w3JWNPcspoM", runtime: "4:16:49"},
    {no: 12, title: "Midnight Espionage", se: "(2x12)", date: "2018-03-29", link: "https://www.youtube.com/watch?v=HoZGMqCIRK8", runtime: "4:16:30"},
    {no: 13, title: "Lost & Found", se: "(2x13)", date: "2018-04-05", link: "https://www.youtube.com/watch?v=3GNcQ1Abnek", runtime: "4:23:52"},
    {no: 14, title: "Fleeting Memories", se: "(2x14)", date: "2018-04-12", link: "https://www.youtube.com/watch?v=seY-M0i78F4", runtime: "3:16:55"},
    {no: 15, title: "Where The River Goes", se: "(2x15)", date: "2018-04-19", link: "https://www.youtube.com/watch?v=0ZLwaSShk8M", runtime: "3:51:58"},
    {no: 16, title: "A Favor in Kind", se: "(2x16)", date: "2018-04-26", link: "https://www.youtube.com/watch?v=lT-wFK4SgJc", runtime: "4:13:02"},
    {no: 17, title: "Harvest Close", se: "(2x17)", date: "2018-05-03", link: "https://www.youtube.com/watch?v=RNOyGusWh3s", runtime: "4:18:00"},
    {no: 18, title: "Whispers of War", se: "(2x18)", date: "2018-05-10", link: "https://www.youtube.com/watch?v=4C-frHrNWjY", runtime: "4:27:19"},
    {no: 19, title: "The Gentleman's Path", se: "(2x19)", date: "2018-05-17", link: "https://www.youtube.com/watch?v=w6jE3T_ooKw", runtime: "3:54:43"},
    {no: 20, title: "Labenda Awaits", se: "(2x20)", date: "2018-05-24", link: "https://www.youtube.com/watch?v=jyCoCqhsFp4", runtime: "3:43:41"},
    {no: 21, title: "Stalker in the Swamp", se: "(2x21)", date: "2018-05-31", link: "https://www.youtube.com/watch?v=YTARojk9tBY", runtime: "4:34:14"},
    {no: 22, title: "Lost Treasures", se: "(2x22)", date: "2018-06-07", link: "https://www.youtube.com/watch?v=aQxpxWz38P8", runtime: "3:37:05"},
    {no: 23, title: "Have Bird, Will Travel", se: "(2x23)", date: "2018-06-14", link: "https://www.youtube.com/watch?v=xr1dOEL2EHQ", runtime: "3:57:34"},
    {no: 24, title: "The Hour of Honor", se: "(2x24)", date: "2018-06-21", link: "https://www.youtube.com/watch?v=YtNB-7Jz1LQ", runtime: "3:46:08"},
    {no: 25, title: "Divergent Paths", se: "(2x25)", date: "2018-06-28", link: "https://www.youtube.com/watch?v=CoomA-qeJMI", runtime: "4:00:25"},
    {no: 26, title: "Found & Lost", se: "(2x26)", date: "2018-07-12", link: "https://www.youtube.com/watch?v=NZVqPja6Alg", runtime: "4:53:28"},
    {no: 27, title: "Converging Fury", se: "(2x27)", date: "2018-07-19", link: "https://www.youtube.com/watch?v=p6miK4kIwIE", runtime: "4:03:17"},
    {no: 28, title: "Within the Nest", se: "(2x28)", date: "2018-07-26", link: "https://www.youtube.com/watch?v=_jDCU8IRyfA", runtime: "4:12:17"},
    {no: 29, title: "The Stalking Nightmare", se: "(2x29)", date: "2018-08-03", link: "https://www.youtube.com/watch?v=L3vV7ZdE_w8", runtime: "4:10:57"},
    {no: 30, title: "The Journey Home", se: "(2x30)", date: "2018-08-09", link: "https://www.youtube.com/watch?v=nmiBiqC3fDY", runtime: "3:34:06"},
    {no: 31, title: "Commerce & Chaos", se: "(2x31)", date: "2018-08-16", link: "https://www.youtube.com/watch?v=FJ25t2cM6Ws", runtime: "3:26:34"},
    {no: 32, title: "Beyond the Boundaries", se: "(2x32)", date: "2018-08-23", link: "https://www.youtube.com/watch?v=aRQr1QMNHsQ", runtime: "3:45:21"},
    {no: 33, title: "The Ruby and the Sapphire", se: "(2x33)", date: "2018-09-06", link: "https://www.youtube.com/watch?v=QbrorVyH4mk", runtime: "3:54:09"},
    {no: 34, title: "Encroaching Waters", se: "(2x34)", date: "2018-09-13", link: "https://www.youtube.com/watch?v=GcmINbstp-E", runtime: "4:22:52"},
    {no: 35, title: "Dockside Diplomacy", se: "(2x35)", date: "2018-09-20", link: "https://www.youtube.com/watch?v=39TP4YZHf3M", runtime: "3:51:25"},
    {no: 36, title: "O Captain, Who's Captain?", se: "(2x36)", date: "2018-09-27", link: "https://www.youtube.com/watch?v=AB-yVfipWTU", runtime: "4:04:53"},
    {no: 37, title: "Dangerous Liaisons", se: "(2x37)", date: "2018-10-04", link: "https://www.youtube.com/watch?v=B2IYaW9lUM4", runtime: "3:18:29"},
    {no: 38, title: "Welcome to the Jungle", se: "(2x38)", date: "2018-10-11", link: "https://www.youtube.com/watch?v=GOsCZ8kQom0", runtime: "3:25:49"},
    {no: 39, title: "Temple of the False Serpent", se: "(2x39)", date: "2018-10-18", link: "https://www.youtube.com/watch?v=M6XpCPfDP8M", runtime: "4:21:51"},
    {no: 40, title: "Dubious Pursuits", se: "(2x40)", date: "2018-11-01", link: "https://www.youtube.com/watch?v=etjou2cxZJw", runtime: "3:10:40"},
    {no: 41, title: "A Pirate's Life for Me", se: "(2x41)", date: "2018-11-08", link: "https://www.youtube.com/watch?v=NOh9T7YeR3o", runtime: "3:40:43"},
    {no: 42, title: "A Hole In the Plan", se: "(2x42)", date: "2018-11-15", link: "https://www.youtube.com/watch?v=W723E1ofhcE", runtime: "3:54:33"},
    {no: 43, title: "In Hot Water", se: "(2x43)", date: "2018-11-29", link: "https://www.youtube.com/watch?v=dyArEJYKr5U", runtime: "3:40:13"},
    {no: 44, title: "The Diver's Grave", se: "(2x44)", date: "2018-12-06", link: "https://www.youtube.com/watch?v=P8UVu-kGusg", runtime: "4:12:20"},
    {no: 45, title: "The Stowaway", se: "(2x45)", date: "2018-12-13", link: "https://www.youtube.com/watch?v=ujWYp5Wr64U", runtime: "4:58:55"},
    {no: 46, title: "A Storm of Memories", se: "(2x46)", date: "2018-12-20", link: "https://www.youtube.com/watch?v=jw1AhahRFTY", runtime: "3:58:52"},
    {no: 47, title: "The Second Seal", se: "(2x47)", date: "2019-01-10", link: "https://www.youtube.com/watch?v=pj3CeW_a1hQ", runtime: "3:49:22"},
    {no: 48, title: "Homeward Bound", se: "(2x48)", date: "2019-01-17", link: "https://www.youtube.com/watch?v=ozSrsj6TtKc", runtime: "4:09:02"},
    {no: 49, title: "A Game of Names", se: "(2x49)", date: "2019-01-24", link: "https://www.youtube.com/watch?v=Xmsjf8jQZWE", runtime: "3:44:26"},
    {no: 50, title: "The Endless Burrows", se: "(2x50)", date: "2019-01-31", link: "https://www.youtube.com/watch?v=eRFetHZDSg4", runtime: "4:09:08"},
    {no: 51, title: "Xhorhas", se: "(2x51)", date: "2019-02-14", link: "https://www.youtube.com/watch?v=jnn4dpC2qAQ", runtime: "4:03:29"},
    {no: 52, title: "Feral Business", se: "(2x52)", date: "2019-02-21", link: "https://www.youtube.com/watch?v=REyVoebe06E", runtime: "4:08:49"},
    {no: 53, title: "Cornered", se: "(2x53)", date: "2019-02-28", link: "https://www.youtube.com/watch?v=tdP3yCRPtJY", runtime: "3:35:05"},
    {no: 54, title: "Well Beneath", se: "(2x54)", date: "2019-03-07", link: "https://www.youtube.com/watch?v=iA0rVPoBK5E", runtime: "3:34:37"},
    {no: 55, title: "Duplicity", se: "(2x55)", date: "2019-03-14", link: "https://www.youtube.com/watch?v=k1PRExWXj8o", runtime: "4:25:28"},
    {no: 56, title: "The Favor", se: "(2x56)", date: "2019-03-21", link: "https://www.youtube.com/watch?v=ZtcAs7jCDvw", runtime: "3:01:16"},
    {no: 57, title: "In Love and War", se: "(2x57)", date: "2019-04-04", link: "https://www.youtube.com/watch?v=fUfCP184L0I", runtime: "3:45:14"},
    {no: 58, title: "Wood and Steel", se: "(2x58)", date: "2019-04-11", link: "https://www.youtube.com/watch?v=7Z610fSoifk", runtime: "3:48:19"},
    {no: 59, title: "Perspective", se: "(2x59)", date: "2019-04-18", link: "https://www.youtube.com/watch?v=-qveongNOUI", runtime: "3:56:05"},
    {no: 60, title: "A Turtle By Any Other Name", se: "(2x60)", date: "2019-04-25", link: "https://www.youtube.com/watch?v=yJgaEh_GZ6M", runtime: "3:56:01"},
    {no: 61, title: "Agreements", se: "(2x61)", date: "2019-05-02", link: "https://www.youtube.com/watch?v=Ck_yuplT8O8", runtime: "3:26:38"},
    {no: 62, title: "Domestic Respite", se: "(2x62)", date: "2019-05-09", link: "https://www.youtube.com/watch?v=-EfuYx_YWC8", runtime: "3:58:57"},
    {no: 63, title: "Intervention", se: "(2x63)", date: "2019-05-16", link: "https://www.youtube.com/watch?v=CQWv6zQZTGo", runtime: "3:53:17"},
    {no: 64, title: "A Dangerous Chase", se: "(2x64)", date: "2019-05-23", link: "https://www.youtube.com/watch?v=3yfLht7w7Yk", runtime: "3:28:57"},
    {no: 65, title: "Chases and Trees", se: "(2x65)", date: "2019-05-30", link: "https://www.youtube.com/watch?v=HNODkS9gZmM", runtime: "3:56:27"},
    {no: 66, title: "Beneath Bazzoxan", se: "(2x66)", date: "2019-06-06", link: "https://www.youtube.com/watch?v=JGnGZbuvSJY", runtime: "4:25:04"},
    {no: 67, title: "Beyond the Eyes of Angels", se: "(2x67)", date: "2019-06-13", link: "https://www.youtube.com/watch?v=hdtabnXnckw", runtime: "4:24:25"},
    {no: 68, title: "Reflections", se: "(2x68)", date: "2019-06-20", link: "https://www.youtube.com/watch?v=5GAclNF61Xs", runtime: "3:48:52"},
    {no: 69, title: "The King's Cage", se: "(2x69)", date: "2019-06-27", link: "https://www.youtube.com/watch?v=Sj5wImPuG-k", runtime: "4:18:31"},
    {no: 70, title: "Causatum", se: "(2x70)", date: "2019-07-11", link: "https://www.youtube.com/watch?v=kKeNW01RJYY", runtime: "3:53:12"},
    {no: 71, title: "Family Gathering", se: "(2x71)", date: "2019-07-18", link: "https://www.youtube.com/watch?v=XpLgITRGA30", runtime: "3:24:18"},
    {no: 72, title: "Clay and Dust", se: "(2x72)", date: "2019-07-25", link: "https://www.youtube.com/watch?v=8tCcRA2aogk", runtime: "3:38:08"},
    {no: 73, title: "Uthodurn", se: "(2x73)", date: "2019-08-02", link: "https://www.youtube.com/watch?v=M5lRGaV-xQk", runtime: "4:10:10"},
    {no: 74, title: "Manifold Morals", se: "(2x74)", date: "2019-08-08", link: "https://www.youtube.com/watch?v=rMZYyG8qm-Y", runtime: "4:09:23"},
    {no: 75, title: "Rime and Reason", se: "(2x75)", date: "2019-08-15", link: "https://www.youtube.com/watch?v=Z1pJ0essryI", runtime: "4:17:37"},
    {no: 76, title: "Refjorged", se: "(2x76)", date: "2019-08-22", link: "https://www.youtube.com/watch?v=BzHkVh80kVQ", runtime: "5:00:31"},
    {no: 77, title: "A Tangled Web", se: "(2x77)", date: "2019-09-05", link: "https://www.youtube.com/watch?v=IW-wt6u7GNQ", runtime: "3:54:26"},
    {no: 78, title: "Between the Lines", se: "(2x78)", date: "2019-09-19", link: "https://www.youtube.com/watch?v=Z8Jbn8VoXaw", runtime: "4:07:55"},
    {no: 79, title: "Through the Trees", se: "(2x79)", date: "2019-09-26", link: "https://www.youtube.com/watch?v=yG2vBIu1ieg", runtime: "4:19:38"},
    {no: 80, title: "The Folding Halls", se: "(2x80)", date: "2019-10-10", link: "https://www.youtube.com/watch?v=aHKloZn2rII", runtime: "3:41:12"},
    {no: 81, title: "From Door to Door", se: "(2x81)", date: "2019-10-17", link: "https://www.youtube.com/watch?v=XPu0ANzvQdQ", runtime: "4:16:41"},
    {no: 82, title: "The Beat of the Permaheart", se: "(2x82)", date: "2019-10-24", link: "https://www.youtube.com/watch?v=2Jv3OPxR7F8", runtime: "4:27:08"},
    {no: 83, title: "Dark Bargains", se: "(2x83)", date: "2019-10-31", link: "https://www.youtube.com/watch?v=YpoHqSgjTjg", runtime: "4:11:05"},
    {no: 84, title: "Titles and Tattoos", se: "(2x84)", date: "2019-11-07", link: "https://www.youtube.com/watch?v=vFMddwkLjJw", runtime: "4:01:40"},
    {no: 85, title: "The Threads Converge", se: "(2x85)", date: "2019-11-14", link: "https://www.youtube.com/watch?v=J1Efz6E3_-0", runtime: "4:29:53"},
    {no: 86, title: "The Cathedral", se: "(2x86)", date: "2019-11-21", link: "https://www.youtube.com/watch?v=Wao4L1Mfam4", runtime: "5:03:24"},
    {no: 87, title: "Punishment and Politics", se: "(2x87)", date: "2019-12-05", link: "https://www.youtube.com/watch?v=3RnC_HS2Ck4", runtime: "3:21:12"},
    {no: 88, title: "Unwanted Reunions", se: "(2x88)", date: "2019-12-12", link: "https://www.youtube.com/watch?v=d-xQ5dsILYU", runtime: "4:11:34"},
    {no: 89, title: "Lingering Wounds", se: "(2x89)", date: "2019-12-19", link: "https://www.youtube.com/watch?v=KrZps9j2bl4", runtime: "4:25:23"},
    {no: 90, title: "Bathhouses and Bastions", se: "(2x90)", date: "2020-01-09", link: "https://www.youtube.com/watch?v=wdHE0avQRVw", runtime: "3:52:29"},
    {no: 91, title: "Stone to Clay", se: "(2x91)", date: "2020-01-16", link: "https://www.youtube.com/watch?v=mN6jDz0UPdo", runtime: "3:56:04"},
    {no: 92, title: "Home is Where the Heart Is", se: "(2x92)", date: "2020-01-23", link: "https://www.youtube.com/watch?v=qS9rz1srwio", runtime: "4:13:24"},
    {no: 93, title: "Misery Loves Company", se: "(2x93)", date: "2020-01-30", link: "https://www.youtube.com/watch?v=PJawve2RxNM", runtime: "3:53:30"},
    {no: 94, title: "With Great Power...", se: "(2x94)", date: "2020-02-06", link: "https://www.youtube.com/watch?v=Arx8bX4E_Cw", runtime: "4:02:40"},
    {no: 95, title: "Blessing in Disguise", se: "(2x95)", date: "2020-02-13", link: "https://www.youtube.com/watch?v=1Db5CorBfz4", runtime: "3:43:25"},
    {no: 96, title: "Family Shatters", se: "(2x96)", date: "2020-02-20", link: "https://www.youtube.com/watch?v=Tmz4TS3Div8", runtime: "4:35:27"},
    {no: 97, title: "The Fancy and the Fooled", se: "(2x97)", date: "2020-02-27", link: "https://www.youtube.com/watch?v=SV8eKqbZZNQ", runtime: "4:15:06"},
    {no: 98, title: "Dark Waters", se: "(2x98)", date: "2020-03-05", link: "https://www.youtube.com/watch?v=4OH5Sa8x_Cw", runtime: "5:08:24"},
    {no: 99, title: "High Seas, High Stakes", se: "(2x99)", date: "2020-03-12", link: "https://www.youtube.com/watch?v=KmLNSQwQQXQ", runtime: "3:48:13"},
    {no: 100, title: "Hunted at Sea", se: "(2x100)", date: "2020-07-02", link: "https://www.youtube.com/watch?v=1s0odp2AI_0", runtime: "3:38:05"},
    {no: 101, title: "Mysteries, Memories, and Music", se: "(2x101)", date: "2020-07-09", link: "https://www.youtube.com/watch?v=GGQhSkwh2h4", runtime: "3:38:53"},
    {no: 102, title: "Ghosts, Dinosaurs, and Stuff", se: "(2x102)", date: "2020-07-16", link: "https://www.youtube.com/watch?v=hKlo5FWlxnA", runtime: "3:27:03"},
    {no: 103, title: "Maritime Mysteries", se: "(2x103)", date: "2020-07-23", link: "https://www.youtube.com/watch?v=1XUaTszLV6Q", runtime: "3:31:33"},
    {no: 104, title: "The Ruined Sliver", se: "(2x104)", date: "2020-07-30", link: "https://www.youtube.com/watch?v=ni3aw71y7LI", runtime: "3:55:36"},
    {no: 105, title: "Rumble at Rumblecusp", se: "(2x105)", date: "2020-08-06", link: "https://www.youtube.com/watch?v=ItgpnsJS2pE", runtime: "4:42:21"},
    {no: 106, title: "A Fog Lifted", se: "(2x106)", date: "2020-08-13", link: "https://www.youtube.com/watch?v=PWMlvpyFm-E", runtime: "3:52:53"},
    {no: 107, title: "Devoutness and Dicks", se: "(2x107)", date: "2020-08-27", link: "https://www.youtube.com/watch?v=dd8jt0jfeww", runtime: "3:53:57"},
    {no: 108, title: "Traveler Con", se: "(2x108)", date: "2020-09-03", link: "https://www.youtube.com/watch?v=YIcNZERTDOY", runtime: "4:01:45"},
    {no: 109, title: "Frigid Propositions", se: "(2x109)", date: "2020-09-10", link: "https://www.youtube.com/watch?v=kFPLx3SICi0", runtime: "3:54:29"},
    {no: 110, title: "Dinner with the Devil", se: "(2x110)", date: "2020-09-17", link: "https://www.youtube.com/watch?v=pgasGt17Kqo", runtime: "4:07:30"},
    {no: 111, title: "New Homes and Old Friends", se: "(2x111)", date: "2020-09-24", link: "https://www.youtube.com/watch?v=-9pOQ7n3z5g", runtime: "3:34:58"},
    {no: 112, title: "The Chase Begins", se: "(2x112)", date: "2020-10-15", link: "https://www.youtube.com/watch?v=A5IMAFoBVWc", runtime: "4:20:09"},
    {no: 113, title: "A Heart Grown Cold", se: "(2x113)", date: "2020-10-22", link: "https://www.youtube.com/watch?v=0HncegOZtNQ", runtime: "4:05:52"},
    {no: 114, title: "An Open Window", se: "(2x114)", date: "2020-10-29", link: "https://www.youtube.com/watch?v=UGcLpm4iEBg", runtime: "3:42:45"},
    {no: 115, title: "Fetching Fables & Frosty Friends", se: "(2x115)", date: "2020-11-05", link: "https://www.youtube.com/watch?v=kwTzNMNQCEA", runtime: "4:06:43"},
    {no: 116, title: "Under Timeless Ice", se: "(2x116)", date: "2020-11-12", link: "https://www.youtube.com/watch?v=DhlfFwDOwPM", runtime: "4:06:43"},
    {no: 117, title: "The Tortoise and The Dare", se: "(2x117)", date: "2020-11-19", link: "https://www.youtube.com/watch?v=pRgFL6Zi3nM", runtime: "4:16:04"},
    {no: 118, title: "Solace Between the Secrets", se: "(2x118)", date: "2020-12-03", link: "https://www.youtube.com/watch?v=KcwtwrI1-dc", runtime: "4:31:32"},
    {no: 119, title: "Malice and Mystery Below", se: "(2x119)", date: "2020-12-10", link: "https://www.youtube.com/watch?v=xAQy-ompDc4", runtime: "3:27:28"},
    {no: 120, title: "Contentious Company", se: "(2x120)", date: "2020-12-17", link: "https://www.youtube.com/watch?v=EDudet-qZIg", runtime: "3:50:41"},
    {no: 121, title: "Ice and Fire", se: "(2x121)", date: "2021-01-14", link: "https://www.youtube.com/watch?v=rLdtEUHzmGU", runtime: "3:21:14"},
    {no: 122, title: "Nothing Ventured, Nothing Gained", se: "(2x122)", date: "2021-01-21", link: "https://www.youtube.com/watch?v=lY_niV3P0IU", runtime: "3:36:49"},
    {no: 123, title: "Fair-weather Faith", se: "(2x123)", date: "2021-01-28", link: "https://www.youtube.com/watch?v=uHGvn3IPh5k", runtime: "5:24:27"},
    {no: 124, title: "A Walk to Warmer Welcomes", se: "(2x124)", date: "2021-02-04", link: "https://www.youtube.com/watch?v=qZUW4zdS6dk", runtime: "4:23:27"},
    {no: 125, title: "The Neverending Day", se: "(2x125)", date: "2021-02-11", link: "https://www.youtube.com/watch?v=bfWYxuiegX8", runtime: "3:45:24"},
    {no: 126, title: "Worth Fighting For", se: "(2x126)", date: "2021-02-18", link: "https://www.youtube.com/watch?v=guI9DCxK_es", runtime: "3:31:23"},
    {no: 127, title: "Sarsaparilla, Licorice, and Red Hot", se: "(2x127)", date: "2021-02-25", link: "https://www.youtube.com/watch?v=oagFBOV4MX4", runtime: "3:18:21"},
    {no: 128, title: "Cat and Mouse", se: "(2x128)", date: "2021-03-04", link: "https://www.youtube.com/watch?v=xPelkwqSOCs", runtime: "3:32:48"},
    {no: 129, title: "Between a Ball and a Hot Place", se: "(2x129)", date: "2021-03-11", link: "https://www.youtube.com/watch?v=6nR3FGyyG4I", runtime: "3:37:54"},
    {no: 130, title: "The Calm Before the Storm", se: "(2x130)", date: "2021-03-18", link: "https://www.youtube.com/watch?v=mZ-dVqIlKAk", runtime: "4:05:32"},
    {no: 131, title: "Into the Eye", se: "(2x131)", date: "2021-03-25", link: "https://www.youtube.com/watch?v=VAG8d9F3ULU", runtime: "4:14:50"},
    {no: 132, title: "Aeor", se: "(2x132)", date: "2021-04-01", link: "https://www.youtube.com/watch?v=z_QadZ8S9rU", runtime: "3:39:19"},
    {no: 133, title: "Hunter and Hunted", se: "(2x133)", date: "2021-04-08", link: "https://www.youtube.com/watch?v=6hB73g8SF_k", runtime: "4:21:33"},
    {no: 134, title: "The Streets of the Forgotten", se: "(2x134)", date: "2021-04-15", link: "https://www.youtube.com/watch?v=vTwG0Tfvkbo", runtime: "4:11:07"},
    {no: 135, title: "The Genesis Ward", se: "(2x135)", date: "2021-04-22", link: "https://www.youtube.com/watch?v=As-CPD7Z5As", runtime: "3:42:57"},
    {no: 136, title: "Hell or High Water", se: "(2x136)", date: "2021-04-29", link: "https://www.youtube.com/watch?v=L3M4B2HmeS8", runtime: "3:37:29"},
    {no: 137, title: "Welcome to Cognouza", se: "(2x137)", date: "2021-05-06", link: "https://www.youtube.com/watch?v=l_loCAlJIVs", runtime: "3:07:41"},
    {no: 138, title: "Where There Is a Will...", se: "(2x138)", date: "2021-05-13", link: "https://www.youtube.com/watch?v=abczYOn1lIQ", runtime: "3:27:47"},
    {no: 139, title: "Rebirth", se: "(2x139)", date: "2021-05-20", link: "https://www.youtube.com/watch?v=KCX70GGxpoA", runtime: "3:49:58"},
    {no: 140, title: "Long May He Reign", se: "(2x140)", date: "2021-05-27", link: "https://www.youtube.com/watch?v=W5O0bbA7Pn8", runtime: "4:45:45"},
    {no: 141, title: "Fond Farewells", se: "(2x141)", date: "2021-06-03", link: "https://www.youtube.com/watch?v=lEZ5UPPtaHA", runtime: "7:02:56"},
    
    {no: 1, title: "The Draw of Destiny", se: "(3x01)", date: "2021-10-21", link: "https://youtu.be/P8pLvV3FjPc", runtime: "3:58:24"},
    {no: 2, title: "Trial by Firelight", se: "(3x02)", date: "2021-10-28", link: "https://youtu.be/pWOivwWvtt0", runtime: "4:07:39"},
    {no: 3, title: "The Trail and the Toll", se: "(3x03)", date: "2021-11-04", link: "https://youtu.be/POgfa65vi4k", runtime: "4:08:41"},
    {no: 4, title: "On the Trail of a Killer", se: "(3x04)", date: "2021-11-11", link: "https://youtu.be/gZ7u5NE_q4k", runtime: "3:52:12"},
    {no: 5, title: "The Threat Between the Walls", se: "(3x05)", date: "2021-11-18", link: "https://youtu.be/MDyYQqefj4M", runtime: "4:25:34"},
    {no: 6, title: "Growing Bonds and Teasing Threads", se: "(3x06)", date: "2021-12-02", link: "https://youtu.be/iBeyMyMzQWg", runtime: "3:54:57"},
    {no: 7, title: "Behind the Curtain", se: "(3x07)", date: "2021-12-09", link: "https://youtu.be/mRyO6ijeLx8", runtime: "3:49:37"},
    {no: 8, title: "A Woodworker's Quandary", se: "(3x08)", date: "2021-12-16", link: "https://youtu.be/cwbLO_649Vg", runtime: "3:22:59"},
    {no: 9, title: "Thicker Grows the Meal and Plot", se: "(3x09)", date: "2022-01-06", link: "https://youtu.be/IdRagVTlrmo", runtime: "4:14:35"},
    {no: 10, title: "Ghosts, Dates, and Darker Fates", se: "(3x10)", date: "2022-01-13", link: "https://youtu.be/Dvk70G5meeE", runtime: "3:16:29"},
    {no: 11, title: "Chasing Nightmares", se: "(3x11)", date: "2022-01-20", link: "https://youtu.be/75SoOmgKuk4", runtime: "4:52:18"},
    {no: 12, title: "Make It Fashion", se: "(3x12)", date: "2022-02-03", link: "https://youtu.be/h6AkvAj_hao", runtime: "4:36:52"},
    {no: 13, title: "A Dance of Deception", se: "(3x13)", date: "2022-02-10", link: "https://youtu.be/2CTz_OfneeM", runtime: "4:01:00"},
    {no: 14, title: "In Too Deep", se: "(3x14)", date: "2022-02-17", link: "https://youtu.be/-OCLsOUZN68", runtime: "4:45:07"},
    {no: 15, title: "The Tunnels Below", se: "(3x15)", date: "2022-03-03", link: "https://youtu.be/rMPp8dP1OC0", runtime: "4:42:23"},
    {no: 16, title: "The Shade Mother", se: "(3x16)", date: "2022-03-10", link: "https://youtu.be/O6-NaqWorI0", runtime: "4:12:11"},
    {no: 17, title: "Heart-to-Heartmoor", se: "(3x17)", date: "2022-03-17", link: "https://youtu.be/c66mDHckyoM", runtime: "4:11:29"},
    {no: 18, title: "A Hungry Jungle", se: "(3x18)", date: "2022-03-24", link: "https://youtu.be/f8WY6df598M", runtime: "3:23:12"},
    {no: 19, title: "Omens Above", se: "(3x19)", date: "2022-04-07", link: "https://youtu.be/pPa_O6F5kqs", runtime: "3:55:11"},
    {no: 20, title: "Breaking and Entering...", se: "(3x20)", date: "2022-04-14", link: "https://youtu.be/X9Bc-uuxCm4", runtime: "3:36:17"},
    {no: 21, title: "Fight at the Museum...", se: "(3x21)", date: "2022-04-21", link: "https://youtu.be/4fK2wdBGCYo", runtime: "3:47:43"},
    {no: 22, title: "Promise and Potential", se: "(3x22)", date: "2022-05-05", link: "https://youtu.be/_BfMZwPg4iM", runtime: "4:21:05"},
    {no: 23, title: "To The Skies", se: "(3x23)", date: "2022-05-12", link: "https://youtu.be/rWZMRdLGBu0", runtime: "4:14:52"},
    {no: 24, title: "The Hellcatch Valley", se: "(3x24)", date: "2022-05-19", link: "https://youtu.be/z1wNcUDnoBk", runtime: "3:55:33"},
    {no: 25, title: "A Taste of Tal'Dorei", se: "(3x25)", date: "2022-06-30", link: "https://youtu.be/J7nGbnHRwNA", runtime: "4:23:44"},
    {no: 26, title: "Hidden Truths", se: "(3x26)", date: "2022-07-07", link: "https://youtu.be/UOWp-b9aoWQ", runtime: "4:10:24"},
    {no: 27, title: "A Race for the Prize", se: "(3x27)", date: "2022-07-14", link: "https://youtu.be/AG_niTgmRfY", runtime: "4:01:15"},
    {no: 28, title: "The Deathwish Run", se: "(3x28)", date: "2022-07-21", link: "https://youtu.be/x_fsXdtsnOc", runtime: "4:28:03"},
    {no: 29, title: "Dark Portents", se: "(3x29)", date: "2022-08-04", link: "https://youtu.be/Qu44OYKzNI4", runtime: "3:36:48"},
    {no: 30, title: "Reunion & Revelation", se: "(3x30)", date: "2022-08-11", link: "https://youtu.be/wSx79hobKkk", runtime: "3:37:25"},
    {no: 31, title: "Breaking Point", se: "(3x31)", date: "2022-08-18", link: "https://youtu.be/z7DgP8sgM1A", runtime: "3:52:41"},
    {no: 32, title: "A Stage Set", se: "(3x32)", date: "2022-09-01", link: "https://youtu.be/dsoFNm3AFNw", runtime: "4:34:29"},
    {no: 33, title: "Blood and Dust", se: "(3x33)", date: "2022-09-08", link: "https://youtu.be/7INGKNNmJf8", runtime: "3:56:21"},
    {no: 34, title: "What Dreams May Come", se: "(3x34)", date: "2022-09-15", link: "https://youtu.be/7A_sFLk6MAU", runtime: "3:40:30"},
    {no: 35, title: "Pyrrhic Return", se: "(3x35)", date: "2022-09-22", link: "https://youtu.be/KrOolIMi7PM", runtime: "4:35:30"},
    {no: 36, title: "A Desperate Call", se: "(3x36)", date: "2022-10-06", link: "https://youtu.be/PZF5Mc1mjsk", runtime: "4:16:07"},
    {no: 37, title: "From the Boughs", se: "(3x37)", date: "2022-10-13", link: "https://youtu.be/bWHYmDFR84I", runtime: "4:10:17"},
    {no: 38, title: "A Dark Balance", se: "(3x38)", date: "2022-10-20", link: "https://youtu.be/U5mkmw46m4U", runtime: "4:20:43"}
];

var totalTile1 = {h: 1027, m: 8652, s: 8513};
var totalTile = {h: 1173, m: 33, s: 53};

/*
• Campaign 2, Episode 1: ???min, [3:24:13]
• Campaign 2, Episode 2: ???min, [4:13:06]
• Campaign 2, Episode 3: ???min, [3:59:27]
• Campaign 2, Episode 4: ???min, [3:59:27]
• Campaign 2, Episode 5: ???min, [3:56:12]
• Campaign 2, Episode 6: ???min, [4:08:23]
• Campaign 2, Episode 7: ???min, [4:30:27]
• Campaign 2, Episode 8: ???min, [3:47:09]
• Campaign 2, Episode 9: ???min, [3:43:45]
• Campaign 2, Episode 10: ???min, [4:13:25]
• Campaign 2, Episode 11: ???min, [4:16:49]
• Campaign 2, Episode 12: ???min, [4:16:30]
• Campaign 2, Episode 13: ???min, [4:23:52]
• Campaign 2, Episode 14: ???min, [3:16:55]
• Campaign 2, Episode 15: ???min, [3:51:58]
• Campaign 2, Episode 16: ???min, [4:13:02]
• Campaign 2, Episode 17: ???min, [4:18:00]
• Campaign 2, Episode 18: ???min, [4:27:19]
• Campaign 2, Episode 19: ???min, [3:54:43]
*/
var cleaning = [
    `
    • Campaign 3, Episode 38: 260min, [4:20:44]
    • Campaign 3, Episode 37: 250min, [4:10:18]
    • Campaign 3, Episode 36: 256min, [4:16:08]
    • Campaign 3, Episode 35: 275min, [4:35:31]
    • Campaign 3, Episode 34: 220min, [3:40:31]
    • Campaign 3, Episode 33: 236min, [3:56:22]
    • Campaign 3, Episode 32: 274min, [4:34:30]
    • Campaign 3, Episode 31: 232min, [3:52:42]
    • Campaign 3, Episode 30: 217min, [3:37:26]
    • Campaign 3, Episode 29: 216min, [3:36:48]
    • Campaign 3, Episode 28: 268min, [4:28:03]
    • Campaign 3, Episode 27: 241min, [4:01:16]
    • Campaign 3, Episode 26: 250min, [4:10:25]
    • Campaign 3, Episode 25: 263min, [4:23:45]
    • Campaign 3, Episode 24: 235min, [3:55:34]
    • Campaign 3, Episode 23: 254min, [4:14:53]
    • Campaign 3, Episode 22: 261min, [4:21:06]
    • Campaign 3, Episode 21: 227min, [3:47:44]
    • Campaign 3, Episode 20: 216min, [3:36:18]
    • Campaign 3, Episode 19: 235min, [3:55:12]
    • Campaign 3, Episode 18: 203min, [3:23:13]
    • Campaign 3, Episode 17: 251min, [4:11:30]
    • Campaign 3, Episode 16: 252min, [4:12:12]
    • Campaign 3, Episode 15: 282min, [4:42:24]
    • Campaign 3, Episode 14: 285min, [4:45:08]
    • Campaign 3, Episode 13: 241min, [4:01:01]
    • Campaign 3, Episode 12: 276min, [4:36:53]
    • Campaign 3, Episode 11: 292min, [4:52:19]
    • Campaign 3, Episode 10: 196min, [3:16:30]
    • Campaign 3, Episode 9: 254min, [4:14:36]
    • Campaign 3, Episode 8: 203min, [3:23:00]
    • Campaign 3, Episode 7: 229min, [3:49:38]
    • Campaign 3, Episode 6: 234min, [3:54:58]
    • Campaign 3, Episode 5: 265min, [4:25:35]
    • Campaign 3, Episode 4: 232min, [3:52:13]
    • Campaign 3, Episode 3: 248min, [4:08:42]
    • Campaign 3, Episode 2: 247min, [4:07:40]
    • Campaign 3, Episode 1: 238min, [3:58:25]

    • Campaign 2, Episode 141: 422min, [7:02:57]
    • Campaign 2, Episode 140: 285min, [4:45:46]
    • Campaign 2, Episode 139: 229min, [3:49:59]
    • Campaign 2, Episode 138: 207min, [3:27:48]
    • Campaign 2, Episode 137: 187min, [3:07:42]
    • Campaign 2, Episode 136: 217min, [3:37:30]
    • Campaign 2, Episode 135: 222min, [3:42:58]
    • Campaign 2, Episode 134: 251min, [4:11:08]
    • Campaign 2, Episode 133: 261min, [4:21:33]
    • Campaign 2, Episode 132: 219min, [3:39:20]
    • Campaign 2, Episode 131: 254min, [4:14:51]
    • Campaign 2, Episode 130: 245min, [4:05:33]
    • Campaign 2, Episode 129: 217min, [3:37:55]
    • Campaign 2, Episode 128: 212min, [3:32:49]
    • Campaign 2, Episode 127: 198min, [3:18:22]
    • Campaign 2, Episode 126: 211min, [3:31:24]
    • Campaign 2, Episode 125: 225min, [3:45:25]
    • Campaign 2, Episode 124: 252min, [4:12:28]
    • Campaign 2, Episode 123: 324min, [5:24:28]
    • Campaign 2, Episode 122: 216min, [3:36:50]
    • Campaign 2, Episode 121: 201min, [3:21:15]
    • Campaign 2, Episode 120: 230min, [3:50:42]
    • Campaign 2, Episode 119: 207min, [3:27:29]
    • Campaign 2, Episode 118: 271min, [4:31:33]
    • Campaign 2, Episode 117: 256min, [4:16:05]
    • Campaign 2, Episode 116: 246min, [4:06:44]
    • Campaign 2, Episode 115: 246min, [4:06:44]
    • Campaign 2, Episode 114: 222min, [3:42:46]
    • Campaign 2, Episode 113: 245min, [4:05:53]
    • Campaign 2, Episode 112: 260min, [4:20:09]
    • Campaign 2, Episode 111: 214min, [3:34:59]
    • Campaign 2, Episode 110: 247min, [4:07:31]
    • Campaign 2, Episode 109: 234min, [3:54:30]
    • Campaign 2, Episode 108: 241min, [4:01:46]
    • Campaign 2, Episode 107: 233min, [3:53:58]
    • Campaign 2, Episode 106: 232min, [3:52:54]
    • Campaign 2, Episode 105: 282min, [4:42:22]
    • Campaign 2, Episode 104: 235min, [3:55:37]
    • Campaign 2, Episode 103: 211min, [3:31:34]
    • Campaign 2, Episode 102: 207min, [3:27:04]
    • Campaign 2, Episode 101: 218min, [3:38:54]
    • Campaign 2, Episode 100: 218min, [3:38:06]
    • Campaign 2, Episode 99: 228min, [3:48:14]
    • Campaign 2, Episode 98: 308min, [5:08:25]
    • Campaign 2, Episode 97: 255min, [4:15:07]
    • Campaign 2, Episode 96: 275min, [4:35:28]
    • Campaign 2, Episode 95: 223min, [3:43:26]
    • Campaign 2, Episode 94: 242min, [4:02:41]
    • Campaign 2, Episode 93: 233min, [3:53:31]
    • Campaign 2, Episode 92: 253min, [4:13:25]
    • Campaign 2, Episode 91: 236min, [3:56:05]
    • Campaign 2, Episode 90: 232min, [3:52:30]
    • Campaign 2, Episode 89: 265min, [4:25:23]
    • Campaign 2, Episode 88: 251min, [4:11:35]
    • Campaign 2, Episode 87: 201min, [3:21:13]
    • Campaign 2, Episode 86: 303min, [5:03:25]
    • Campaign 2, Episode 85: 269min, [4:29:54]
    • Campaign 2, Episode 84: 241min, [4:01:41]
    • Campaign 2, Episode 83: 251min, [4:11:06]
    • Campaign 2, Episode 82: 267min, [4:27:09]
    • Campaign 2, Episode 81: 256min, [4:16:42]
    • Campaign 2, Episode 80: 221min, [3:41:13]
    • Campaign 2, Episode 79: 259min, [4:19:39]
    • Campaign 2, Episode 78: 247min, [4:07:56]
    • Campaign 2, Episode 77: 234min, [3:54:26]
    • Campaign 2, Episode 76: 300min, [5:00:32]
    • Campaign 2, Episode 75: 257min, [4:17:38]
    • Campaign 2, Episode 74: 249min, [4:09:24]
    • Campaign 2, Episode 73: 250min, [4:10:11]
    • Campaign 2, Episode 72: 218min, [3:38:08]
    • Campaign 2, Episode 71: 204min, [3:24:18]
    • Campaign 2, Episode 70: 233min, [3:53:13]
    • Campaign 2, Episode 69: 258min, [4:18:31]
    • Campaign 2, Episode 68: 228min, [3:48:53]
    • Campaign 2, Episode 67: 264min, [4:24:26]
    • Campaign 2, Episode 66: 265min, [4:25:05]
    • Campaign 2, Episode 65: 236min, [3:56:28]
    • Campaign 2, Episode 64: 208min, [3:28:58]
    • Campaign 2, Episode 63: 233min, [3:53:18]
    • Campaign 2, Episode 62: 238min, [3:58:58]
    • Campaign 2, Episode 61: 206min, [3:26:38]
    • Campaign 2, Episode 60: 236min, [3:56:02]
    • Campaign 2, Episode 59: 236min, [3:56:06]
    • Campaign 2, Episode 58: 228min, [3:48:20]
    • Campaign 2, Episode 57: 225min, [3:45:15]
    • Campaign 2, Episode 56: 181min, [3:01:17]
    • Campaign 2, Episode 55: 265min, [4:25:29]
    • Campaign 2, Episode 54: 214min, [3:34:58]
    • Campaign 2, Episode 53: 215min, [3:35:06]
    • Campaign 2, Episode 52: 248min, [4:08:50]
    • Campaign 2, Episode 51: 243min, [4:03:30]
    • Campaign 2, Episode 50: 249min, [4:09:09]
    • Campaign 2, Episode 49: 224min, [3:44:27]
    • Campaign 2, Episode 48: 249min, [4:09:03]
    • Campaign 2, Episode 47: 229min, [3:49:23]
    • Campaign 2, Episode 46: 238min, [3:58:53]
    • Campaign 2, Episode 45: 298min, [4:58:55]
    • Campaign 2, Episode 44: 252min, [4:12:20]
    • Campaign 2, Episode 43: 220min, [3:40:13]
    • Campaign 2, Episode 42: 234min, [3:54:33]
    • Campaign 2, Episode 41: 220min, [3:40:43]
    • Campaign 2, Episode 38: 205min, [3:25:49]
    • Campaign 2, Episode 37: 198min, [3:18:29]
    • Campaign 2, Episode 36: 244min, [4:04:54]
    • Campaign 2, Episode 35: 231min, [3:51:26]
    • Campaign 2, Episode 34: 262min, [4:22:53]
    • Campaign 2, Episode 33: 234min, [3:54:10]
    • Campaign 2, Episode 32: 225min, [3:45:22]
    • Campaign 2, Episode 31: 206min, [3:26:35]
    • Campaign 2, Episode 30: 214min, [3:34:07]
    • Campaign 2, Episode 29: 250min, [4:10:58]
    • Campaign 2, Episode 28: 252min, [4:12:18]
    • Campaign 2, Episode 27: 243min, [4:03:18]
    • Campaign 2, Episode 26: 293min, [4:53:29]
    • Campaign 2, Episode 25: 240min, [4:00:26]
    • Campaign 2, Episode 24: 226min, [3:46:09]
    • Campaign 2, Episode 22: 217min, [3:37:06]
    • Campaign 2, Episode 21: 274min, [4:34:15]
    • Campaign 2, Episode 20: 223min, [3:43:42]

    • Campaign 2, Episode 19: ???min, [3:54:43]
    • Campaign 2, Episode 18: ???min, [4:27:19]
    • Campaign 2, Episode 17: ???min, [4:18:00]
    • Campaign 2, Episode 16: ???min, [4:13:02]
    • Campaign 2, Episode 15: ???min, [3:51:58]
    • Campaign 2, Episode 14: ???min, [3:16:55]
    • Campaign 2, Episode 13: ???min, [4:23:52]
    • Campaign 2, Episode 12: ???min, [4:16:30]
    • Campaign 2, Episode 11: ???min, [4:16:49]
    • Campaign 2, Episode 10: ???min, [4:13:25]
    • Campaign 2, Episode 9: ???min, [3:43:45]
    • Campaign 2, Episode 8: ???min, [3:47:09]
    • Campaign 2, Episode 7: ???min, [4:30:27]
    • Campaign 2, Episode 6: ???min, [4:08:23]
    • Campaign 2, Episode 5: ???min, [3:56:12]
    • Campaign 2, Episode 4: ???min, [3:59:27]
    • Campaign 2, Episode 3: ???min, [3:59:27]
    • Campaign 2, Episode 2: ???min, [4:13:06]
    • Campaign 2, Episode 1: ???min, [3:24:13]

    `
]

var time = `• | 	4:20:44 | A Dark Balance | Critical Role | Campaign 3, Episode 38	 | •
• | 	4:10:18 | From the Boughs | Critical Role | Campaign 3, Episode 37	 | •
• | 	4:16:08 | A Desperate Call | Critical Role | Campaign 3, Episode 36	 | •
• | 	2:07:20 | Fun Scary | 4-Sided Dive | Episode 7: Discussing Up To C3E35	 | •
• | 	4:35:31 | Pyrrhic Return | Critical Role | Campaign 3, Episode 35	 | •
• | 	3:40:31 | What Dreams May Come | Critical Role | Campaign 3, Episode 34	 | •
• | 	3:56:22 | Blood and Dust | Critical Role | Campaign 3, Episode 33	 | •
• | 	1:51:33 | Liam Laudna-Hands | 4-Sided Dive | Episode 6: Discussing Up To C3E32	 | •
• | 	4:34:30 | A Stage Set | Critical Role | Campaign 3, Episode 32	 | •
• | 	2:06 | Level Up: Bells Hells Roll Hit Points For Level 7!	 | •
• | 	3:52:42 | Breaking Point | Critical Role | Campaign 3, Episode 31	 | •
• | 	3:37:26 | Reunion & Revelation | Critical Role | Campaign 3, Episode 30	 | •
• | 	2:00:38 | From Dusk Till Faun | 4-Sided Dive | Episode 5: Discussing Up To C3E29	 | •
• | 	3:36:48 | Dark Portents | Critical Role | Campaign 3, Episode 29	 | •
• | 	7:48 | Weird Magic | Crit Recap Animated | Campaign 2, Episodes 113-141	 | •
• | 	58:56 | San Diego Comic-Con 2022 - Critical Role Q&A Panel	 | •
• | 	4:28:03 | The Deathwish Run | Critical Role | Campaign 3, Episode 28	 | •
• | 	4:01:16 | A Race for the Prize | Critical Role | Campaign 3, Episode 27	 | •
• | 	1:50:18 | Exandria Unlimited: Calamity Wrap-Up	 | •
• | 	4:10:25 | Hidden Truths | Critical Role | Campaign 3, Episode 26	 | •
• | 	2:08:25 | Independent Witches | 4-Sided Dive | Episode 4: Discussing Up To C3E24 & Calamity	 | •
• | 	4:23:45 | A Taste of Tal'Dorei | Critical Role | Campaign 3, Episode 25	 | •
• | 	2:03 | New Animated Campaign 3 Opening Title | It’s Thursday Night (Critical Role Theme)	 | •
• | 	1:50:32 | Game Masters of Exandria Roundtable	 | •
• | 	3:49:06 | A Familiar Problem: Sprinkle’s Incredible Journey!	 | •
• | 	6:07:34 | Fire and Ruin | Exandria Unlimited: Calamity | Episode 4	 | •
• | 	3:42 | Bard College of Tragedy Subclass | Tal'Dorei Reborn	 | •
• | 	5:21:37 | Blood and Shadow | Exandria Unlimited: Calamity | Episode 3	 | •
• | 	1:42:39 | Fly Into The Danger Zone | 4-Sided Dive | Episode 3: Discussing Up To C3E24	 | •
• | 	4:37:57 | Bitterness and Dread | Exandria Unlimited: Calamity | Episode 2	 | •
• | 	4:10:47 | Excelsior | Exandria Unlimited: Calamity | Episode 1	 | •
• | 	3:55:34 | The Hellcatch Valley | Critical Role | Campaign 3, Episode 24	 | •
• | 	4:14:53 | To The Skies | Critical Role | Campaign 3, Episode 23	 | •
• | 	1:07 | Exandria Unlimited: Calamity Premieres Thursday, May 26th! | Trailer	 | •
• | 	4:21:06 | Promise and Potential | Critical Role | Campaign 3, Episode 22	 | •
• | 	1:47:14 | Party of NPCs | 4-Sided Dive | Episode 2: Discussing Up to C3E21	 | •
• | 	1:24:36 | Dignity: An Adventure with Stephen Colbert by Critical Role Foundation to Benefit Red Nose Day	 | •
• | 	3:47:44 | Fight at the Museum… | Critical Role | Campaign 3, Episode 21	 | •
• | 	3:36:18 | Breaking and Entering... | Critical Role | Campaign 3, Episode 20	 | •
• | 	1:00:08 | #EverythingIsContent - ELEX II	 | •
• | 	3:55:12 | Omens Above | Critical Role | Campaign 3, Episode 19	 | •
• | 	1:44:30 | Silken Secrets | 4-Sided Dive | Episode 1: Discussing Up to C3E18	 | •
• | 	4:54:05 | Exandria Unlimited: Kymal | Part 2	 | •
• | 	4:26:06 | Exandria Unlimited: Kymal | Part 1	 | •
• | 	3:35:41 | Tiny Tina's Wonderlands One-Shot	 | •
• | 	3:23:13 | A Hungry Jungle | Critical Role | Campaign 3, Episode 18	 | •
• | 	1:12:33 | #EverythingIsContent - Demeo Quest Night	 | •
• | 	4:11:30 | Heart-to-Heartmoor | Critical Role | Campaign 3, Episode 17	 | •
• | 	3:13 | 7-Year Anniversary Blooper Reel	 | •
• | 	4:12:12 | The Shade Mother | Critical Role | Campaign 3, Episode 16	 | •
• | 	8:28 | State of the Role: 7-Year Anniversary Celebration & New Show Updates! | Spring 2022	 | •
• | 	4:42:24 | The Tunnels Below | Critical Role | Campaign 3, Episode 15	 | •
• | 	4:37:09 | Elden Ring One-Shot: O Ye of Little Faith	 | •
• | 	5:44 | Family Ties | Crit Recap Animated | Campaign 2, Episodes 92-112	 | •
• | 	1:17:55 | The Legend of Vox Machina Episodes 10-12 Q&A	 | •
• | 	4:45:08 | In Too Deep | Critical Role | Campaign 3, Episode 14	 | •
• | 	59:39 | The Legend of Vox Machina Episodes 7-9 Q&A	 | •
• | 	4:01:01 | A Dance of Deception | Critical Role | Campaign 3, Episode 13	 | •
• | 	1:03:23 | The Legend of Vox Machina Episodes 4-6 Q&A	 | •
• | 	4:36:53 | Make It Fashion | Critical Role | Campaign 3, Episode 12	 | •
• | 	2:15 | Level Up: Our Campaign 3 Party Rolls Hit Points For Level 5!	 | •
• | 	58:06 | The Legend of Vox Machina Episodes 1-3 Q&A	 | •
• | 	3:54:03 | Guest Battle Royale	 | •
• | 	4:52:19 | Chasing Nightmares | Critical Role | Campaign 3, Episode 11	 | •
• | 	13:27 | The Legend of the Cast of The Legend of Vox Machina	 | •
• | 	1:34 | AVAILABLE NOW: Tal’Dorei Campaign Setting Reborn	 | •
• | 	3:16:30 | Ghosts, Dates, and Darker Fates | Critical Role | Campaign 3, Episode 10	 | •
• | 	4:14:36 | Thicker Grows the Meal and Plot | Critical Role | Campaign 3, Episode 9	 | •
• | 	3:23:00 | A Woodworker’s Quandary | Critical Role | Campaign 3, Episode 8	 | •
• | 	5:05 | The Sword & The Angel | Crit Recap Animated | Campaign 2, Episodes 70-91	 | •
• | 	44:49 | Kith & Kin Fireside Chat Q&A	 | •
• | 	3:49:38 | Behind the Curtain | Critical Role | Campaign 3, Episode 7	 | •
• | 	2:01 | Campaign 3 Opening Title | It’s Thursday Night (Critical Role Theme)	 | •
• | 	3:54:58 | Growing Bonds and Teasing Threads | Critical Role | Campaign 3, Episode 6	 | •
• | 	4:25:35 | The Threat Between the Walls | Critical Role | Campaign 3, Episode 5	 | •
• | 	3:52:13 | On the Trail of a Killer | Critical Role | Campaign 3, Episode 4	 | •
• | 	4:08:42 | The Trail and the Toll | Critical Role | Campaign 3, Episode 3	 | •
• | 	4:07:40 | Trial by Firelight | Critical Role | Campaign 3, Episode 2	 | •
• | 	4:28:56 | Part III: The Golden Goose | The Elder Scrolls Online: Blackwood	 | •
• | 	55:26 | #EverythingIsContent - Elder Scrolls Online: Blackwood Part 4 | An Apocalyptic Situation	 | •
• | 	3:58:25 | The Draw of Destiny | Critical Role | Campaign 3, Episode 1	 | •
• | 	8:46 | Campaign 3: Behind the Set	 | •
• | 	55:17 | Narrative Telephone: The Breakup Lettah	 | •
• | 	5:34 | The Other Side | Crit Recap Animated | Campaign 2, Episodes 48-69	 | •
• | 	9:56 | Exandria: An Intimate History | Narrated by Matthew Mercer	 | •
• | 	7:47 | State of the Role: Campaign 3 Announcement | Fall 2021	 | •
• | 	1:02:36 | Narrative Telephone: The Curious Casanova	 | •
• | 	1:02:24 | Mighty Vibes Vol 6: Lofi Beats to Study with Your Twin to	 | •
• | 	3:23:20 | The Nautilus Ark: A Johnson Corp Odyssey | Ashley's One-Shot	 | •
• | 	4:45 | Help Support Shanti Bhavan Students in India! | Critical Role Foundation	 | •
• | 	1:46:00 | Exandria Unlimited Wrap-Up	 | •
• | 	11:06 | The Legend of the Music of The Legend of Vox Machina	 | •
• | 	4:19:53 | Part II: A Faulty Foundation | The Elder Scrolls Online: Blackwood	 | •
• | 	1:00:59 | #EverythingIsContent - Elder Scrolls Online: Blackwood Part 3 | Shattered and Scattered	 | •
• | 	4:45 | Adventure on the High Seas | Crit Recap Animated | Campaign 2, Episodes 36-47	 | •
• | 	3:32:30 | What Comes Next | Exandria Unlimited | Episode 8	 | •
• | 	6:50 | Crew & A Episode 6: Origin Stories | The Legend of Vox Machina	 | •
• | 	4:02:32 | Beyond the Heart City | Exandria Unlimited | Episode 7	 | •
• | 	4:45:12 | The Gift Among the Green | Exandria Unlimited | Episode 6	 | •
• | 	12:05 | The Legend of the Voices of The Legend of Vox Machina	 | •
• | 	3:55:29 | A Test of Worth | Exandria Unlimited | Episode 5	 | •
• | 	4:25:33 | By the Road | Exandria Unlimited | Episode 4	 | •
• | 	4:19 | Crew & A Episode 5: Talkin' Bout Titmouse | The Legend of Vox Machina	 | •
• | 	3:17:56 | A Glorious Return | Exandria Unlimited | Episode 3	 | •
• | 	1:06:48 | Critter Hug: Impossible Bard Make Up | Summer 2021	 | •
• | 	3:46 | Iron & Blood | Crit Recap Animated | Campaign 2, Episodes 26-35	 | •
• | 	3:57:40 | The Oh No Plateau | Exandria Unlimited | Episode 2	 | •
• | 	1:04:17 | Let’s Play Uk’otoa!	 | •
• | 	4:09:18 | The Nameless Ones | Exandria Unlimited | Episode 1	 | •
• | 	1:46 | Exandria Unlimited Opening Title	 | •
• | 	10:02 | The Legend of the Design of The Legend of Vox Machina	 | •
• | 	4:11:18 | Critical Role Campaign 2 Wrap-Up	 | •
• | 	4:19:53 | Vox Machina vs. Mighty Nein	 | •
• | 	2:11 | How to Play Uk’otoa from Darrington Press	 | •
• | 	7:02 | Exandria Unlimited: Meet the Players	 | •
• | 	12:37 | State of the Role: Revealing our Super Top Secret Project!	 | •
• | 	7:02:57 | Fond Farewells | Critical Role | Campaign 2, Episode 141	 | •
• | 	4:45:46 | Long May He Reign | Critical Role | Campaign 2, Episode 140	 | •
• | 	53:08 | #EverythingIsContent - Elder Scrolls Online: Blackwood Part 2 | A Mortal's Touch	 | •
• | 	57:08 | Talks Machina: Discussing Up to C2E139 - Rebirth	 | •
• | 	3:37:06 | Part I: Death & Taxes | The Elder Scrolls Online: Blackwood	 | •
• | 	3:49:59 | Rebirth | Critical Role | Campaign 2, Episode 139	 | •
• | 	1:03:51 | Narrative Telephone Round 2 Ep. 8: Of Heists and Horses	 | •
• | 	4:04 | The Gentleman’s Bargain | Crit Recap Animated | Campaign 2, Episodes 17-25	 | •
• | 	5:38 | Crew & A Episode 4: Exploring Exandria | The Legend of Vox Machina	 | •
• | 	3:27:48 | Where There Is A Will... | Critical Role | Campaign 2, Episode 138	 | •
• | 	53:06 | Talks Machina: Discussing Up to C2E137 - Welcome to Cognouza	 | •
• | 	2:18 | Uk’otoa Sea Shanty	 | •
• | 	3:07:42 | Welcome to Cognouza | Critical Role | Campaign 2, Episode 137	 | •
• | 	2:37 | The Mighty Nein Roll Hit Points for Level 15	 | •
• | 	3:37:30 | Hell or High Water | Critical Role | Campaign 2, Episode 136	 | •
• | 	59:29 | Talks Machina: Discussing Up to C2E135 - The Genesis Ward	 | •
• | 	3:42:58 | The Genesis Ward | Critical Role | Campaign 2, Episode 135	 | •
• | 	1:13:18 | Narrative Telephone Round 2 Ep. 7: Chutney's Christmas Vacation	 | •
• | 	5:39 | Crew & A Episode 3: Let's Talk About RPGs! | The Legend of Vox Machina	 | •
• | 	4:11:08 | The Streets of the Forgotten | Critical Role | Campaign 2, Episode 134	 | •
• | 	1:03:13 | Talks Machina: Discussing Up to C2E133 - Hunter and Hunted	 | •
• | 	4:17 | Secrets of Zadash | Crit Recap Animated | Campaign 2, Episodes 9-16	 | •
• | 	4:21:33 | Hunter and Hunted | Critical Role | Campaign 2, Episode 133	 | •
• | 	53:02 | Mighty Vibes Vol 5: Lofi Beats with a Light Breeze [Zephrah Radio]	 | •
• | 	3:39:20 | Aeor | Critical Role | Campaign 2, Episode 132	 | •
• | 	56:25 | #EverythingIsContent - Elder Scrolls Online: Blackwood	 | •
• | 	1:19:16 | Talks Machina: Discussing Up to C2E131 - Into the Eye	 | •
• | 	2:50 | Welcome to Critical Role Land!	 | •
• | 	4:14:51 | Into the Eye | Critical Role | Campaign 2, Episode 131	 | •
• | 	4:33 | Crew & A Episode 2: Playing Favorites | The Legend of Vox Machina	 | •
• | 	4:05:33 | The Calm Before The Storm | Critical Role | Campaign 2, Episode 130	 | •
• | 	1:04:49 | Talks Machina: Discussing Up to C2E129 - Between a Ball and a Hot Place	 | •
• | 	1:15:46 | Narrative Telephone Round 2 Ep. 6: Familiar Feywild Fables	 | •
• | 	3:37:55 | Between a Ball and a Hot Place | Critical Role | Campaign 2, Episode 129	 | •
• | 	3:32:49 | Cat and Mouse | Critical Role | Campaign 2, Episode 128	 | •
• | 	1:31:33 | Talks Machina: Discussing Up to C2E127 - Sarsaparilla, Licorice, and Red Hot	 | •
• | 	3:18:22 | Sarsaparilla, Licorice, and Red Hot | Critical Role | Campaign 2, Episode 127	 | •
• | 	1:11:51 | Critter Hug: DM Combat Banquet | Winter 2021	 | •
• | 	5:06 | Crew & A Episode 1: Getting to Know You | The Legend of Vox Machina	 | •
• | 	3:31:24 | Worth Fighting For | Critical Role | Campaign 2, Episode 126	 | •
• | 	2:18:02 | Diablo One Shot | BlizzConline 2021	 | •
• | 	58:41 | Talks Machina: Discussing Up to C2E125 - The Neverending Day	 | •
• | 	59:45 | Narrative Telephone Round 2 Ep. 5: Questions & Quackery	 | •
• | 	3:56 | Come Together | Crit Recap Animated | Campaign 2, Episodes 1-8	 | •
• | 	3:45:25 | The Neverending Day | Critical Role | Campaign 2, Episode 125	 | •
• | 	52:26 | Mighty Vibes Vol 4: Lofi Beats for Best Buddies to Listen To	 | •
• | 	4:12:28 | A Walk to Warmer Welcomes | Critical Role | Campaign 2, Episode 124	 | •
• | 	1:15:36 | Talks Machina: Discussing Up to C2E123 - Fair-weather Faith	 | •
• | 	5:24:28 | Fair-weather Faith | Critical Role | Campaign 2, Episode 123	 | •
• | 	3:36:50 | Nothing Ventured, Nothing Gained | Critical Role | Campaign 2, Episode 122	 | •
• | 	1:23:09 | Talks Machina: Discussing Up to C2E121 - Ice and Fire	 | •
• | 	1:21:24 | Narrative Telephone Round 2 Ep. 4: Mica Burton Murders Cast of Critical Role	 | •
• | 	3:21:15 | Ice and Fire | Critical Role | Campaign 2, Episode 121	 | •
• | 	3:07 | Meet the Mighty Nein | Crit Recap Animated	 | •
• | 	3:50:42 | Contentious Company | Critical Role | Campaign 2, Episode 120	 | •
• | 	1:26:46 | Talks Machina: Discussing Up to C2E119 - Malice and Mystery Below	 | •
• | 	1:01:21 | Narrative Telephone Round 2 Ep. 3: The Night Before Winter's Crest	 | •
• | 	3:27:29 | Malice and Mystery Below | Critical Role | Campaign 2, Episode 119	 | •
• | 	4:31:33 | Solace Between the Secrets | Critical Role | Campaign 2, Episode 118	 | •
• | 	8:19 | Animation 101 with Sam Riegel | The Legend of Vox Machina	 | •
• | 	4:16:05 | The Tortoise and The Dare | Critical Role | Campaign 2, Episode 117	 | •
• | 	1:24:40 | Narrative Telephone Round 2 Ep. 2: Two Brothers, One Coast	 | •
• | 	4:06:44 | Under Timeless Ice | Critical Role | Campaign 2, Episode 116	 | •
• | 	1:08:00 | Talks Machina: Discussing Up to C2E115 - Fetching Fables & Frosty Friends	 | •
• | 	7:15 | Unboxing Pops Machina with Brian W. Foster	 | •
• | 	4:06:44 | Fetching Fables & Frosty Friends | Critical Role | Campaign 2, Episode 115	 | •
• | 	3:42:46 | An Open Window | Critical Role | Campaign 2, Episode 114	 | •
• | 	1:20:37 | Talks Machina: Discussing Up to C2E113 - A Heart Grown Cold	 | •
• | 	1:16:59 | Critter Hug: Crafting Grandma's Tale | Fall 2020	 | •
• | 	4:05:53 | A Heart Grown Cold | Critical Role | Campaign 2, Episode 113	 | •
• | 	1:24:05 | Narrative Telephone Round 2 Ep. 1: Return of the Matt	 | •
• | 	4:20:09 | The Chase Begins | Critical Role | Campaign 2, Episode 112	 | •
• | 	1:37:20 | Talks Machina: Discussing Up to C2E111 with Taliesin Jaffe and Marisha Ray	 | •
• | 	1:40:08 | Talks Machina: Discussing Up to C2E111 with Liam O'Brien and Ashley Johnson	 | •
• | 	3:34:59 | New Homes and Old Friends | Critical Role | Campaign 2, Episode 111	 | •
• | 	3:30 | Introducing Critical Role Foundation!	 | •
• | 	4:07:31 | Dinner with the Devil | Critical Role | Campaign 2, Episode 110	 | •
• | 	1:26:34 | Talks Machina: Discussing Up to C2E109 - Frigid Propositions	 | •
• | 	3:54:30 | Frigid Propositions | Critical Role | Campaign 2, Episode 109	 | •
• | 	1:22 | Talks Machina Returns Tuesday, September 15th!	 | •
• | 	4:01:46 | Traveler Con | Critical Role | Campaign 2, Episode 108	 | •
• | 	3:53:58 | Devoutness and Dicks | Critical Role | Campaign 2, Episode 107	 | •
• | 	1:18:18 | Critter Hug: Space Valentine Inc | Summer 2020	 | •
• | 	9:37 | The Legend of the World of The Legend of Vox Machina	 | •
• | 	3:52:54 | A Fog Lifted | Critical Role | Campaign 2, Episode 106	 | •
• | 	4:42:22 | Rumble at Rumblecusp | Critical Role | Campaign 2, Episode 105	 | •
• | 	1:23:13 | Mini Primetime: After Dark	 | •
• | 	3:55:37 | The Ruined Sliver | Critical Role | Campaign 2, Episode 104	 | •
• | 	1:03:02 | AWNP: Unplugged with Laura Bailey | Ep. 8	 | •
• | 	3:31:34 | Maritime Mysteries | Critical Role | Campaign 2, Episode 103	 | •
• | 	1:01:17 | Narrative Telephone Ep. 8: Grog's Vlog	 | •
• | 	3:27:04 | Ghosts, Dinosaurs, and Stuff | Critical Role | Campaign 2, Episode 102	 | •
• | 	59:53 | AWNP: Unplugged with Marisha Ray | Ep. 7	 | •
• | 	3:38:54 | Mysteries, Memories, and Music | Critical Role | Campaign 2, Episode 101	 | •
• | 	54:26 | Mighty Vibes Vol 3: Chill Tunes to Drink Tea/Meditate To	 | •
• | 	1:18:28 | Narrative Telephone Ep. 7: Caduceus' Cautionary Chronicle	 | •
• | 	3:38:06 | Hunted at Sea | Critical Role | Campaign 2, Episode 100	 | •
• | 	1:02:23 | AWNP: Unplugged with Travis Willingham | Ep. 6	 | •
• | 	56:37 | Yee-Haw Off the Ranch: Lovers In a Dangerous Spacetime ROUND 2	 | •
• | 	3:31 | The Mighty Nein Roll Hit Points for Level 12	 | •
• | 	1:06:37 | Narrative Telephone Ep. 6: Story of Beau's	 | •
• | 	4:54 | State of the Role: Critical Role Return Updates	 | •
• | 	1:17:51 | AWNP: Unplugged with Khary Payton | Ep. 5	 | •
• | 	1:00:07 | Yee-Haw Off the Ranch: Lovers in a Dangerous Spacetime	 | •
• | 	1:22:42 | Narrative Telephone Ep. 5: Pike's Purple Jewel Cake	 | •
• | 	47:29 | CR GUIDE	 | •
• | 	1:14:36 | Narrative Telephone Ep. 4: Widogast's Web of Words	 | •
• | 	1:07:40 | AWNP: Unplugged with Matthew Mercer | Ep. 4	 | •
• | 	52:17 | Mighty Vibes Vol 2: Chill Tunes to Study/Transcribe Magic To	 | •
• | 	58:10 | Yee-Haw Off the Ranch: Yoshi's Crafted World	 | •
• | 	1:03:01 | AWNP: Unplugged with Taliesin Jaffe | Ep 3	 | •
• | 	1:00:05 | Narrative Telephone Ep. 3: Scanlan's Love Story	 | •
• | 	1:05:08 | Yee-Haw Off the Ranch: Moving Out	 | •
• | 	12:04 | Critter Hug: Laser Drag Battles!	 | •
• | 	51:44 | AWNP: Unplugged with Ashley Johnson | Ep. 2	 | •
• | 	1:01:33 | Narrative Telephone Ep. 2: Jester's Tall Tale	 | •
• | 	49:49 | Mighty Vibes Vol 1: Lo-fi Beats to Doodle To	 | •
• | 	1:16:54 | Yee-Haw Off the Ranch: Unravel Two	 | •
• | 	57:03 | AWNP: Unplugged Ep. 1	 | •
• | 	33:05 | Narrative Telephone Ep. 1: Pumat's Stroll	 | •
• | 	52:24 | All Work No Play: Blacksmithing with Mica Burton! | S2E5	 | •
• | 	1:50 | Your Turn to Roll - Karaoke Music Video	 | •
• | 	1:24 | Critter Hug Premieres Monday, May 4th!	 | •
• | 	1:43:53 | Explorer's Guide to Wildemount Q&A and Fireside Chat with Matthew Mercer	 | •
• | 	56:51 | All Work No Play: Spa Gauntlet with Noelle Stevenson and Satine Phoenix! | S2E4	 | •
• | 	3:42:12 | DOOM Eternal One-Shot	 | •
• | 	3:48:14 | High Seas, High Stakes | Critical Role | Campaign 2, Episode 99	 | •
• | 	1:07:34 | Talks Machina: Discussing C2E98 - Dark Waters	 | •
• | 	5:08:25 | Dark Waters | Critical Role | Campaign 2, Episode 98	 | •
• | 	1:06:13 | Talks Machina: Discussing C2E97 - The Fancy and the Fooled	 | •
• | 	53:36 | All Work No Play: Magic with Ashly Burch! | S2E3	 | •
• | 	4:15:07 | The Fancy and the Fooled | Critical Role | Campaign 2, Episode 97 - Live from Chicago!	 | •
• | 	1:04:57 | Talks Machina: Discussing C2E96 - Family Shatters	 | •
• | 	1:01:31 | #EverythingIsContent: Two Point Hospital	 | •
• | 	4:35:28 | Family Shatters | Critical Role | Campaign 2, Episode 96	 | •
• | 	8:32 | The Legend of the Story of the Legend of Vox Machina	 | •
• | 	1:07:39 | Talks Machina: Discussing C2E95 - Blessing In Disguise	 | •
• | 	56:18 | All Work No Play: Ghost Hunting with Laura Bailey | S2E2	 | •
• | 	3:43:26 | Blessing In Disguise | Critical Role | Campaign 2, Episode 95	 | •
• | 	4:35:57 | Cinderbrush: A Monsterhearts Story (A Critical Role One-Shot)	 | •
• | 	1:05:09 | Talks Machina: Discussing C2E94 - With Great Power...	 | •
• | 	4:02:41 | With Great Power... | Critical Role | Campaign 2, Episode 94	 | •
• | 	5:47 | Handbooker Helper: Monsterhearts 2	 | •
• | 	1:03:50 | Talks Machina: Discussing C2E93 - Misery Loves Company	 | •
• | 	46:48 | All Work No Play: Chainsaw Art with Julie Nathanson | S2E1	 | •
• | 	3:53:31 | Misery Loves Company | Critical Role | Campaign 2, Episode 93	 | •
• | 	1:08:41 | Talks Machina: Discussing C2E92 - Home Is Where the Heart Is	 | •
• | 	4:13:25 | Home Is Where the Heart Is | Critical Role | Campaign 2, Episode 92	 | •
• | 	1:55 | All Work No Play Season 2 Premieres Tuesday, February 4th!	 | •
• | 	1:03:25 | Talks Machina: Discussing C2E91 - Stone to Clay	 | •
• | 	3:56:05 | Stone to Clay | Critical Role | Campaign 2, Episode 91	 | •
• | 	1:13:10 | Talks Machina: Discussing C2E89-90 - Lingering Wounds & Bathhouses and Bastions	 | •
• | 	3:52:30 | Bathhouses and Bastions | Critical Role | Campaign 2, Episode 90	 | •
• | 	4:25:23 | Lingering Wounds | Critical Role | Campaign 2, Episode 89	 | •
• | 	1:23:50 | Talks Machina Ep 100: Discussing C2E51 - Xhorhas	 | •
• | 	1:19:31 | Talks Machina: Discussing C2E50 - The Endless Burrows	 | •
• | 	1:19:16 | Talks Machina: Discussing C2E49 - A Game of Names	 | •
• | 	1:13:08 | Talks Machina: Discussing C2E48 - Homeward Bound	 | •
• | 	1:17:03 | Talks Machina: Discussing C2E47 - The Second Seal	 | •
• | 	1:26:41 | Talks Machina: Discussing Campaign 2 So Far	 | •
• | 	1:16:52 | Talks Machina: Discussing C2E45 - The Stowaway	 | •
• | 	1:18:07 | Talks Machina: Discussing C2E44 - The Diver's Grave	 | •
• | 	1:18:04 | Talks Machina: Discussing C2E43 - In Hot Water	 | •
• | 	1:15:53 | Talks Machina: Discussing C2E42 - A Hole in the Plan	 | •
• | 	1:16:29 | Talks Machina: Discussing C2E41 - A Pirate's Life for Me	 | •
• | 	1:17:02 | Talks Machina: Discussing C2E40 - Dubious Pursuits	 | •
• | 	1:17:50 | Talks Machina: Discussing Laura's One Shot - The Club of Misfits	 | •
• | 	1:16:55 | Talks Machina: Discussing C2E39 - Temple of the False Serpent	 | •
• | 	1:15:10 | Talks Machina: Discussing C2E38 - Welcome to the Jungle	 | •
• | 	1:22:51 | Talks Machina: Discussing C2E37 - Dangerous Liaisons	 | •
• | 	1:17:07 | Talks Machina: Discussing C2E36 - O Captain, Who's Captain?	 | •
• | 	1:21:50 | Talks Machina: Discussing C2E35 - Dockside Diplomacy	 | •
• | 	1:18:18 | Talks Machina: Discussing C2E34 - Encroaching Waters	 | •
• | 	1:17:18 | Talks Machina: Discussing C2E33 - The Ruby and the Sapphire	 | •
• | 	1:18:34 | Talks Machina: Discussing C2E32 - Beyond the Boundaries	 | •
• | 	1:25:15 | Talks Machina: Discussing C2E31- Commerce & Chaos	 | •
• | 	1:15:54 | Talks Machina: Discussing C2E30 - The Journey Home	 | •
• | 	1:17:08 | Talks Machina: Discussing C2E29 - The Stalking Nightmare	 | •
• | 	1:19:30 | Talks Machina: Discussing C2E27-28 - Converging Fury & Within the Nest	 | •
• | 	1:02:39 | Live from San Diego Comic Con 2018 | Talks Machina	 | •
• | 	1:23:43 | Talks Machina: Discussing C2E26 - Found & Lost	 | •
• | 	1:18:56 | Talks Machina: Discussing C2E25 - Divergent Paths	 | •
• | 	1:16:00 | Talks Machina: Discussing C2E24 - The Hour of Honor	 | •
• | 	1:21:11 | Talks Machina: Discussing C2E23 - Have Bird, Will Travel	 | •
• | 	1:20:17 | Talks Machina: Discussing C2E22 - Lost Treasures	 | •
• | 	1:22:03 | Talks Machina: Discussing C2E21 - Stalker in the Swamp	 | •
• | 	1:19:09 | Talks Machina: Discussing C2E20 - Labenda Awaits	 | •
• | 	1:21:30 | Talks Machina: Discussing C2E19 - The Gentleman's Path	 | •
• | 	4:37:23 | Liam’s One-Shot: The Song of the Lorelei	 | •
• | 	2:47:49 | Critical Role and the Club of Misfits (Laura's One-Shot)	 | •
• | 	1:39 | Mighty Nein Animated Intro - Your Turn To Roll	 | •
• | 	4:03:30 | Xhorhas | Critical Role | Campaign 2, Episode 51	 | •
• | 	4:09:09 | The Endless Burrows | Critical Role | Campaign 2, Episode 50	 | •
• | 	1:43:53 | End of 2019 Fireside Chat	 | •
• | 	3:44:27 | A Game of Names | Critical Role | Campaign 2, Episode 49	 | •
• | 	4:09:03 | Homeward Bound | Critical Role | Campaign 2, Episode 48	 | •
• | 	3:49:23 | The Second Seal | Critical Role | Campaign 2, Episode 47	 | •
• | 	3:58:53 | A Storm of Memories | Critical Role | Campaign 2, Episode 46	 | •
• | 	4:58:55 | The Stowaway | Critical Role | Campaign 2, Episode 45	 | •
• | 	4:12:20 | The Diver's Grave | Critical Role | Campaign 2, Episode 44	 | •
• | 	3:40:13 | In Hot Water | Critical Role | Campaign 2, Episode 43	 | •
• | 	3:54:33 | A Hole in the Plan | Critical Role | Campaign 2, Episode 42	 | •
• | 	3:40:43 | A Pirate's Life for Me | Critical Role | Campaign 2, Episode 41	 | •
• | 	3:10:40 | Dubious Pursuits | Critical Role| Campaign 2, Episode 40	 | •
• | 	4:21:51 | Temple of the False Serpent | Critical Role| Campaign 2, Episode 39	 | •
• | 	3:25:49 | Welcome to the Jungle | Critical Role | Campaign 2, Episode 38	 | •
• | 	3:18:29 | Dangerous Liaisons | Critical Role | Campaign 2, Episode 37 - Live from New York!	 | •
• | 	4:04:54 | O Captain, Who's Captain? | Critical Role | Campaign 2, Episode 36	 | •
• | 	3:51:26 | Dockside Diplomacy | Critical Role | Campaign 2, Episode 35	 | •
• | 	4:22:53 | Encroaching Waters | Critical Role | Campaign 2, Episode 34	 | •
• | 	3:54:10 | The Ruby and the Sapphire | Critical Role | Campaign 2, Episode 33	 | •
• | 	3:45:22 | Beyond the Boundaries | Critical Role | Campaign 2, Episode 32	 | •
• | 	3:26:35 | Commerce & Chaos | Critical Role | Campaign 2, Episode 31	 | •
• | 	3:34:07 | The Journey Home | Critical Role | Campaign 2, Episode 30	 | •
• | 	4:10:58 | The Stalking Nightmare | Critical Role | Campaign 2, Episode 29 - Live from Indianapolis!	 | •
• | 	4:12:18 | Within the Nest | Critical Role | Campaign 2, Episode 28	 | •
• | 	4:03:18 | Converging Fury | Critical Role | Campaign 2, Episode 27	 | •
• | 	4:53:29 | Found & Lost | Critical Role | Campaign 2, Episode 26	 | •
• | 	4:00:26 | Divergent Paths | Critical Role | Campaign 2, Episode 25	 | •
• | 	3:46:09 | The Hour of Honor | Critical Role | Campaign 2, Episode 24	 | •
• | 	3:57:35 | Have Bird, Will Travel | Critical Role | Campaign 2 Episode 23	 | •
• | 	3:37:06 | Lost Treasures | Critical Role | Campaign 2, Episode 22	 | •
• | 	4:34:15 | Stalker in the Swamp | Critical Role | Campaign 2, Episode 21	 | •
• | 	3:43:42 | Labenda Awaits | Critical Role | Campaign 2, Episode 20	 | •
• | 	1:04:15 | Talks Machina: Discussing C2E88 - Unwanted Reunions	 | •
• | 	1:03:16 | Travis' Yee-Haw Game Ranch: Super Smash Bros. Ultimate | S2E10	 | •
• | 	15:29 | Fine Details with Taliesin Jaffe | MINI PRIMETIME	 | •
• | 	6:36 | Critical Recap -- Episode 88: Unwanted Reunions	 | •
• | 	4:11:35 | Unwanted Reunions | Critical Role | Campaign 2, Episode 88	 | •
• | 	1:02:18 | Talks Machina: Discussing C2E87 - Punishment and Politics	 | •
• | 	23:29 | Battle Damage with Travis Willingham: MINI PRIMETIME	 | •
• | 	5:37 | Critical Recap -- Episode 87: Politics and Punishment	 | •
• | 	3:21:13 | Punishment and Politics | Critical Role | Campaign 2, Episode 87	 | •
• | 	1:42:31 | #EverythingIsContent: Disney Villainous	 | •
• | 	1:35:24 | Drawing Action Poses with Sung Jin from Titmouse | Pub Draw S2E7	 | •
• | 	1:09:03 | Travis' Yee-Haw Game Ranch: Super Mario Party | S2E9	 | •
• | 	20:04 | Painting Age and Skin Tones with Matthew Mercer | MINI PRIMETIME	 | •
• | 	4:36:12 | The Adventures of the Darrington Brigade	 | •
• | 	1:02:17 | Talks Machina: Discussing C2E86 - The Cathedral	 | •
• | 	23:12 | Basing with Laura Bailey | MINI PRIMETIME	 | •
• | 	5:51 | Critical Recap -- Episode 86: The Cathedral	 | •
• | 	5:03:25 | The Cathedral | Critical Role | Campaign 2, Episode 86	 | •
• | 	1:39:34 | Drawing Fjord with Travis Willingham | Pub Draw S2E6	 | •
• | 	1:01:27 | Talks Machina: Discussing C2E85 - The Threads Converge	 | •
• | 	1:06:08 | Travis' Yee-Haw Game Ranch - CoD: Modern Warfare | S2E8	 | •
• | 	15:00 | Painting Fades with Marisha Ray | MINI PRIMETIME	 | •
• | 	5:57 | Critical Recap -- Episode 85: The Threads Converge	 | •
• | 	4:29:54 | The Threads Converge | Critical Role | Campaign 2, Episode 85	 | •
• | 	2:17:26 | UnDeadwood Part IV: Goodnight, Miss Miriam	 | •
• | 	1:33:23 | Drawing Kashaw with Will Friedle | Pub Draw S2E5	 | •
• | 	58:13 | Talks Machina: Discussing C2E84 - Titles and Tattoos	 | •
• | 	16:48 | Painting Grayscale with Babs Tarr | MINI PRIMETIME	 | •
• | 	5:37 | Critical Recap -- Episode 84: Titles and Tattoos	 | •
• | 	4:01:41 | Titles and Tattoos | Critical Role | Campaign 2, Episode 84	 | •
• | 	1:36:08 | Drawing Hana from the Crystal Palace with Erika Ishii | Pub Draw S2E4	 | •
• | 	1:17:31 | Talks Machina: Discussing C2E83 - Dark Bargains	 | •
• | 	57:48 | Travis' Yee-Haw Game Ranch: Overcooked 2 | S2E7	 | •
• | 	13:34 | Dirt and Grime with Liam O'Brien | MINI PRIMETIME	 | •
• | 	6:16 | Critical Recap -- Episode 83: Dark Bargains	 | •
• | 	4:11:06 | Dark Bargains | Critical Role | Campaign 2, Episode 83	 | •
• | 	2:03:12 | UnDeadwood Part III: I Got My Wish	 | •
• | 	1:39:19 | Painting Orly with Matt Mercer! | Pub Draw S2E3	 | •
• | 	1:03:50 | Talks Machina: Discussing C2E82 - The Beat of the Permaheart	 | •
• | 	13:49 | Limited Color Palette with Sam Riegel | MINI PRIMETIME	 | •
• | 	5:36 | Critical Recap -- Episode 82: The Beat of the Permaheart	 | •
• | 	4:27:09 | The Beat of the Permaheart | Critical Role | Campaign 2, Episode 82	 | •
• | 	2:40:04 | UnDeadwood Part II: God Don't Play Cards	 | •
• | 	1:02:13 | #EverythingIsContent: Baldur's Gate	 | •
• | 	4:22 | State of the Role: Fall 2019 Updates!	 | •
• | 	1:35:38 | Drawing Vex with Laura Bailey! | Pub Draw S2E2	 | •
• | 	58:39 | Talks Machina: Discussing C2E81 - From Door to Door	 | •
• | 	1:03:26 | Travis' Yee-Haw Game Ranch: Outlast | S2E6	 | •
• | 	5:28 | Critical Recap -- Episode 81: From Door to Door	 | •
• | 	4:16:42 | From Door to Door | Critical Role | Campaign 2, Episode 81	 | •
• | 	2:03:42 | UnDeadwood Part I: Stay Close, Reverend	 | •
• | 	1:30:27 | Draw Reani with Mica Burton! | Pub Draw S2E1	 | •
• | 	1:05:29 | Talks Machina: Discussing C2E80 - The Folding Halls	 | •
• | 	1:10:05 | #EverythingIsContent - 3D Printing Miniatures from Hero Forge	 | •
• | 	1:09 | Mini Primetime with Will Friedle Premieres Wednesday, October 30th!	 | •
• | 	6:03 | Critical Recap -- Episode 80: The Folding Halls	 | •
• | 	3:41:13 | The Folding Halls | Critical Role | Campaign 2, Episode 80	 | •
• | 	10:40 | Travis Willingham's Spooktacular	 | •
• | 	1:04:54 | Travis' Yee-Haw Game Ranch: Left 4 Dead 2 & Pacify | S2E5	 | •
• | 	1:08 | UnDeadwood Premieres Friday, October 18th!	 | •
• | 	1:05:20 | Talks Machina: Discussing C2E79 - Through the Trees	 | •
• | 	5:18 | Critical Recap -- Episode 79: Through the Trees	 | •
• | 	4:19:39 | Through the Trees | Critical Role | Campaign 2, Episode 79	 | •
• | 	1:03:14 | #EverythingIsContent - Magic: The Gathering Arena	 | •
• | 	58:19 | Talks Machina: Discussing C2E78 - Between the Lines	 | •
• | 	1:00:26 | Travis' Yee-Haw Game Ranch: Gears 5 | S2E4	 | •
• | 	6:41 | Critical Recap -- Episode 78: Between the Lines	 | •
• | 	4:07:56 | Between the Lines | Critical Role | Campaign 2, Episode 78	 | •
• | 	1:09:04 | Tavern Keeper Build | The Legend of Vox Machina	 | •
• | 	1:31:08 | Between the Sheets: Felicia Day	 | •
• | 	1:02:45 | #EverythingIsContent - Solasta: Crown of the Magister	 | •
• | 	1:16:07 | Talks Machina: Discussing C2E76-77 and Dalen's Closet	 | •
• | 	54:54 | Travis' Yee-Haw Game Ranch: Mortal Kombat 11 | S2E3	 | •
• | 	4:37 | Critical Recap -- Episode 77: A Tangled Web	 | •
• | 	3:54:26 | A Tangled Web | Critical Role | Campaign 2, Episode 77	 | •
• | 	4:09:45 | Dalen's Closet | Vox Machina One-Shot	 | •
• | 	1:59 | Percy and Vex's Wedding Rings Have Arrived!	 | •
• | 	6:10 | Critical Recap -- Episode 76: Refjorged	 | •
• | 	5:00:32 | Refjorged | Critical Role | Campaign 2, Episode 76	 | •
• | 	1:02:23 | Talks Machina: Discussing C2E75 - Rime and Reason	 | •
• | 	1:01:22 | Travis' Yee-Haw Game Ranch: Cuphead | S2E2	 | •
• | 	5:50 | Critical Recap -- Episode 75: Rime and Reason	 | •
• | 	2:26 | Every Critter Insult from Yee-Haw Game Ranch	 | •
• | 	4:17:38 | Rime and Reason | Critical Role | Campaign 2, Episode 75	 | •
• | 	1:02:14 | Talks Machina: Discussing C2E74 - Manifold Morals	 | •
• | 	6:28 | Critical Recap -- Episode 74: Manifold Morals	 | •
• | 	4:09:24 | Manifold Morals | Critical Role | Campaign 2, Episode 74	 | •
• | 	6:02 | Introducing Your New D&D Beyond Presidents	 | •
• | 	1:03:58 | Talks Machina: Discussing C2E73 - Uthodurn	 | •
• | 	1:03:43 | Travis' Yee-Haw Game Ranch: GTA V - Top Fun Mode | S2E1	 | •
• | 	1:28:38 | Between the Sheets: Amanda Palmer	 | •
• | 	5:48 | Critical Recap -- Episode 73: Uthodurn	 | •
• | 	4:10:11 | Uthodurn | Critical Role | Campaign 2, Episode 73 - Live From Indianapolis!	 | •
• | 	59:13 | Talks Machina: Discussing C2E72 - Clay and Dust	 | •
• | 	4:04:53 | Call of Cthulhu: Shadow of the Crystal Palace	 | •
• | 	6:06 | Critical Recap -- Episode 72: Clay and Dust	 | •
• | 	3:38:08 | Clay and Dust | Critical Role | Campaign 2, Episode 72	 | •
• | 	59:15 | Talks Machina: SDCC 2019 Panel	 | •
• | 	5:22 | Critical Recap -- Episode 71: Family Gathering	 | •
• | 	3:24:18 | Family Gathering | Critical Role | Campaign 2, Episode 71	 | •
• | 	1:01:13 | Talks Machina: Discussing C2E70 - Causatum	 | •
• | 	5:07 | Critical Recap -- Episode 70: Causatum	 | •
• | 	3:53:13 | Causatum | Critical Role | Campaign 2, Episode 70	 | •
• | 	1:02:19 | Talks Machina: Discussing C2E69 - The King's Cage	 | •
• | 	1:10:25 | Travis' Yee-Haw Game Ranch: Broforce | S1E9	 | •
• | 	5:46 | Critical Recap -- Episode 69: The King's Cage	 | •
• | 	4:18:31 | The King's Cage | Critical Role | Campaign 2, Episode 69	 | •
• | 	1:08:49 | Talks Machina: Discussing C2E68 - Reflections	 | •
• | 	5:35 | Critical Recap -- Episode 68: Reflections	 | •
• | 	3:48:53 | Reflections | Critical Role | Campaign 2, Episode 68	 | •
• | 	3:58:15 | The Search For Bob	 | •
• | 	59:30 | Talks Machina: Discussing C2E67 - Beyond the Eyes of Angels	 | •
• | 	1:00:59 | MAME Drop: Anime Games with Erica Lindbeck!	 | •
• | 	4:02 | Handbooker Helper: Dwarf (Quick Build)	 | •
• | 	5:41 | Critical Recap -- Episode 67: Beyond the Eyes of Angels	 | •
• | 	7:00 | A Special Anniversary Update (State of the Role)	 | •
• | 	4:24:26 | Beyond the Eyes of Angels | Critical Role | Campaign 2, Episode 67	 | •
• | 	59:26 | #EverythingIsContent: Knights of Pen & Paper II	 | •
• | 	1:00:01 | Talks Machina: Discussing C2E66 - Beneath Bazzoxan	 | •
• | 	1:04:10 | Travis' Yee-Haw Game Ranch: TowerFall Ascension | S1E8	 | •
• | 	3:33 | Handbooker Helper: Half-Orc (Quick Build)	 | •
• | 	5:55 | Critical Recap -- Episode 66: Beneath Bazzoxan	 | •
• | 	4:25:05 | Beneath Bazzoxan | Critical Role | Campaign 2, Episode 66	 | •
• | 	1:05:10 | Talks Machina: Discussing C2E65 - Chases and Trees	 | •
• | 	6:58 | Handbooker Helper: Backgrounds	 | •
• | 	1:17:13 | Between the Sheets: Ashley Johnson	 | •
• | 	6:01 | Critical Recap -- Episode 65: Chases and Trees	 | •
• | 	3:56:28 | Chases and Trees | Critical Role | Campaign 2, Episode 65	 | •
• | 	3:39:19 | Tails of Equestria One-Shot	 | •
• | 	1:00:05 | Talks Machina: Discussing C2E64 - A Dangerous Chase	 | •
• | 	1:01:13 | Travis' Yee-Haw Game Ranch: Overcooked! | S1E7	 | •
• | 	3:26 | Handbooker Helper: Half-Elf (Quick Build)	 | •
• | 	6:09 | Critical Recap -- Episode 64: A Dangerous Chase	 | •
• | 	3:28:58 | A Dangerous Chase | Critical Role | Campaign 2, Episode 64	 | •
• | 	1:11:18 | Talks Machina: Discussing C2E63 - Intervention	 | •
• | 	52:32 | Stephen Colbert's D&D Adventure with Matthew Mercer (Red Nose Day 2019)	 | •
• | 	1:02:45 | MAME Drop: Mech Games with Mark Hulmes!	 | •
• | 	3:25 | Handbooker Helper: Feats	 | •
• | 	5:42 | Critical Recap -- Episode 63: Intervention	 | •
• | 	3:53:18 | Intervention | Critical Role | Campaign 2, Episode 63	 | •
• | 	55:05 | Talks Machina: Discussing C2E62 - Domestic Respite	 | •
• | 	1:05:15 | Laura Bailey's Yee-Haw Game Ranch: Saints Row IV | S1E6	 | •
• | 	4:34 | Handbooker Helper: Gnome (Quick Build)	 | •
• | 	5:53 | Critical Recap -- Episode 62: Domestic Respite	 | •
• | 	3:58:58 | Domestic Respite | Critical Role | Campaign 2, Episode 62	 | •
• | 	59:33 | Talks Machina: Discussing C2E61 - Agreements	 | •
• | 	1:01:49 | MAME Drop: Gale Force Five!	 | •
• | 	8:25 | Handbooker Helper: Skills	 | •
• | 	5:57 | Critical Recap -- Episode 61: Agreements	 | •
• | 	3:26:38 | Agreements | Critical Role | Campaign 2, Episode 61	 | •
• | 	59:59 | Talks Machina: Discussing C2E60 - A Turtle By Any Other Name	 | •
• | 	1:09:35 | Travis' Yee-Haw Game Ranch: Portal 2 | S1E5	 | •
• | 	3:58 | Handbooker Helper: Dragonborn (Quick Build)	 | •
• | 	5:48 | Critical Recap -- Episode 60: A Turtle By Any Other Name	 | •
• | 	3:56:02 | A Turtle By Any Other Name | Critical Role | Campaign 2, Episode 60	 | •
• | 	1:02:18 | Talks Machina: Discussing Campaign 2, Episode 59 - Perspective	 | •
• | 	12:44 | Handbooker Helper: Condition Effects	 | •
• | 	6:18 | Critical Recap -- Episode 59: Perspective	 | •
• | 	3:56:06 | Perspective | Critical Role | Campaign 2, Episode 59	 | •
• | 	30:38 | Kickstarter Campaign End Party with Joel Hodgson!	 | •
• | 	56:35 | Talks Machina: Discussing Campaign 2, Episode 58 - Wood and Steel	 | •
• | 	1:00:31 | MAME Drop: Fantasy Games	 | •
• | 	4:09 | Handbooker Helper: Halfling (Quick Build)	 | •
• | 	6:00 | Critical Recap -- Episode 58: Wood and Steel	 | •
• | 	3:48:20 | Wood and Steel | Critical Role | Campaign 2, Episode 58	 | •
• | 	1:44:39 | Draw Gilmore with Matt! | Pub Draw	 | •
• | 	1:00:51 | Talks Machina: Discussing Campaign 2, Episode 57 - In Love and War	 | •
• | 	1:03:24 | Travis' Yee-Haw Game Ranch: New Super Mario Bros. U Deluxe | S1E4	 | •
• | 	8:13 | Handbooker Helper: Multiclassing	 | •
• | 	6:59 | Critical Recap -- Episode 57: In Love and War	 | •
• | 	3:45:15 | In Love and War | Critical Role | Campaign 2, Episode 57	 | •
• | 	1:34:49 | Lighting and Shading | Pub Draw	 | •
• | 	57:55 | MAME Drop: Mixed Bag o' Games	 | •
• | 	4:03 | Handbooker Helper: Elf (Quick Build)	 | •
• | 	1:54 | The Legend of Vox Machina: Animatic Sneak Peek!	 | •
• | 	1:36:25 | Inking Basics | Pub Draw	 | •
• | 	1:00:02 | Talks Machina: Discussing Campaign 2, Episode 56 - The Favor	 | •
• | 	1:04:18 | Travis' Yee-Haw Game Ranch: Call of Duty WWII | S1E3	 | •
• | 	4:08 | Handbooker Helper: Spell Components	 | •
• | 	1:36:55 | Between the Sheets: Ashly Burch	 | •
• | 	6:02 | Critical Recap -- Episode 56: The Favor	 | •
• | 	6:54 | The Making of "Your Turn to Roll" | The Legend of Vox Machina	 | •
• | 	3:01:17 | The Favor | Critical Role | Campaign 2, Episode 56	 | •
• | 	1:37:05 | Draw Caleb with Liam O'Brien aka Art Dad! | Pub Draw	 | •
• | 	1:03:01 | Talks Machina: Discussing Campaign 2, Episode 55 - Duplicity	 | •
• | 	59:07 | MAME Drop: METAL Games with Whitney Moore	 | •
• | 	3:33 | Handbooker Helper: Human (Quick Build)	 | •
• | 	1:52:30 | Between the Sheets: Mary Elizabeth McGlynn	 | •
• | 	6:05 | Critical Recap -- Episode 55: Duplicity	 | •
• | 	4:25:29 | Duplicity | Critical Role | Campaign 2, Episode 55	 | •
• | 	1:40:20 | Drawing Bodies (Part 2) | Pub Draw	 | •
• | 	1:10:24 | Talks Machina: Discussing Campaign 2, Episode 54 - Well Beneath	 | •
• | 	1:04:13 | Travis' Yee-Haw Game Ranch: Grand Theft Auto V | S1E2	 | •
• | 	4:34 | Handbooker Helper: Perception vs. Investigation	 | •
• | 	2:04:02 | Between the Sheets: Christopher Perkins	 | •
• | 	5:42 | Critical Recap -- Episode 54: Well Beneath	 | •
• | 	3:34:58 | Well Beneath | Critical Role | Campaign 2, Episode 54	 | •
• | 	1:44 | DARK HORSE NEWS: The Return of Vox Machina Origins & Mighty Nein Art Book!	 | •
• | 	1:32:18 | Draw Grog with Travis Willingham | Pub Draw	 | •
• | 	1:03:56 | Talks Machina: Discussing Campaign 2, Episode 53 - Cornered	 | •
• | 	1:02:06 | MAME Drop: Comic Book Games with Amy Dallen!	 | •
• | 	3:27 | Handbooker Helper: Tiefling (Quick Build)	 | •
• | 	1:10:48 | The Legend of Vox Machina Kickstarter Q&A	 | •
• | 	1:18 | The Legend of Vox Machina Animated Intro	 | •
• | 	6:02 | Critical Recap -- Episode 53: Cornered	 | •
• | 	3:35:06 | Cornered | Critical Role | Campaign 2, Episode 53	 | •
• | 	6:32 | The Legend of Vox Machina Kickstarter is LIVE!	 | •
• | 	1:42:05 | Learn to Draw Body Basics | Pub Draw	 | •
• | 	1:12:21 | Talks Machina: Discussing Campaign 2 Episode 52 - Feral Business	 | •
• | 	1:05:11 | Travis' Yee-Haw Game Ranch: Red Dead 2 | S1E1	 | •
• | 	5:37 | Critical Recap -- Episode 52: Feral Business	 | •
• | 	3:24 | Handbooker Helper: Ranged Weapons	 | •
• | 	4:08:50 | Feral Business | Critical Role | Campaign 2, Episode 52	 | •
• | 	3:00 | Introducing Travis Willingham's Yee-Haw Game Ranch!	 | •
• | 	4:41:09 | The Search For Grog | Critical Role One-Shot	 | •
• | 	1:35:55 | Draw Nott with Sam Riegel | Pub Draw	 | •
• | 	1:01:52 | MAME Drop: Licensed Toy Classics	 | •
• | 	3:19 | Critical Recap -- Episode 51: Xhorhas	 | •
• | 	5:39 | Handbooker Helper: Monk (Quick Build)	 | •
• | 	2:04:32 | Between the Sheets: Noelle Stevenson	 | •
• | 	1:33:22 | Draw Percy Using the Loomis Method | Pub Draw	 | •
• | 	1:01:12 | MAME Drop: D&D Games!	 | •
• | 	2:47 | Handbooker Helper: Melee Weapons	 | •
• | 	1:41:22 | Between the Sheets: Will Friedle	 | •
• | 	1:44:55 | Draw Jester with Laura Bailey | Pub Draw	 | •
• | 	1:01:31 | MAME Drop: Sports Games!	 | •
• | 	3:52 | Handbooker Helper: Paladin (Quick Build)	 | •
• | 	1:32:32 | Between the Sheets: Quyen Tran	 | •
• | 	1:37:20 | Learn To Draw Faces with Marisha & Babs | Pub Draw	 | •
• | 	1:01:42 | MAME Drop: LaserDisc Classics	 | •
• | 	3:21 | Handbooker Helper: Spell Range & Area of Effect	 | •
• | 	1:43:15 | Between the Sheets: Logic	 | •
• | 	1:02 | Between the Sheets Season 2 Premieres Jan 28!	 | •
• | 	1:36:11 | Pub Draw: Head Basics	 | •
• | 	1:01:56 | MAME Drop: Versus!	 | •
• | 	4:21 | Handbooker Helper: Warlock (Quick Build)	 | •
• | 	1:07 | Pub Draw Premieres Jan 23 on Twitch!	 | •
• | 	1:02:10 | MAME Drop: NES Tour	 | •
• | 	5:16 | Handbooker Helper: Passive Abilities	 | •
• | 	1:35 | MAME Drop Premieres Jan 15th on Twitch!	 | •
• | 	3:56 | Handbooker Helper: Wizard (Quick Build)	 | •
• | 	3:56 | Handbooker Helper: Leveling Up	 | •
• | 	1:57 | Between the Sheets: Marisha's Jalapeño Margarita	 | •
• | 	4:38:34 | The Night Before Critmas	 | •
• | 	1:33 | Between the Sheets: Sam's Sidecar	 | •
• | 	5:07 | Handbooker Helper: Sorcerer (Quick Build)	 | •
• | 	2:41 | Between the Sheets: Liam's Mulled Wine	 | •
• | 	5:59 | State of the Role: Winter Updates!	 | •
• | 	1:10:02 | Travis' Black Ops 4 Live Stream Extravaganza	 | •
• | 	4:12 | Handbooker Helper: Advantage & Disadvantage	 | •
• | 	53:51 | #EverythingIsContent: Fortnite feat. Pumat Sol Voice Pack	 | •
• | 	1:25 | Pumat Sol Voice Pack for Killer Voices	 | •
• | 	1:37 | Between the Sheets: Laura's Maple Bourbon Sour	 | •
• | 	1:03:56 | #EverythingIsContent: MAME Drop	 | •
• | 	3:58 | Handbooker Helper: Spellcasting Basics	 | •
• | 	1:36 | Pumat Week Is Here!	 | •
• | 	2:10 | Between the Sheets: Travis' Old Fashioned	 | •
• | 	1:05:58 | #EverythingIsContent: Drawing Beau	 | •
• | 	1:15:03 | Fireside Chat with Sam Riegel	 | •
• | 	2:09 | Handbooker Helper: Bard (Quick Build)	 | •
• | 	3:10:01 | Honey Heist 3: Tova's Honeys	 | •
• | 	1:30 | Between the Sheets: Taliesin's Blonde Manhattan	 | •
• | 	1:07:10 | #EverythingIsContent: Dungeon Mayhem	 | •
• | 	4:11 | Handbooker Helper: Combat Actions	 | •
• | 	43:49 | All Work No Play: Hot Tub Spectacular	 | •
• | 	1:15:55 | #EverythingIsContent: Soul Calibur VI (11.13.18)	 | •
• | 	2:34 | Handbooker Helper: Druid (Quick Build)	 | •
• | 	3:34 | The Chronicles of Exandria Vol. II: The Legend of Vox Machina	 | •
• | 	55:10 | All Work No Play: MAME Cabinet	 | •
• | 	1:02:13 | #EverythingIsContent: CriticalDad (11.6.18)	 | •
• | 	3:06 | Handbooker Helper: Weapons 101	 | •
• | 	34:58 | All Work No Play: Fire Spinning	 | •
• | 	4:34 | Critical Role & Operation Supply Drop	 | •
• | 	2:59 | Handbooker Helper: Fighter (Quick Build)	 | •
• | 	2:11:01 | Between the Sheets: Matthew Mercer	 | •
• | 	47:05 | All Work No Play: Creature Makeup	 | •
• | 	4:19 | Handbooker Helper: Armor 101	 | •
• | 	1:58:03 | Between the Sheets: Marisha Ray	 | •
• | 	39:09 | All Work No Play: Goat Yoga	 | •
• | 	50:54 | #EverythingIsContent: Critical Vote with NerdsVote	 | •
• | 	2:09 | Handbooker Helper: Cleric (Quick Build)	 | •
• | 	1:37:09 | Between the Sheets: Sam Riegel	 | •
• | 	40:10 | All Work No Play: Rage Room	 | •
• | 	4:18 | Handbooker Helper: Ability Checks, Proficiencies & Saving Throws	 | •
• | 	1:26:20 | Between the Sheets: Liam O'Brien	 | •
• | 	39:24 | All Work No Play: Tap Dancing	 | •
• | 	2:20 | Handbooker Helper: Barbarian (Quick Build)	 | •
• | 	1:05:11 | Between the Sheets: Laura Bailey	 | •
• | 	32:14 | All Work No Play: Sword Fighting	 | •
• | 	0:52 | Critical Role is Coming to ECCC in 2019	 | •
• | 	3:11 | Handbooker Helper: Death Saving Throws	 | •
• | 	1:21:11 | Between the Sheets: Travis Willingham	 | •
• | 	0:56 | Critical Role is Coming to MCM Comic Con London	 | •
• | 	2:53:16 | Sam Riegel's Crash Pandas One-Shot	 | •
• | 	1:48 | All Work No Play - Premieres Sept 28 on Twitch!	 | •
• | 	1:00:49 | #EverythingIsContent: CriticalMom (09.18.18)	 | •
• | 	2:03 | Handbooker Helper: Ranger (Quick Build)	 | •
• | 	1:14:33 | Between the Sheets: Taliesin Jaffe	 | •
• | 	1:20 | Critical Role LIVE in NYC (10.4.18)	 | •
• | 	59:44 | Pub Crawl with Marisha, Taliesin, Liam & Sam	 | •
• | 	5:28 | Handbooker Helper: Ability Scores	 | •
• | 	8:09 | State of the Role: Twitch Subscriptions	 | •
• | 	1:25 | Between the Sheets with Brian W. Foster (Trailer)	 | •
• | 	2:35 | Handbooker Helper: Rogue (Quick Build)	 | •
• | 	3:35 | Handbooker Helper: Dice 101	 | •
• | 	2:04 | A Message From Sam & Our Friend Blair Herter	 | •
• | 	1:20 | What is Handbooker Helper?	 | •
• | 	2:46:14 | Honey Heist 2: Electric Beargaloo	 | •
• | 	1:07:40 | Fireside Chat & NPC Build with Matthew Mercer	 | •
• | 	33:06 | State of the Role: Studio Tour with Marisha Ray	 | •
• | 	0:35 | Critical Role in Pillars of Eternity II: Deadfire	 | •
• | 	4:21 | Taliesin & Brian Get Turnt for Gen Con	 | •
• | 	1:10:49 | Matt Mercer Builds Vox Machina In Deadfire	 | •
• | 	0:56 | Critical Role Is Going To New York Comic Con!	 | •
• | 	0:34 | Critical Role Miniatures (Steamforged Kickstarter Launch!)	 | •
• | 	3:45 | A Special Announcement from Critical Role (State of the Role #1)	 | •
• | 	1:25 | Between the Sheets with Brian W. Foster (Trailer)	 | •
• | 	2:35 | Handbooker Helper: Rogue (Quick Build)	 | •
• | 	3:35 | Handbooker Helper: Dice 101	 | •
• | 	2:04 | A Message From Sam & Our Friend Blair Herter	 | •
• | 	1:20 | What is Handbooker Helper?	 | •
• | 	2:46:14 | Honey Heist 2: Electric Beargaloo	 | •
• | 	1:07:40 | Fireside Chat & NPC Build with Matthew Mercer	 | •
• | 	33:06 | State of the Role: Studio Tour with Marisha Ray	 | •
• | 	0:35 | Critical Role in Pillars of Eternity II: Deadfire	 | •
• | 	4:21 | Taliesin & Brian Get Turnt for Gen Con	 | •
• | 	1:10:49 | Matt Mercer Builds Vox Machina In Deadfire	 | •
• | 	0:56 | Critical Role Is Going To New York Comic Con!	 | •
• | 	0:34 | Critical Role Miniatures (Steamforged Kickstarter Launch!)	 | •
• | 	3:45 | A Special Announcement from Critical Role (State of the Role #1)	 | •`;



var links = `
• | 	4:20:44 | A Dark Balance | Critical Role | Campaign 3, Episode 38 | https://www.youtube.com/watch?v=U5mkmw46m4U	 | •
• | 	4:10:18 | From the Boughs | Critical Role | Campaign 3, Episode 37 | https://www.youtube.com/watch?v=bWHYmDFR84I	 | •
• | 	4:16:08 | A Desperate Call | Critical Role | Campaign 3, Episode 36 | https://www.youtube.com/watch?v=PZF5Mc1mjsk&t=1s	 | •
• | 	2:07:20 | Fun Scary | 4-Sided Dive | Episode 7: Discussing Up To C3E35 | https://www.youtube.com/watch?v=2eYIwQuZTYQ&t=23s	 | •
• | 	4:35:31 | Pyrrhic Return | Critical Role | Campaign 3, Episode 35 | https://www.youtube.com/watch?v=KrOolIMi7PM&t=43s	 | •
• | 	3:40:31 | What Dreams May Come | Critical Role | Campaign 3, Episode 34 | https://www.youtube.com/watch?v=7A_sFLk6MAU&t=8974s	 | •
• | 	3:56:22 | Blood and Dust | Critical Role | Campaign 3, Episode 33 | https://www.youtube.com/watch?v=7INGKNNmJf8	 | •
• | 	1:51:33 | Liam Laudna-Hands | 4-Sided Dive | Episode 6: Discussing Up To C3E32 | https://www.youtube.com/watch?v=FVOBnV8JPNQ	 | •
• | 	4:34:30 | A Stage Set | Critical Role | Campaign 3, Episode 32 | https://www.youtube.com/watch?v=dsoFNm3AFNw	 | •
• | 	2:06 | Level Up: Bells Hells Roll Hit Points For Level 7! | https://www.youtube.com/watch?v=_XnUfTCv6jI	 | •
• | 	3:52:42 | Breaking Point | Critical Role | Campaign 3, Episode 31 | https://www.youtube.com/watch?v=z7DgP8sgM1A	 | •
• | 	3:37:26 | Reunion & Revelation | Critical Role | Campaign 3, Episode 30 | https://www.youtube.com/watch?v=wSx79hobKkk	 | •
• | 	2:00:38 | From Dusk Till Faun | 4-Sided Dive | Episode 5: Discussing Up To C3E29 | https://www.youtube.com/watch?v=sB7XIlN0kWU&t=2640s	 | •
• | 	3:36:48 | Dark Portents | Critical Role | Campaign 3, Episode 29 | https://www.youtube.com/watch?v=Qu44OYKzNI4	 | •
• | 	7:48 | Weird Magic | Crit Recap Animated | Campaign 2, Episodes 113-141 | https://www.youtube.com/watch?v=2vxLX-xWcuY	 | •
• | 	58:56 | San Diego Comic-Con 2022 - Critical Role Q&A Panel | https://www.youtube.com/watch?v=yRU8xpnePOU	 | •
• | 	4:28:03 | The Deathwish Run | Critical Role | Campaign 3, Episode 28 | https://www.youtube.com/watch?v=x_fsXdtsnOc	 | •
• | 	4:01:16 | A Race for the Prize | Critical Role | Campaign 3, Episode 27 | https://www.youtube.com/watch?v=AG_niTgmRfY&t=12813s	 | •
• | 	1:50:18 | Exandria Unlimited: Calamity Wrap-Up | https://www.youtube.com/watch?v=EYK4_eRSSb4&t=3559s	 | •
• | 	4:10:25 | Hidden Truths | Critical Role | Campaign 3, Episode 26 | https://www.youtube.com/watch?v=UOWp-b9aoWQ	 | •
• | 	2:08:25 | Independent Witches | 4-Sided Dive | Episode 4: Discussing Up To C3E24 & Calamity | https://www.youtube.com/watch?v=3ITwciDqgy4	 | •
• | 	4:23:45 | A Taste of Tal'Dorei | Critical Role | Campaign 3, Episode 25 | https://www.youtube.com/watch?v=J7nGbnHRwNA	 | •
• | 	2:03 | New Animated Campaign 3 Opening Title | It’s Thursday Night (Critical Role Theme) | https://www.youtube.com/watch?v=BRXBvjrJXQk	 | •
• | 	1:50:32 | Game Masters of Exandria Roundtable | https://www.youtube.com/watch?v=LmZSWKPXhZ4&t=4042s	 | •
• | 	3:49:06 | A Familiar Problem: Sprinkle’s Incredible Journey! | https://www.youtube.com/watch?v=dDQTNGvRH4Q	 | •
• | 	6:07:34 | Fire and Ruin | Exandria Unlimited: Calamity | Episode 4 | https://www.youtube.com/watch?v=CrtoyB2fcMI	 | •
• | 	3:42 | Bard College of Tragedy Subclass | Tal'Dorei Reborn | https://www.youtube.com/watch?v=8gIWfb3hTkM	 | •
• | 	5:21:37 | Blood and Shadow | Exandria Unlimited: Calamity | Episode 3 | https://www.youtube.com/watch?v=YNTP_CckXrM&t=16479s	 | •
• | 	1:42:39 | Fly Into The Danger Zone | 4-Sided Dive | Episode 3: Discussing Up To C3E24 | https://www.youtube.com/watch?v=k2OymRmBCkE	 | •
• | 	4:37:57 | Bitterness and Dread | Exandria Unlimited: Calamity | Episode 2 | https://www.youtube.com/watch?v=cLhXA_Hl6LM	 | •
• | 	4:10:47 | Excelsior | Exandria Unlimited: Calamity | Episode 1 | https://www.youtube.com/watch?v=KlIkkeWmVvA&t=13067s	 | •
• | 	3:55:34 | The Hellcatch Valley | Critical Role | Campaign 3, Episode 24 | https://www.youtube.com/watch?v=z1wNcUDnoBk	 | •
• | 	4:14:53 | To The Skies | Critical Role | Campaign 3, Episode 23 | https://www.youtube.com/watch?v=rWZMRdLGBu0	 | •
• | 	1:07 | Exandria Unlimited: Calamity Premieres Thursday, May 26th! | Trailer | https://www.youtube.com/watch?v=9QMiGD2offs	 | •
• | 	4:21:06 | Promise and Potential | Critical Role | Campaign 3, Episode 22 | https://www.youtube.com/watch?v=_BfMZwPg4iM	 | •
• | 	1:47:14 | Party of NPCs | 4-Sided Dive | Episode 2: Discussing Up to C3E21 | https://www.youtube.com/watch?v=y7E88AU9r5I	 | •
• | 	1:24:36 | Dignity: An Adventure with Stephen Colbert by Critical Role Foundation to Benefit Red Nose Day | https://www.youtube.com/watch?v=FdqcUTNHwyo&t=3845s	 | •
• | 	3:47:44 | Fight at the Museum… | Critical Role | Campaign 3, Episode 21 | https://www.youtube.com/watch?v=4fK2wdBGCYo	 | •
• | 	3:36:18 | Breaking and Entering... | Critical Role | Campaign 3, Episode 20 | https://www.youtube.com/watch?v=X9Bc-uuxCm4&t=7926s	 | •
• | 	1:00:08 | #EverythingIsContent - ELEX II | https://www.youtube.com/watch?v=KhW_BK2irpU	 | •
• | 	3:55:12 | Omens Above | Critical Role | Campaign 3, Episode 19 | https://www.youtube.com/watch?v=pPa_O6F5kqs&t=2s	 | •
• | 	1:44:30 | Silken Secrets | 4-Sided Dive | Episode 1: Discussing Up to C3E18 | https://www.youtube.com/watch?v=jwtpHQ_-JUA	 | •
• | 	4:54:05 | Exandria Unlimited: Kymal | Part 2 | https://www.youtube.com/watch?v=E-0bSdoPj5o	 | •
• | 	4:26:06 | Exandria Unlimited: Kymal | Part 1 | https://www.youtube.com/watch?v=l7SKWVq-jIg	 | •
• | 	3:35:41 | Tiny Tina's Wonderlands One-Shot | https://www.youtube.com/watch?v=nJrLQHo9rW0	 | •
• | 	3:23:13 | A Hungry Jungle | Critical Role | Campaign 3, Episode 18 | https://www.youtube.com/watch?v=f8WY6df598M&t=474s	 | •
• | 	1:12:33 | #EverythingIsContent - Demeo Quest Night | https://www.youtube.com/watch?v=vd49puwmpus	 | •
• | 	4:11:30 | Heart-to-Heartmoor | Critical Role | Campaign 3, Episode 17 | https://www.youtube.com/watch?v=c66mDHckyoM&t=12974s	 | •
• | 	3:13 | 7-Year Anniversary Blooper Reel | https://www.youtube.com/watch?v=vHWaS9Xjhcs	 | •
• | 	4:12:12 | The Shade Mother | Critical Role | Campaign 3, Episode 16 | https://www.youtube.com/watch?v=O6-NaqWorI0	 | •
• | 	8:28 | State of the Role: 7-Year Anniversary Celebration & New Show Updates! | Spring 2022 | https://www.youtube.com/watch?v=Cz1Ma9OzbUs	 | •
• | 	4:42:24 | The Tunnels Below | Critical Role | Campaign 3, Episode 15 | https://www.youtube.com/watch?v=rMPp8dP1OC0	 | •
• | 	4:37:09 | Elden Ring One-Shot: O Ye of Little Faith | https://www.youtube.com/watch?v=5ltjt4TUE6A	 | •
• | 	5:44 | Family Ties | Crit Recap Animated | Campaign 2, Episodes 92-112 | https://www.youtube.com/watch?v=rCX4ihMdY-M	 | •
• | 	1:17:55 | The Legend of Vox Machina Episodes 10-12 Q&A | https://www.youtube.com/watch?v=vRvkjLdvXMk	 | •
• | 	4:45:08 | In Too Deep | Critical Role | Campaign 3, Episode 14 | https://www.youtube.com/watch?v=-OCLsOUZN68	 | •
• | 	59:39 | The Legend of Vox Machina Episodes 7-9 Q&A | https://www.youtube.com/watch?v=KesGxAl7WhM	 | •
• | 	4:01:01 | A Dance of Deception | Critical Role | Campaign 3, Episode 13 | https://www.youtube.com/watch?v=2CTz_OfneeM&t=13505s	 | •
• | 	1:03:23 | The Legend of Vox Machina Episodes 4-6 Q&A | https://www.youtube.com/watch?v=n-lwWHpx2pc	 | •
• | 	4:36:53 | Make It Fashion | Critical Role | Campaign 3, Episode 12 | https://www.youtube.com/watch?v=h6AkvAj_hao	 | •
• | 	2:15 | Level Up: Our Campaign 3 Party Rolls Hit Points For Level 5! | https://www.youtube.com/watch?v=sTjG6fWQoAI	 | •
• | 	58:06 | The Legend of Vox Machina Episodes 1-3 Q&A | https://www.youtube.com/watch?v=5ePlVbY1p9E&t=300s	 | •
• | 	3:54:03 | Guest Battle Royale | https://www.youtube.com/watch?v=jE7wB2JG190&t=231s	 | •
• | 	4:52:19 | Chasing Nightmares | Critical Role | Campaign 3, Episode 11 | https://www.youtube.com/watch?v=75SoOmgKuk4	 | •
• | 	13:27 | The Legend of the Cast of The Legend of Vox Machina | https://www.youtube.com/watch?v=EOeZjYZtmKA&t=603s	 | •
• | 	1:34 | AVAILABLE NOW: Tal’Dorei Campaign Setting Reborn | https://www.youtube.com/watch?v=T5HodPEtYc0	 | •
• | 	3:16:30 | Ghosts, Dates, and Darker Fates | Critical Role | Campaign 3, Episode 10 | https://www.youtube.com/watch?v=Dvk70G5meeE	 | •
• | 	4:14:36 | Thicker Grows the Meal and Plot | Critical Role | Campaign 3, Episode 9 | https://www.youtube.com/watch?v=IdRagVTlrmo	 | •
• | 	3:23:00 | A Woodworker’s Quandary | Critical Role | Campaign 3, Episode 8 | https://www.youtube.com/watch?v=cwbLO_649Vg	 | •
• | 	5:05 | The Sword & The Angel | Crit Recap Animated | Campaign 2, Episodes 70-91 | https://www.youtube.com/watch?v=FfcDt-eRWSQ	 | •
• | 	44:49 | Kith & Kin Fireside Chat Q&A | https://www.youtube.com/watch?v=BH4xdbCt9QU	 | •
• | 	3:49:38 | Behind the Curtain | Critical Role | Campaign 3, Episode 7 | https://www.youtube.com/watch?v=mRyO6ijeLx8	 | •
• | 	2:01 | Campaign 3 Opening Title | It’s Thursday Night (Critical Role Theme) | https://www.youtube.com/watch?v=Kpdh5S9myc4	 | •
• | 	3:54:58 | Growing Bonds and Teasing Threads | Critical Role | Campaign 3, Episode 6 | https://www.youtube.com/watch?v=iBeyMyMzQWg	 | •
• | 	4:25:35 | The Threat Between the Walls | Critical Role | Campaign 3, Episode 5 | https://www.youtube.com/watch?v=MDyYQqefj4M	 | •
• | 	3:52:13 | On the Trail of a Killer | Critical Role | Campaign 3, Episode 4 | https://www.youtube.com/watch?v=gZ7u5NE_q4k&t=22s	 | •
• | 	4:08:42 | The Trail and the Toll | Critical Role | Campaign 3, Episode 3 | https://www.youtube.com/watch?v=POgfa65vi4k&t=6278s	 | •
• | 	4:07:40 | Trial by Firelight | Critical Role | Campaign 3, Episode 2 | https://www.youtube.com/watch?v=pWOivwWvtt0	 | •
• | 	4:28:56 | Part III: The Golden Goose | The Elder Scrolls Online: Blackwood | https://www.youtube.com/watch?v=y6GpnRz6RPo	 | •
• | 	55:26 | #EverythingIsContent - Elder Scrolls Online: Blackwood Part 4 | An Apocalyptic Situation | https://www.youtube.com/watch?v=1OM_OAg0Yis	 | •
• | 	3:58:25 | The Draw of Destiny | Critical Role | Campaign 3, Episode 1 | https://www.youtube.com/watch?v=P8pLvV3FjPc	 | •
• | 	8:46 | Campaign 3: Behind the Set | https://www.youtube.com/watch?v=BfB4lVnL4CM	 | •
• | 	55:17 | Narrative Telephone: The Breakup Lettah | https://www.youtube.com/watch?v=L3kGly9a4kE&t=1552s	 | •
• | 	5:34 | The Other Side | Crit Recap Animated | Campaign 2, Episodes 48-69 | https://www.youtube.com/watch?v=YmKVf1Mp5HQ	 | •
• | 	9:56 | Exandria: An Intimate History | Narrated by Matthew Mercer | https://www.youtube.com/watch?v=DYBM3myR914	 | •
• | 	7:47 | State of the Role: Campaign 3 Announcement | Fall 2021 | https://www.youtube.com/watch?v=j5_xVBpqwTo	 | •
• | 	1:02:36 | Narrative Telephone: The Curious Casanova | https://www.youtube.com/watch?v=uviAFx4K78Y	 | •
• | 	1:02:24 | Mighty Vibes Vol 6: Lofi Beats to Study with Your Twin to | https://www.youtube.com/watch?v=1ymREG2zvNo&t=2s	 | •
• | 	3:23:20 | The Nautilus Ark: A Johnson Corp Odyssey | Ashley's One-Shot | https://www.youtube.com/watch?v=LaKl58BUASo	 | •
• | 	4:45 | Help Support Shanti Bhavan Students in India! | Critical Role Foundation | https://www.youtube.com/watch?v=ZfDS2T3mfwM	 | •
• | 	1:46:00 | Exandria Unlimited Wrap-Up | https://www.youtube.com/watch?v=uFSO0IuBrnw&t=5025s	 | •
• | 	11:06 | The Legend of the Music of The Legend of Vox Machina | https://www.youtube.com/watch?v=WZGsHg9kO30	 | •
• | 	4:19:53 | Part II: A Faulty Foundation | The Elder Scrolls Online: Blackwood | https://www.youtube.com/watch?v=MX5qmiUJYBo	 | •
• | 	1:00:59 | #EverythingIsContent - Elder Scrolls Online: Blackwood Part 3 | Shattered and Scattered | https://www.youtube.com/watch?v=lnULjkX9ygA&t=1s	 | •
• | 	4:45 | Adventure on the High Seas | Crit Recap Animated | Campaign 2, Episodes 36-47 | https://www.youtube.com/watch?v=OGOiAaiNRCQ	 | •
• | 	3:32:30 | What Comes Next | Exandria Unlimited | Episode 8 | https://www.youtube.com/watch?v=73DU7qK-_xs	 | •
• | 	6:50 | Crew & A Episode 6: Origin Stories | The Legend of Vox Machina | https://www.youtube.com/watch?v=hH7bXpxr1b4	 | •
• | 	4:02:32 | Beyond the Heart City | Exandria Unlimited | Episode 7 | https://www.youtube.com/watch?v=LIrsjzz9TAQ	 | •
• | 	4:45:12 | The Gift Among the Green | Exandria Unlimited | Episode 6 | https://www.youtube.com/watch?v=sLxUyJWXA0w	 | •
• | 	12:05 | The Legend of the Voices of The Legend of Vox Machina | https://www.youtube.com/watch?v=zQipW1cswZ8&t=6s	 | •
• | 	3:55:29 | A Test of Worth | Exandria Unlimited | Episode 5 | https://www.youtube.com/watch?v=Bj0Jd5mzLsI	 | •
• | 	4:25:33 | By the Road | Exandria Unlimited | Episode 4 | https://www.youtube.com/watch?v=qAhw51d3cGw	 | •
• | 	4:19 | Crew & A Episode 5: Talkin' Bout Titmouse | The Legend of Vox Machina | https://www.youtube.com/watch?v=SCQjMwsCpgA	 | •
• | 	3:17:56 | A Glorious Return | Exandria Unlimited | Episode 3 | https://www.youtube.com/watch?v=YDHxT4UT8NI	 | •
• | 	1:06:48 | Critter Hug: Impossible Bard Make Up | Summer 2021 | https://www.youtube.com/watch?v=mf5E6RfY3PQ	 | •
• | 	3:46 | Iron & Blood | Crit Recap Animated | Campaign 2, Episodes 26-35 | https://www.youtube.com/watch?v=65SagajGshs	 | •
• | 	3:57:40 | The Oh No Plateau | Exandria Unlimited | Episode 2 | https://www.youtube.com/watch?v=Hjucx2vz5Mg	 | •
• | 	1:04:17 | Let’s Play Uk’otoa! | https://www.youtube.com/watch?v=Eq93dzkOFWY	 | •
• | 	4:09:18 | The Nameless Ones | Exandria Unlimited | Episode 1 | https://www.youtube.com/watch?v=-ijPD6yNdMs	 | •
• | 	1:46 | Exandria Unlimited Opening Title | https://www.youtube.com/watch?v=bSnYczQUkgA	 | •
• | 	10:02 | The Legend of the Design of The Legend of Vox Machina | https://www.youtube.com/watch?v=hUbnt7ecuYw	 | •
• | 	4:11:18 | Critical Role Campaign 2 Wrap-Up | https://www.youtube.com/watch?v=bE2EUHzr0Fs	 | •
• | 	4:19:53 | Vox Machina vs. Mighty Nein | https://www.youtube.com/watch?v=LpBIQhWAhuM	 | •
• | 	2:11 | How to Play Uk’otoa from Darrington Press | https://www.youtube.com/watch?v=sWw9DlHa1b4	 | •
• | 	7:02 | Exandria Unlimited: Meet the Players | https://www.youtube.com/watch?v=3HMx6aZzUOc&t=15s	 | •
• | 	12:37 | State of the Role: Revealing our Super Top Secret Project! | https://www.youtube.com/watch?v=Yr7U4tlaSI8	 | •
• | 	7:02:57 | Fond Farewells | Critical Role | Campaign 2, Episode 141 | https://www.youtube.com/watch?v=lEZ5UPPtaHA	 | •
• | 	4:45:46 | Long May He Reign | Critical Role | Campaign 2, Episode 140 | https://www.youtube.com/watch?v=W5O0bbA7Pn8	 | •
• | 	53:08 | #EverythingIsContent - Elder Scrolls Online: Blackwood Part 2 | A Mortal's Touch | https://www.youtube.com/watch?v=Xed2wNI4ffk	 | •
• | 	57:08 | Talks Machina: Discussing Up to C2E139 - Rebirth | https://www.youtube.com/watch?v=hUkoKy_zPEI	 | •
• | 	3:37:06 | Part I: Death & Taxes | The Elder Scrolls Online: Blackwood | https://www.youtube.com/watch?v=E-YCzpYDIyA&t=53s	 | •
• | 	3:49:59 | Rebirth | Critical Role | Campaign 2, Episode 139 | https://www.youtube.com/watch?v=KCX70GGxpoA	 | •
• | 	1:03:51 | Narrative Telephone Round 2 Ep. 8: Of Heists and Horses | https://www.youtube.com/watch?v=9KlbicMqpVA	 | •
• | 	4:04 | The Gentleman’s Bargain | Crit Recap Animated | Campaign 2, Episodes 17-25 | https://www.youtube.com/watch?v=PF3FXQagrsA	 | •
• | 	5:38 | Crew & A Episode 4: Exploring Exandria | The Legend of Vox Machina | https://www.youtube.com/watch?v=gjj6hYntQII	 | •
• | 	3:27:48 | Where There Is A Will... | Critical Role | Campaign 2, Episode 138 | https://www.youtube.com/watch?v=abczYOn1lIQ	 | •
• | 	53:06 | Talks Machina: Discussing Up to C2E137 - Welcome to Cognouza | https://www.youtube.com/watch?v=CCerTD4t_hI	 | •
• | 	2:18 | Uk’otoa Sea Shanty | https://www.youtube.com/watch?v=I7TN0ZRPthM	 | •
• | 	3:07:42 | Welcome to Cognouza | Critical Role | Campaign 2, Episode 137 | https://www.youtube.com/watch?v=l_loCAlJIVs	 | •
• | 	2:37 | The Mighty Nein Roll Hit Points for Level 15 | https://www.youtube.com/watch?v=NyGVDr6l1QA	 | •
• | 	3:37:30 | Hell or High Water | Critical Role | Campaign 2, Episode 136 | https://www.youtube.com/watch?v=L3M4B2HmeS8&t=1s	 | •
• | 	59:29 | Talks Machina: Discussing Up to C2E135 - The Genesis Ward | https://www.youtube.com/watch?v=HJ0-r14zk3k	 | •
• | 	3:42:58 | The Genesis Ward | Critical Role | Campaign 2, Episode 135 | https://www.youtube.com/watch?v=As-CPD7Z5As	 | •
• | 	1:13:18 | Narrative Telephone Round 2 Ep. 7: Chutney's Christmas Vacation | https://www.youtube.com/watch?v=EWh60d7gvGI	 | •
• | 	5:39 | Crew & A Episode 3: Let's Talk About RPGs! | The Legend of Vox Machina | https://www.youtube.com/watch?v=30as6kvT3gs	 | •
• | 	4:11:08 | The Streets of the Forgotten | Critical Role | Campaign 2, Episode 134 | https://www.youtube.com/watch?v=vTwG0Tfvkbo	 | •
• | 	1:03:13 | Talks Machina: Discussing Up to C2E133 - Hunter and Hunted | https://www.youtube.com/watch?v=a53043LNSUE	 | •
• | 	4:17 | Secrets of Zadash | Crit Recap Animated | Campaign 2, Episodes 9-16 | https://www.youtube.com/watch?v=qmaW5Egjpmg	 | •
• | 	4:21:33 | Hunter and Hunted | Critical Role | Campaign 2, Episode 133 | https://www.youtube.com/watch?v=6hB73g8SF_k	 | •
• | 	53:02 | Mighty Vibes Vol 5: Lofi Beats with a Light Breeze [Zephrah Radio] | https://www.youtube.com/watch?v=wIsEYMsVd9Y&t=1276s	 | •
• | 	3:39:20 | Aeor | Critical Role | Campaign 2, Episode 132 | https://www.youtube.com/watch?v=z_QadZ8S9rU	 | •
• | 	56:25 | #EverythingIsContent - Elder Scrolls Online: Blackwood | https://www.youtube.com/watch?v=_-j51P4gtrA	 | •
• | 	1:19:16 | Talks Machina: Discussing Up to C2E131 - Into the Eye | https://www.youtube.com/watch?v=CdCAvtLPq20	 | •
• | 	2:50 | Welcome to Critical Role Land! | https://www.youtube.com/watch?v=BalBsaYOhFs	 | •
• | 	4:14:51 | Into the Eye | Critical Role | Campaign 2, Episode 131 | https://www.youtube.com/watch?v=VAG8d9F3ULU	 | •
• | 	4:33 | Crew & A Episode 2: Playing Favorites | The Legend of Vox Machina | https://www.youtube.com/watch?v=PrStjKN5r3s	 | •
• | 	4:05:33 | The Calm Before The Storm | Critical Role | Campaign 2, Episode 130 | https://www.youtube.com/watch?v=mZ-dVqIlKAk	 | •
• | 	1:04:49 | Talks Machina: Discussing Up to C2E129 - Between a Ball and a Hot Place | https://www.youtube.com/watch?v=6dK3HTgxRH4	 | •
• | 	1:15:46 | Narrative Telephone Round 2 Ep. 6: Familiar Feywild Fables | https://www.youtube.com/watch?v=0RIojCMvbrc	 | •
• | 	3:37:55 | Between a Ball and a Hot Place | Critical Role | Campaign 2, Episode 129 | https://www.youtube.com/watch?v=6nR3FGyyG4I	 | •
• | 	3:32:49 | Cat and Mouse | Critical Role | Campaign 2, Episode 128 | https://www.youtube.com/watch?v=xPelkwqSOCs	 | •
• | 	1:31:33 | Talks Machina: Discussing Up to C2E127 - Sarsaparilla, Licorice, and Red Hot | https://www.youtube.com/watch?v=lWJeWef2HwI	 | •
• | 	3:18:22 | Sarsaparilla, Licorice, and Red Hot | Critical Role | Campaign 2, Episode 127 | https://www.youtube.com/watch?v=oagFBOV4MX4	 | •
• | 	1:11:51 | Critter Hug: DM Combat Banquet | Winter 2021 | https://www.youtube.com/watch?v=uxtCfTvuAl0	 | •
• | 	5:06 | Crew & A Episode 1: Getting to Know You | The Legend of Vox Machina | https://www.youtube.com/watch?v=TMHuSCcw6rE	 | •
• | 	3:31:24 | Worth Fighting For | Critical Role | Campaign 2, Episode 126 | https://www.youtube.com/watch?v=guI9DCxK_es	 | •
• | 	2:18:02 | Diablo One Shot | BlizzConline 2021 | https://www.youtube.com/watch?v=yODMT1m85FQ&t=1220s	 | •
• | 	58:41 | Talks Machina: Discussing Up to C2E125 - The Neverending Day | https://www.youtube.com/watch?v=4u4H3ThBCa8&t=79s	 | •
• | 	59:45 | Narrative Telephone Round 2 Ep. 5: Questions & Quackery | https://www.youtube.com/watch?v=ol9rNrfRBqA	 | •
• | 	3:56 | Come Together | Crit Recap Animated | Campaign 2, Episodes 1-8 | https://www.youtube.com/watch?v=8YPC4l7DJb4&t=35s	 | •
• | 	3:45:25 | The Neverending Day | Critical Role | Campaign 2, Episode 125 | https://www.youtube.com/watch?v=bfWYxuiegX8	 | •
• | 	52:26 | Mighty Vibes Vol 4: Lofi Beats for Best Buddies to Listen To | https://www.youtube.com/watch?v=YuAqAwvIL3E	 | •
• | 	4:12:28 | A Walk to Warmer Welcomes | Critical Role | Campaign 2, Episode 124 | https://www.youtube.com/watch?v=qZUW4zdS6dk	 | •
• | 	1:15:36 | Talks Machina: Discussing Up to C2E123 - Fair-weather Faith | https://www.youtube.com/watch?v=gKhRYXNxofc	 | •
• | 	5:24:28 | Fair-weather Faith | Critical Role | Campaign 2, Episode 123 | https://www.youtube.com/watch?v=uHGvn3IPh5k&t=5s	 | •
• | 	3:36:50 | Nothing Ventured, Nothing Gained | Critical Role | Campaign 2, Episode 122 | https://www.youtube.com/watch?v=lY_niV3P0IU&t=52s	 | •
• | 	1:23:09 | Talks Machina: Discussing Up to C2E121 - Ice and Fire | https://www.youtube.com/watch?v=ZqAujrTiOek	 | •
• | 	1:21:24 | Narrative Telephone Round 2 Ep. 4: Mica Burton Murders Cast of Critical Role | https://www.youtube.com/watch?v=83ERmHbk5U8	 | •
• | 	3:21:15 | Ice and Fire | Critical Role | Campaign 2, Episode 121 | https://www.youtube.com/watch?v=rLdtEUHzmGU	 | •
• | 	3:07 | Meet the Mighty Nein | Crit Recap Animated | https://www.youtube.com/watch?v=yUcNq8zd6EI	 | •
• | 	3:50:42 | Contentious Company | Critical Role | Campaign 2, Episode 120 | https://www.youtube.com/watch?v=EDudet-qZIg	 | •
• | 	1:26:46 | Talks Machina: Discussing Up to C2E119 - Malice and Mystery Below | https://www.youtube.com/watch?v=1yh9ysrf268	 | •
• | 	1:01:21 | Narrative Telephone Round 2 Ep. 3: The Night Before Winter's Crest | https://www.youtube.com/watch?v=lXOggrA4nvs&t=196s	 | •
• | 	3:27:29 | Malice and Mystery Below | Critical Role | Campaign 2, Episode 119 | https://www.youtube.com/watch?v=xAQy-ompDc4	 | •
• | 	4:31:33 | Solace Between the Secrets | Critical Role | Campaign 2, Episode 118 | https://www.youtube.com/watch?v=KcwtwrI1-dc	 | •
• | 	8:19 | Animation 101 with Sam Riegel | The Legend of Vox Machina | https://www.youtube.com/watch?v=YK_jrQXoE18	 | •
• | 	4:16:05 | The Tortoise and The Dare | Critical Role | Campaign 2, Episode 117 | https://www.youtube.com/watch?v=pRgFL6Zi3nM	 | •
• | 	1:24:40 | Narrative Telephone Round 2 Ep. 2: Two Brothers, One Coast | https://www.youtube.com/watch?v=pn2THUUZigY	 | •
• | 	4:06:44 | Under Timeless Ice | Critical Role | Campaign 2, Episode 116 | https://www.youtube.com/watch?v=DhlfFwDOwPM	 | •
• | 	1:08:00 | Talks Machina: Discussing Up to C2E115 - Fetching Fables & Frosty Friends | https://www.youtube.com/watch?v=eE4xaziWIaU&t=2113s	 | •
• | 	7:15 | Unboxing Pops Machina with Brian W. Foster | https://www.youtube.com/watch?v=CmWD9f07ggQ	 | •
• | 	4:06:44 | Fetching Fables & Frosty Friends | Critical Role | Campaign 2, Episode 115 | https://www.youtube.com/watch?v=kwTzNMNQCEA	 | •
• | 	3:42:46 | An Open Window | Critical Role | Campaign 2, Episode 114 | https://www.youtube.com/watch?v=UGcLpm4iEBg	 | •
• | 	1:20:37 | Talks Machina: Discussing Up to C2E113 - A Heart Grown Cold | https://www.youtube.com/watch?v=Yp16O4rnKZw	 | •
• | 	1:16:59 | Critter Hug: Crafting Grandma's Tale | Fall 2020 | https://www.youtube.com/watch?v=zXNJjGY9cW0	 | •
• | 	4:05:53 | A Heart Grown Cold | Critical Role | Campaign 2, Episode 113 | https://www.youtube.com/watch?v=0HncegOZtNQ	 | •
• | 	1:24:05 | Narrative Telephone Round 2 Ep. 1: Return of the Matt | https://www.youtube.com/watch?v=Bp3b4HxseIs&t=269s	 | •
• | 	4:20:09 | The Chase Begins | Critical Role | Campaign 2, Episode 112 | https://www.youtube.com/watch?v=A5IMAFoBVWc	 | •
• | 	1:37:20 | Talks Machina: Discussing Up to C2E111 with Taliesin Jaffe and Marisha Ray | https://www.youtube.com/watch?v=Q57DN6eegpo&t=1053s	 | •
• | 	1:40:08 | Talks Machina: Discussing Up to C2E111 with Liam O'Brien and Ashley Johnson | https://www.youtube.com/watch?v=RjCj_ILG0bE	 | •
• | 	3:34:59 | New Homes and Old Friends | Critical Role | Campaign 2, Episode 111 | https://www.youtube.com/watch?v=-9pOQ7n3z5g&t=10947s	 | •
• | 	3:30 | Introducing Critical Role Foundation! | https://www.youtube.com/watch?v=Om_nWDN2AkE	 | •
• | 	4:07:31 | Dinner with the Devil | Critical Role | Campaign 2, Episode 110 | https://www.youtube.com/watch?v=pgasGt17Kqo	 | •
• | 	1:26:34 | Talks Machina: Discussing Up to C2E109 - Frigid Propositions | https://www.youtube.com/watch?v=PERNKOiHdXg	 | •
• | 	3:54:30 | Frigid Propositions | Critical Role | Campaign 2, Episode 109 | https://www.youtube.com/watch?v=kFPLx3SICi0&t=9963s	 | •
• | 	1:22 | Talks Machina Returns Tuesday, September 15th! | https://www.youtube.com/watch?v=oXV1iY16Ic8	 | •
• | 	4:01:46 | Traveler Con | Critical Role | Campaign 2, Episode 108 | https://www.youtube.com/watch?v=YIcNZERTDOY&t=7976s	 | •
• | 	3:53:58 | Devoutness and Dicks | Critical Role | Campaign 2, Episode 107 | https://www.youtube.com/watch?v=dd8jt0jfeww	 | •
• | 	1:18:18 | Critter Hug: Space Valentine Inc | Summer 2020 | https://www.youtube.com/watch?v=u50KFcySJN0&t=88s	 | •
• | 	9:37 | The Legend of the World of The Legend of Vox Machina | https://www.youtube.com/watch?v=fV4S1iucx3Y	 | •
• | 	3:52:54 | A Fog Lifted | Critical Role | Campaign 2, Episode 106 | https://www.youtube.com/watch?v=PWMlvpyFm-E&t=2787s	 | •
• | 	4:42:22 | Rumble at Rumblecusp | Critical Role | Campaign 2, Episode 105 | https://www.youtube.com/watch?v=ItgpnsJS2pE	 | •
• | 	1:23:13 | Mini Primetime: After Dark | https://www.youtube.com/watch?v=fn6tGRzsbqs	 | •
• | 	3:55:37 | The Ruined Sliver | Critical Role | Campaign 2, Episode 104 | https://www.youtube.com/watch?v=ni3aw71y7LI	 | •
• | 	1:03:02 | AWNP: Unplugged with Laura Bailey | Ep. 8 | https://www.youtube.com/watch?v=ds2AO4XjQus	 | •
• | 	3:31:34 | Maritime Mysteries | Critical Role | Campaign 2, Episode 103 | https://www.youtube.com/watch?v=1XUaTszLV6Q	 | •
• | 	1:01:17 | Narrative Telephone Ep. 8: Grog's Vlog | https://www.youtube.com/watch?v=-3AtaMNtp1A	 | •
• | 	3:27:04 | Ghosts, Dinosaurs, and Stuff | Critical Role | Campaign 2, Episode 102 | https://www.youtube.com/watch?v=hKlo5FWlxnA	 | •
• | 	59:53 | AWNP: Unplugged with Marisha Ray | Ep. 7 | https://www.youtube.com/watch?v=kL4lc2hyK2c	 | •
• | 	3:38:54 | Mysteries, Memories, and Music | Critical Role | Campaign 2, Episode 101 | https://www.youtube.com/watch?v=GGQhSkwh2h4&t=8260s	 | •
• | 	54:26 | Mighty Vibes Vol 3: Chill Tunes to Drink Tea/Meditate To | https://www.youtube.com/watch?v=8xz9s_-sO1I	 | •
• | 	1:18:28 | Narrative Telephone Ep. 7: Caduceus' Cautionary Chronicle | https://www.youtube.com/watch?v=ihEyIZviZWA	 | •
• | 	3:38:06 | Hunted at Sea | Critical Role | Campaign 2, Episode 100 | https://www.youtube.com/watch?v=1s0odp2AI_0	 | •
• | 	1:02:23 | AWNP: Unplugged with Travis Willingham | Ep. 6 | https://www.youtube.com/watch?v=maEiaH-RRAQ	 | •
• | 	56:37 | Yee-Haw Off the Ranch: Lovers In a Dangerous Spacetime ROUND 2 | https://www.youtube.com/watch?v=cdE46qjLBGM	 | •
• | 	3:31 | The Mighty Nein Roll Hit Points for Level 12 | https://www.youtube.com/watch?v=yvcrm4RIc_o	 | •
• | 	1:06:37 | Narrative Telephone Ep. 6: Story of Beau's | https://www.youtube.com/watch?v=OLBOR2u97uo	 | •
• | 	4:54 | State of the Role: Critical Role Return Updates | https://www.youtube.com/watch?v=LVze229omm4	 | •
• | 	1:17:51 | AWNP: Unplugged with Khary Payton | Ep. 5 | https://www.youtube.com/watch?v=GnZ1HCRqdB4	 | •
• | 	1:00:07 | Yee-Haw Off the Ranch: Lovers in a Dangerous Spacetime | https://www.youtube.com/watch?v=lcyhBCFPjFs&t=668s	 | •
• | 	1:22:42 | Narrative Telephone Ep. 5: Pike's Purple Jewel Cake | https://www.youtube.com/watch?v=MEyyLcu_Lyo&t=2220s	 | •
• | 	47:29 | CR GUIDE | https://www.youtube.com/watch?v=43YsjPlxir0	 | •
• | 	1:14:36 | Narrative Telephone Ep. 4: Widogast's Web of Words | https://www.youtube.com/watch?v=cvsJDG4WRzQ	 | •
• | 	1:07:40 | AWNP: Unplugged with Matthew Mercer | Ep. 4 | https://www.youtube.com/watch?v=HtI9UTmV0EE	 | •
• | 	52:17 | Mighty Vibes Vol 2: Chill Tunes to Study/Transcribe Magic To | https://www.youtube.com/watch?v=gsu8S9Pvbio&t=630s	 | •
• | 	58:10 | Yee-Haw Off the Ranch: Yoshi's Crafted World | https://www.youtube.com/watch?v=-B9OSWjS4DM	 | •
• | 	1:03:01 | AWNP: Unplugged with Taliesin Jaffe | Ep 3 | https://www.youtube.com/watch?v=NeX5skL-390	 | •
• | 	1:00:05 | Narrative Telephone Ep. 3: Scanlan's Love Story | https://www.youtube.com/watch?v=pGtdEsxwW64	 | •
• | 	1:05:08 | Yee-Haw Off the Ranch: Moving Out | https://www.youtube.com/watch?v=VjU-ssRk8do	 | •
• | 	12:04 | Critter Hug: Laser Drag Battles! | https://www.youtube.com/watch?v=4d-ZdoKdwo4&t=98s	 | •
• | 	51:44 | AWNP: Unplugged with Ashley Johnson | Ep. 2 | https://www.youtube.com/watch?v=6WsePb_isIY	 | •
• | 	1:01:33 | Narrative Telephone Ep. 2: Jester's Tall Tale | https://www.youtube.com/watch?v=mkO1-Q8AuoE	 | •
• | 	49:49 | Mighty Vibes Vol 1: Lo-fi Beats to Doodle To | https://www.youtube.com/watch?v=XVQVXDKKlHQ	 | •
• | 	1:16:54 | Yee-Haw Off the Ranch: Unravel Two | https://www.youtube.com/watch?v=nxRcGPi7AAc	 | •
• | 	57:03 | AWNP: Unplugged Ep. 1 | https://www.youtube.com/watch?v=rOzCBZ5RIqo&t=317s	 | •
• | 	33:05 | Narrative Telephone Ep. 1: Pumat's Stroll | https://www.youtube.com/watch?v=HHCSECk3s04&t=80s	 | •
• | 	52:24 | All Work No Play: Blacksmithing with Mica Burton! | S2E5 | https://www.youtube.com/watch?v=0uk8Ci4CBAY	 | •
• | 	1:50 | Your Turn to Roll - Karaoke Music Video | https://www.youtube.com/watch?v=iJHqIl5fr8A	 | •
• | 	1:24 | Critter Hug Premieres Monday, May 4th! | https://www.youtube.com/watch?v=VSBTS1W6QKQ	 | •
• | 	1:43:53 | Explorer's Guide to Wildemount Q&A and Fireside Chat with Matthew Mercer | https://www.youtube.com/watch?v=Ir-tDmRS6Aw	 | •
• | 	56:51 | All Work No Play: Spa Gauntlet with Noelle Stevenson and Satine Phoenix! | S2E4 | https://www.youtube.com/watch?v=W-MFFeV5JPQ	 | •
• | 	3:42:12 | DOOM Eternal One-Shot | https://www.youtube.com/watch?v=CX8I4M7MPo4&t=1903s	 | •
• | 	3:48:14 | High Seas, High Stakes | Critical Role | Campaign 2, Episode 99 | https://www.youtube.com/watch?v=KmLNSQwQQXQ	 | •
• | 	1:07:34 | Talks Machina: Discussing C2E98 - Dark Waters | https://www.youtube.com/watch?v=l7XmvJGwzqM	 | •
• | 	5:08:25 | Dark Waters | Critical Role | Campaign 2, Episode 98 | https://www.youtube.com/watch?v=4OH5Sa8x_Cw	 | •
• | 	1:06:13 | Talks Machina: Discussing C2E97 - The Fancy and the Fooled | https://www.youtube.com/watch?v=c3iOkvFunTo	 | •
• | 	53:36 | All Work No Play: Magic with Ashly Burch! | S2E3 | https://www.youtube.com/watch?v=socI2SO06og	 | •
• | 	4:15:07 | The Fancy and the Fooled | Critical Role | Campaign 2, Episode 97 - Live from Chicago! | https://www.youtube.com/watch?v=SV8eKqbZZNQ	 | •
• | 	1:04:57 | Talks Machina: Discussing C2E96 - Family Shatters | https://www.youtube.com/watch?v=Tn2u2ELe3jY	 | •
• | 	1:01:31 | #EverythingIsContent: Two Point Hospital | https://www.youtube.com/watch?v=JiDDdDUU5wU	 | •
• | 	4:35:28 | Family Shatters | Critical Role | Campaign 2, Episode 96 | https://www.youtube.com/watch?v=Tmz4TS3Div8	 | •
• | 	8:32 | The Legend of the Story of the Legend of Vox Machina | https://www.youtube.com/watch?v=fv-xZBRV_EM	 | •
• | 	1:07:39 | Talks Machina: Discussing C2E95 - Blessing In Disguise | https://www.youtube.com/watch?v=XXsGgkmhl_s&t=2829s	 | •
• | 	56:18 | All Work No Play: Ghost Hunting with Laura Bailey | S2E2 | https://www.youtube.com/watch?v=q6eiaCPBOtE&t=150s	 | •
• | 	3:43:26 | Blessing In Disguise | Critical Role | Campaign 2, Episode 95 | https://www.youtube.com/watch?v=1Db5CorBfz4	 | •
• | 	4:35:57 | Cinderbrush: A Monsterhearts Story (A Critical Role One-Shot) | https://www.youtube.com/watch?v=51ykIVq9KcM&t=281s	 | •
• | 	1:05:09 | Talks Machina: Discussing C2E94 - With Great Power... | https://www.youtube.com/watch?v=zRbJXCY9yIk	 | •
• | 	4:02:41 | With Great Power... | Critical Role | Campaign 2, Episode 94 | https://www.youtube.com/watch?v=Arx8bX4E_Cw&t=1846s	 | •
• | 	5:47 | Handbooker Helper: Monsterhearts 2 | https://www.youtube.com/watch?v=9wEloZXYKvE	 | •
• | 	1:03:50 | Talks Machina: Discussing C2E93 - Misery Loves Company | https://www.youtube.com/watch?v=jJn1idpIkbg&t=1969s	 | •
• | 	46:48 | All Work No Play: Chainsaw Art with Julie Nathanson | S2E1 | https://www.youtube.com/watch?v=BdBxLbNjLZk&t=2184s	 | •
• | 	3:53:31 | Misery Loves Company | Critical Role | Campaign 2, Episode 93 | https://www.youtube.com/watch?v=PJawve2RxNM	 | •
• | 	1:08:41 | Talks Machina: Discussing C2E92 - Home Is Where the Heart Is | https://www.youtube.com/watch?v=IlLWpyj66Zo	 | •
• | 	4:13:25 | Home Is Where the Heart Is | Critical Role | Campaign 2, Episode 92 | https://www.youtube.com/watch?v=qS9rz1srwio	 | •
• | 	1:55 | All Work No Play Season 2 Premieres Tuesday, February 4th! | https://www.youtube.com/watch?v=0PPsNeFoKq4	 | •
• | 	1:03:25 | Talks Machina: Discussing C2E91 - Stone to Clay | https://www.youtube.com/watch?v=50yKc8sW1aE	 | •
• | 	3:56:05 | Stone to Clay | Critical Role | Campaign 2, Episode 91 | https://www.youtube.com/watch?v=mN6jDz0UPdo	 | •
• | 	1:13:10 | Talks Machina: Discussing C2E89-90 - Lingering Wounds & Bathhouses and Bastions | https://www.youtube.com/watch?v=W_8GIwC9FRg	 | •
• | 	3:52:30 | Bathhouses and Bastions | Critical Role | Campaign 2, Episode 90 | https://www.youtube.com/watch?v=wdHE0avQRVw&t=4711s	 | •
• | 	4:25:23 | Lingering Wounds | Critical Role | Campaign 2, Episode 89 | https://www.youtube.com/watch?v=KrZps9j2bl4	 | •
• | 	1:23:50 | Talks Machina Ep 100: Discussing C2E51 - Xhorhas | https://www.youtube.com/watch?v=TMXthmqVp1I	 | •
• | 	1:19:31 | Talks Machina: Discussing C2E50 - The Endless Burrows | https://www.youtube.com/watch?v=OsLSCux50so	 | •
• | 	1:19:16 | Talks Machina: Discussing C2E49 - A Game of Names | https://www.youtube.com/watch?v=tZdUYUqzPok	 | •
• | 	1:13:08 | Talks Machina: Discussing C2E48 - Homeward Bound | https://www.youtube.com/watch?v=sG_-7unfmFY	 | •
• | 	1:17:03 | Talks Machina: Discussing C2E47 - The Second Seal | https://www.youtube.com/watch?v=HtmurQkVyrs	 | •
• | 	1:26:41 | Talks Machina: Discussing Campaign 2 So Far | https://www.youtube.com/watch?v=lQAHJSvUfGE	 | •
• | 	1:16:52 | Talks Machina: Discussing C2E45 - The Stowaway | https://www.youtube.com/watch?v=pdKBLOzkjvM	 | •
• | 	1:18:07 | Talks Machina: Discussing C2E44 - The Diver's Grave | https://www.youtube.com/watch?v=HR9pjfU1eD4	 | •
• | 	1:18:04 | Talks Machina: Discussing C2E43 - In Hot Water | https://www.youtube.com/watch?v=7o-8D0et8nU	 | •
• | 	1:15:53 | Talks Machina: Discussing C2E42 - A Hole in the Plan | https://www.youtube.com/watch?v=YZqJzNj_1tI	 | •
• | 	1:16:29 | Talks Machina: Discussing C2E41 - A Pirate's Life for Me | https://www.youtube.com/watch?v=AqmpeaVon3E	 | •
• | 	1:17:02 | Talks Machina: Discussing C2E40 - Dubious Pursuits | https://www.youtube.com/watch?v=jhUuNEj-Z6w	 | •
• | 	1:17:50 | Talks Machina: Discussing Laura's One Shot - The Club of Misfits | https://www.youtube.com/watch?v=F4-wAeIAWms	 | •
• | 	1:16:55 | Talks Machina: Discussing C2E39 - Temple of the False Serpent | https://www.youtube.com/watch?v=0UH8CWOfFOA	 | •
• | 	1:15:10 | Talks Machina: Discussing C2E38 - Welcome to the Jungle | https://www.youtube.com/watch?v=AGSPubnZXz4	 | •
• | 	1:22:51 | Talks Machina: Discussing C2E37 - Dangerous Liaisons | https://www.youtube.com/watch?v=0emH3vqdkNM	 | •
• | 	1:17:07 | Talks Machina: Discussing C2E36 - O Captain, Who's Captain? | https://www.youtube.com/watch?v=dtQ_XDO3UqM	 | •
• | 	1:21:50 | Talks Machina: Discussing C2E35 - Dockside Diplomacy | https://www.youtube.com/watch?v=ftA1rZ76BF0	 | •
• | 	1:18:18 | Talks Machina: Discussing C2E34 - Encroaching Waters | https://www.youtube.com/watch?v=XdjbYE7UAsg	 | •
• | 	1:17:18 | Talks Machina: Discussing C2E33 - The Ruby and the Sapphire | https://www.youtube.com/watch?v=y4gnkTbeVZ8	 | •
• | 	1:18:34 | Talks Machina: Discussing C2E32 - Beyond the Boundaries | https://www.youtube.com/watch?v=k0eUbNl5v7g	 | •
• | 	1:25:15 | Talks Machina: Discussing C2E31- Commerce & Chaos | https://www.youtube.com/watch?v=390xOs2qJpY	 | •
• | 	1:15:54 | Talks Machina: Discussing C2E30 - The Journey Home | https://www.youtube.com/watch?v=hiw83i-E4mM	 | •
• | 	1:17:08 | Talks Machina: Discussing C2E29 - The Stalking Nightmare | https://www.youtube.com/watch?v=i7mR3Q64oLU	 | •
• | 	1:19:30 | Talks Machina: Discussing C2E27-28 - Converging Fury & Within the Nest | https://www.youtube.com/watch?v=Vu6-nrkzUq4	 | •
• | 	1:02:39 | Live from San Diego Comic Con 2018 | Talks Machina | https://www.youtube.com/watch?v=YSLu_mwax0Q	 | •
• | 	1:23:43 | Talks Machina: Discussing C2E26 - Found & Lost | https://www.youtube.com/watch?v=D3rwMS_yqGo	 | •
• | 	1:18:56 | Talks Machina: Discussing C2E25 - Divergent Paths | https://www.youtube.com/watch?v=Sp9PQqPknN0	 | •
• | 	1:16:00 | Talks Machina: Discussing C2E24 - The Hour of Honor | https://www.youtube.com/watch?v=lNTx5TF6_90	 | •
• | 	1:21:11 | Talks Machina: Discussing C2E23 - Have Bird, Will Travel | https://www.youtube.com/watch?v=7FixsytANX0	 | •
• | 	1:20:17 | Talks Machina: Discussing C2E22 - Lost Treasures | https://www.youtube.com/watch?v=HrFftS8jnAI&t=1560s	 | •
• | 	1:22:03 | Talks Machina: Discussing C2E21 - Stalker in the Swamp | https://www.youtube.com/watch?v=e0uWAnMDQ6I	 | •
• | 	1:19:09 | Talks Machina: Discussing C2E20 - Labenda Awaits | https://www.youtube.com/watch?v=WuIm-huSIOw	 | •
• | 	1:21:30 | Talks Machina: Discussing C2E19 - The Gentleman's Path | https://www.youtube.com/watch?v=cDmc_RjHhG0	 | •
• | 	4:37:23 | Liam’s One-Shot: The Song of the Lorelei | https://www.youtube.com/watch?v=cb1z68RELN4&t=504s	 | •
• | 	2:47:49 | Critical Role and the Club of Misfits (Laura's One-Shot) | https://www.youtube.com/watch?v=PRmVQKOy9Bo&t=419s	 | •
• | 	1:39 | Mighty Nein Animated Intro - Your Turn To Roll | https://www.youtube.com/watch?v=LhFETREAvhc	 | •
• | 	4:03:30 | Xhorhas | Critical Role | Campaign 2, Episode 51 | https://www.youtube.com/watch?v=jnn4dpC2qAQ	 | •
• | 	4:09:09 | The Endless Burrows | Critical Role | Campaign 2, Episode 50 | https://www.youtube.com/watch?v=eRFetHZDSg4	 | •
• | 	1:43:53 | End of 2019 Fireside Chat | https://www.youtube.com/watch?v=lLEuog9UDXs	 | •
• | 	3:44:27 | A Game of Names | Critical Role | Campaign 2, Episode 49 | https://www.youtube.com/watch?v=Xmsjf8jQZWE	 | •
• | 	4:09:03 | Homeward Bound | Critical Role | Campaign 2, Episode 48 | https://www.youtube.com/watch?v=ozSrsj6TtKc	 | •
• | 	3:49:23 | The Second Seal | Critical Role | Campaign 2, Episode 47 | https://www.youtube.com/watch?v=pj3CeW_a1hQ	 | •
• | 	3:58:53 | A Storm of Memories | Critical Role | Campaign 2, Episode 46 | https://www.youtube.com/watch?v=jw1AhahRFTY&t=1s	 | •
• | 	4:58:55 | The Stowaway | Critical Role | Campaign 2, Episode 45 | https://www.youtube.com/watch?v=ujWYp5Wr64U&t=7730s	 | •
• | 	4:12:20 | The Diver's Grave | Critical Role | Campaign 2, Episode 44 | https://www.youtube.com/watch?v=P8UVu-kGusg	 | •
• | 	3:40:13 | In Hot Water | Critical Role | Campaign 2, Episode 43 | https://www.youtube.com/watch?v=dyArEJYKr5U&t=1649s	 | •
• | 	3:54:33 | A Hole in the Plan | Critical Role | Campaign 2, Episode 42 | https://www.youtube.com/watch?v=W723E1ofhcE	 | •
• | 	3:40:43 | A Pirate's Life for Me | Critical Role | Campaign 2, Episode 41 | https://www.youtube.com/watch?v=NOh9T7YeR3o	 | •
• | 	3:10:40 | Dubious Pursuits | Critical Role| Campaign 2, Episode 40 | https://www.youtube.com/watch?v=etjou2cxZJw	 | •
• | 	4:21:51 | Temple of the False Serpent | Critical Role| Campaign 2, Episode 39 | https://www.youtube.com/watch?v=M6XpCPfDP8M	 | •
• | 	3:25:49 | Welcome to the Jungle | Critical Role | Campaign 2, Episode 38 | https://www.youtube.com/watch?v=GOsCZ8kQom0	 | •
• | 	3:18:29 | Dangerous Liaisons | Critical Role | Campaign 2, Episode 37 - Live from New York! | https://www.youtube.com/watch?v=B2IYaW9lUM4	 | •
• | 	4:04:54 | O Captain, Who's Captain? | Critical Role | Campaign 2, Episode 36 | https://www.youtube.com/watch?v=AB-yVfipWTU	 | •
• | 	3:51:26 | Dockside Diplomacy | Critical Role | Campaign 2, Episode 35 | https://www.youtube.com/watch?v=39TP4YZHf3M	 | •
• | 	4:22:53 | Encroaching Waters | Critical Role | Campaign 2, Episode 34 | https://www.youtube.com/watch?v=GcmINbstp-E	 | •
• | 	3:54:10 | The Ruby and the Sapphire | Critical Role | Campaign 2, Episode 33 | https://www.youtube.com/watch?v=QbrorVyH4mk&t=2090s	 | •
• | 	3:45:22 | Beyond the Boundaries | Critical Role | Campaign 2, Episode 32 | https://www.youtube.com/watch?v=aRQr1QMNHsQ	 | •
• | 	3:26:35 | Commerce & Chaos | Critical Role | Campaign 2, Episode 31 | https://www.youtube.com/watch?v=FJ25t2cM6Ws	 | •
• | 	3:34:07 | The Journey Home | Critical Role | Campaign 2, Episode 30 | https://www.youtube.com/watch?v=nmiBiqC3fDY	 | •
• | 	4:10:58 | The Stalking Nightmare | Critical Role | Campaign 2, Episode 29 - Live from Indianapolis! | https://www.youtube.com/watch?v=L3vV7ZdE_w8	 | •
• | 	4:12:18 | Within the Nest | Critical Role | Campaign 2, Episode 28 | https://www.youtube.com/watch?v=_jDCU8IRyfA	 | •
• | 	4:03:18 | Converging Fury | Critical Role | Campaign 2, Episode 27 | https://www.youtube.com/watch?v=p6miK4kIwIE	 | •
• | 	4:53:29 | Found & Lost | Critical Role | Campaign 2, Episode 26 | https://www.youtube.com/watch?v=NZVqPja6Alg&t=15861s	 | •
• | 	4:00:26 | Divergent Paths | Critical Role | Campaign 2, Episode 25 | https://www.youtube.com/watch?v=CoomA-qeJMI	 | •
• | 	3:46:09 | The Hour of Honor | Critical Role | Campaign 2, Episode 24 | https://www.youtube.com/watch?v=YtNB-7Jz1LQ	 | •
• | 	3:57:35 | Have Bird, Will Travel | Critical Role | Campaign 2 Episode 23 | https://www.youtube.com/watch?v=xr1dOEL2EHQ	 | •
• | 	3:37:06 | Lost Treasures | Critical Role | Campaign 2, Episode 22 | https://www.youtube.com/watch?v=aQxpxWz38P8	 | •
• | 	4:34:15 | Stalker in the Swamp | Critical Role | Campaign 2, Episode 21 | https://www.youtube.com/watch?v=YTARojk9tBY&t=340s	 | •
• | 	3:43:42 | Labenda Awaits | Critical Role | Campaign 2, Episode 20 | https://www.youtube.com/watch?v=jyCoCqhsFp4	 | •
• | 	1:04:15 | Talks Machina: Discussing C2E88 - Unwanted Reunions | https://www.youtube.com/watch?v=m6RYdYvdB-M	 | •
• | 	1:03:16 | Travis' Yee-Haw Game Ranch: Super Smash Bros. Ultimate | S2E10 | https://www.youtube.com/watch?v=szIV-Ii6d6Y	 | •
• | 	15:29 | Fine Details with Taliesin Jaffe | MINI PRIMETIME | https://www.youtube.com/watch?v=uO3Qt8XIAws	 | •
• | 	6:36 | Critical Recap -- Episode 88: Unwanted Reunions | https://www.youtube.com/watch?v=-yHSUgrzQVY	 | •
• | 	4:11:35 | Unwanted Reunions | Critical Role | Campaign 2, Episode 88 | https://www.youtube.com/watch?v=d-xQ5dsILYU	 | •
• | 	1:02:18 | Talks Machina: Discussing C2E87 - Punishment and Politics | https://www.youtube.com/watch?v=IC2Z9uFTU-g	 | •
• | 	23:29 | Battle Damage with Travis Willingham: MINI PRIMETIME | https://www.youtube.com/watch?v=qFdxk9kRkEE	 | •
• | 	5:37 | Critical Recap -- Episode 87: Politics and Punishment | https://www.youtube.com/watch?v=DyW21Pr5x88	 | •
• | 	3:21:13 | Punishment and Politics | Critical Role | Campaign 2, Episode 87 | https://www.youtube.com/watch?v=3RnC_HS2Ck4	 | •
• | 	1:42:31 | #EverythingIsContent: Disney Villainous | https://www.youtube.com/watch?v=BO7lLiRTUJ8	 | •
• | 	1:35:24 | Drawing Action Poses with Sung Jin from Titmouse | Pub Draw S2E7 | https://www.youtube.com/watch?v=JNqa3Dfvm64	 | •
• | 	1:09:03 | Travis' Yee-Haw Game Ranch: Super Mario Party | S2E9 | https://www.youtube.com/watch?v=NT5aRm6OYPQ	 | •
• | 	20:04 | Painting Age and Skin Tones with Matthew Mercer | MINI PRIMETIME | https://www.youtube.com/watch?v=KZ-YmodLaqE	 | •
• | 	4:36:12 | The Adventures of the Darrington Brigade | https://www.youtube.com/watch?v=pVu_Ib1fpVI&t=864s	 | •
• | 	1:02:17 | Talks Machina: Discussing C2E86 - The Cathedral | https://www.youtube.com/watch?v=uWO8v-TOvG8	 | •
• | 	23:12 | Basing with Laura Bailey | MINI PRIMETIME | https://www.youtube.com/watch?v=gCm2JrgXJFc	 | •
• | 	5:51 | Critical Recap -- Episode 86: The Cathedral | https://www.youtube.com/watch?v=kA9OwBRTHjU	 | •
• | 	5:03:25 | The Cathedral | Critical Role | Campaign 2, Episode 86 | https://www.youtube.com/watch?v=Wao4L1Mfam4	 | •
• | 	1:39:34 | Drawing Fjord with Travis Willingham | Pub Draw S2E6 | https://www.youtube.com/watch?v=5s4_J_nqEG0	 | •
• | 	1:01:27 | Talks Machina: Discussing C2E85 - The Threads Converge | https://www.youtube.com/watch?v=1AysuA4yuss	 | •
• | 	1:06:08 | Travis' Yee-Haw Game Ranch - CoD: Modern Warfare | S2E8 | https://www.youtube.com/watch?v=fyhY3314kBU	 | •
• | 	15:00 | Painting Fades with Marisha Ray | MINI PRIMETIME | https://www.youtube.com/watch?v=bW-YY3K7sXI	 | •
• | 	5:57 | Critical Recap -- Episode 85: The Threads Converge | https://www.youtube.com/watch?v=Z_XXhkS_VEE	 | •
• | 	4:29:54 | The Threads Converge | Critical Role | Campaign 2, Episode 85 | https://www.youtube.com/watch?v=J1Efz6E3_-0	 | •
• | 	2:17:26 | UnDeadwood Part IV: Goodnight, Miss Miriam | https://www.youtube.com/watch?v=WHxuuQ-P2Cg	 | •
• | 	1:33:23 | Drawing Kashaw with Will Friedle | Pub Draw S2E5 | https://www.youtube.com/watch?v=hez5fnRNR0k	 | •
• | 	58:13 | Talks Machina: Discussing C2E84 - Titles and Tattoos | https://www.youtube.com/watch?v=_NmZ2b_Q3So	 | •
• | 	16:48 | Painting Grayscale with Babs Tarr | MINI PRIMETIME | https://www.youtube.com/watch?v=wsN1J3obAhQ	 | •
• | 	5:37 | Critical Recap -- Episode 84: Titles and Tattoos | https://www.youtube.com/watch?v=fh3TX1Puun0	 | •
• | 	4:01:41 | Titles and Tattoos | Critical Role | Campaign 2, Episode 84 | https://www.youtube.com/watch?v=vFMddwkLjJw	 | •
• | 	1:36:08 | Drawing Hana from the Crystal Palace with Erika Ishii | Pub Draw S2E4 | https://www.youtube.com/watch?v=TzEpHLjkBhg	 | •
• | 	1:17:31 | Talks Machina: Discussing C2E83 - Dark Bargains | https://www.youtube.com/watch?v=Mkk9QvwAoow	 | •
• | 	57:48 | Travis' Yee-Haw Game Ranch: Overcooked 2 | S2E7 | https://www.youtube.com/watch?v=dtoc9TnqMTc&t=1331s	 | •
• | 	13:34 | Dirt and Grime with Liam O'Brien | MINI PRIMETIME | https://www.youtube.com/watch?v=Brla_kfylsY	 | •
• | 	6:16 | Critical Recap -- Episode 83: Dark Bargains | https://www.youtube.com/watch?v=Anb7m7N8u14	 | •
• | 	4:11:06 | Dark Bargains | Critical Role | Campaign 2, Episode 83 | https://www.youtube.com/watch?v=YpoHqSgjTjg	 | •
• | 	2:03:12 | UnDeadwood Part III: I Got My Wish | https://www.youtube.com/watch?v=jSGw5L9xds0	 | •
• | 	1:39:19 | Painting Orly with Matt Mercer! | Pub Draw S2E3 | https://www.youtube.com/watch?v=JfZ5XP3yMVE	 | •
• | 	1:03:50 | Talks Machina: Discussing C2E82 - The Beat of the Permaheart | https://www.youtube.com/watch?v=CTUSBJiSmWw	 | •
• | 	13:49 | Limited Color Palette with Sam Riegel | MINI PRIMETIME | https://www.youtube.com/watch?v=ZMDbfdn8etU	 | •
• | 	5:36 | Critical Recap -- Episode 82: The Beat of the Permaheart | https://www.youtube.com/watch?v=wgqM6QHT2pM	 | •
• | 	4:27:09 | The Beat of the Permaheart | Critical Role | Campaign 2, Episode 82 | https://www.youtube.com/watch?v=2Jv3OPxR7F8	 | •
• | 	2:40:04 | UnDeadwood Part II: God Don't Play Cards | https://www.youtube.com/watch?v=JlAW2qeLsL0	 | •
• | 	1:02:13 | #EverythingIsContent: Baldur's Gate | https://www.youtube.com/watch?v=WybZrYmXpFE	 | •
• | 	4:22 | State of the Role: Fall 2019 Updates! | https://www.youtube.com/watch?v=yE5rQs-UO3A	 | •
• | 	1:35:38 | Drawing Vex with Laura Bailey! | Pub Draw S2E2 | https://www.youtube.com/watch?v=vVJXK_0520M	 | •
• | 	58:39 | Talks Machina: Discussing C2E81 - From Door to Door | https://www.youtube.com/watch?v=OnmgRU2lCQ8	 | •
• | 	1:03:26 | Travis' Yee-Haw Game Ranch: Outlast | S2E6 | https://www.youtube.com/watch?v=xj5i9EbRadI	 | •
• | 	5:28 | Critical Recap -- Episode 81: From Door to Door | https://www.youtube.com/watch?v=kjXezwXQSTI	 | •
• | 	4:16:42 | From Door to Door | Critical Role | Campaign 2, Episode 81 | https://www.youtube.com/watch?v=XPu0ANzvQdQ	 | •
• | 	2:03:42 | UnDeadwood Part I: Stay Close, Reverend | https://www.youtube.com/watch?v=AEIGOY6WDoA	 | •
• | 	1:30:27 | Draw Reani with Mica Burton! | Pub Draw S2E1 | https://www.youtube.com/watch?v=ZMfmzMmz12A	 | •
• | 	1:05:29 | Talks Machina: Discussing C2E80 - The Folding Halls | https://www.youtube.com/watch?v=--q3bEC64E8	 | •
• | 	1:10:05 | #EverythingIsContent - 3D Printing Miniatures from Hero Forge | https://www.youtube.com/watch?v=KC5zh54xZQo	 | •
• | 	1:09 | Mini Primetime with Will Friedle Premieres Wednesday, October 30th! | https://www.youtube.com/watch?v=ie1Cc5cdfg4	 | •
• | 	6:03 | Critical Recap -- Episode 80: The Folding Halls | https://www.youtube.com/watch?v=auaHGElrOK8	 | •
• | 	3:41:13 | The Folding Halls | Critical Role | Campaign 2, Episode 80 | https://www.youtube.com/watch?v=aHKloZn2rII	 | •
• | 	10:40 | Travis Willingham's Spooktacular | https://www.youtube.com/watch?v=jgm6w1Oene0	 | •
• | 	1:04:54 | Travis' Yee-Haw Game Ranch: Left 4 Dead 2 & Pacify | S2E5 | https://www.youtube.com/watch?v=rI0J8fFVNKk	 | •
• | 	1:08 | UnDeadwood Premieres Friday, October 18th! | https://www.youtube.com/watch?v=STveMGx9QZ0	 | •
• | 	1:05:20 | Talks Machina: Discussing C2E79 - Through the Trees | https://www.youtube.com/watch?v=-OxoZgqcfGk	 | •
• | 	5:18 | Critical Recap -- Episode 79: Through the Trees | https://www.youtube.com/watch?v=3GmxqOaeQo4	 | •
• | 	4:19:39 | Through the Trees | Critical Role | Campaign 2, Episode 79 | https://www.youtube.com/watch?v=yG2vBIu1ieg	 | •
• | 	1:03:14 | #EverythingIsContent - Magic: The Gathering Arena | https://www.youtube.com/watch?v=dicKiLMqXAs	 | •
• | 	58:19 | Talks Machina: Discussing C2E78 - Between the Lines | https://www.youtube.com/watch?v=2d-EP4xIE9g	 | •
• | 	1:00:26 | Travis' Yee-Haw Game Ranch: Gears 5 | S2E4 | https://www.youtube.com/watch?v=5sdIOc-hZHA	 | •
• | 	6:41 | Critical Recap -- Episode 78: Between the Lines | https://www.youtube.com/watch?v=MRzEsNSzwpE	 | •
• | 	4:07:56 | Between the Lines | Critical Role | Campaign 2, Episode 78 | https://www.youtube.com/watch?v=Z8Jbn8VoXaw&t=14088s	 | •
• | 	1:09:04 | Tavern Keeper Build | The Legend of Vox Machina | https://www.youtube.com/watch?v=rxtwwWhG6ew	 | •
• | 	1:31:08 | Between the Sheets: Felicia Day | https://www.youtube.com/watch?v=6eTgJvF79Hc	 | •
• | 	1:02:45 | #EverythingIsContent - Solasta: Crown of the Magister | https://www.youtube.com/watch?v=49haijyLyB0	 | •
• | 	1:16:07 | Talks Machina: Discussing C2E76-77 and Dalen's Closet | https://www.youtube.com/watch?v=FiRTgVhpgL8	 | •
• | 	54:54 | Travis' Yee-Haw Game Ranch: Mortal Kombat 11 | S2E3 | https://www.youtube.com/watch?v=wnE5UzlxYcU	 | •
• | 	4:37 | Critical Recap -- Episode 77: A Tangled Web | https://www.youtube.com/watch?v=p3OgMAJ1N-4	 | •
• | 	3:54:26 | A Tangled Web | Critical Role | Campaign 2, Episode 77 | https://www.youtube.com/watch?v=IW-wt6u7GNQ&t=1460s	 | •
• | 	4:09:45 | Dalen's Closet | Vox Machina One-Shot | https://www.youtube.com/watch?v=0oclW3MXABA	 | •
• | 	1:59 | Percy and Vex's Wedding Rings Have Arrived! | https://www.youtube.com/watch?v=KFCj2qUiYLU	 | •
• | 	6:10 | Critical Recap -- Episode 76: Refjorged | https://www.youtube.com/watch?v=ESTrAq3LDyo	 | •
• | 	5:00:32 | Refjorged | Critical Role | Campaign 2, Episode 76 | https://www.youtube.com/watch?v=BzHkVh80kVQ&t=1s	 | •
• | 	1:02:23 | Talks Machina: Discussing C2E75 - Rime and Reason | https://www.youtube.com/watch?v=bKa8SpzJpxc	 | •
• | 	1:01:22 | Travis' Yee-Haw Game Ranch: Cuphead | S2E2 | https://www.youtube.com/watch?v=FPUMeR2EptE	 | •
• | 	5:50 | Critical Recap -- Episode 75: Rime and Reason | https://www.youtube.com/watch?v=qP9CVn32f9M	 | •
• | 	2:26 | Every Critter Insult from Yee-Haw Game Ranch | https://www.youtube.com/watch?v=Q22ogt5_pWc	 | •
• | 	4:17:38 | Rime and Reason | Critical Role | Campaign 2, Episode 75 | https://www.youtube.com/watch?v=Z1pJ0essryI	 | •
• | 	1:02:14 | Talks Machina: Discussing C2E74 - Manifold Morals | https://www.youtube.com/watch?v=oNVN6cyMIkM	 | •
• | 	6:28 | Critical Recap -- Episode 74: Manifold Morals | https://www.youtube.com/watch?v=WaiKV_URiks	 | •
• | 	4:09:24 | Manifold Morals | Critical Role | Campaign 2, Episode 74 | https://www.youtube.com/watch?v=rMZYyG8qm-Y	 | •
• | 	6:02 | Introducing Your New D&D Beyond Presidents | https://www.youtube.com/watch?v=u7tryH_Dvlg	 | •
• | 	1:03:58 | Talks Machina: Discussing C2E73 - Uthodurn | https://www.youtube.com/watch?v=w60aPm7oM4o&t=2816s	 | •
• | 	1:03:43 | Travis' Yee-Haw Game Ranch: GTA V - Top Fun Mode | S2E1 | https://www.youtube.com/watch?v=9iNfjd6i6PY	 | •
• | 	1:28:38 | Between the Sheets: Amanda Palmer | https://www.youtube.com/watch?v=5wwJqAI8tw8	 | •
• | 	5:48 | Critical Recap -- Episode 73: Uthodurn | https://www.youtube.com/watch?v=UuyYRqjJN7w	 | •
• | 	4:10:11 | Uthodurn | Critical Role | Campaign 2, Episode 73 - Live From Indianapolis! | https://www.youtube.com/watch?v=M5lRGaV-xQk	 | •
• | 	59:13 | Talks Machina: Discussing C2E72 - Clay and Dust | https://www.youtube.com/watch?v=kwQT0QjD338	 | •
• | 	4:04:53 | Call of Cthulhu: Shadow of the Crystal Palace | https://www.youtube.com/watch?v=0uhqZdJ8swQ&t=2532s	 | •
• | 	6:06 | Critical Recap -- Episode 72: Clay and Dust | https://www.youtube.com/watch?v=-0LVh6yogBs	 | •
• | 	3:38:08 | Clay and Dust | Critical Role | Campaign 2, Episode 72 | https://www.youtube.com/watch?v=8tCcRA2aogk	 | •
• | 	59:15 | Talks Machina: SDCC 2019 Panel | https://www.youtube.com/watch?v=MeWlx7D2IH4	 | •
• | 	5:22 | Critical Recap -- Episode 71: Family Gathering | https://www.youtube.com/watch?v=D51TnWSchXw	 | •
• | 	3:24:18 | Family Gathering | Critical Role | Campaign 2, Episode 71 | https://www.youtube.com/watch?v=XpLgITRGA30	 | •
• | 	1:01:13 | Talks Machina: Discussing C2E70 - Causatum | https://www.youtube.com/watch?v=Zsp7ZaSFgq8	 | •
• | 	5:07 | Critical Recap -- Episode 70: Causatum | https://www.youtube.com/watch?v=uKp6rZi4hi4	 | •
• | 	3:53:13 | Causatum | Critical Role | Campaign 2, Episode 70 | https://www.youtube.com/watch?v=kKeNW01RJYY	 | •
• | 	1:02:19 | Talks Machina: Discussing C2E69 - The King's Cage | https://www.youtube.com/watch?v=5jd3ZB15UoQ	 | •
• | 	1:10:25 | Travis' Yee-Haw Game Ranch: Broforce | S1E9 | https://www.youtube.com/watch?v=zVRmvO0GtW4	 | •
• | 	5:46 | Critical Recap -- Episode 69: The King's Cage | https://www.youtube.com/watch?v=AHamhkb91og	 | •
• | 	4:18:31 | The King's Cage | Critical Role | Campaign 2, Episode 69 | https://www.youtube.com/watch?v=Sj5wImPuG-k	 | •
• | 	1:08:49 | Talks Machina: Discussing C2E68 - Reflections | https://www.youtube.com/watch?v=U-0hGT-BItA	 | •
• | 	5:35 | Critical Recap -- Episode 68: Reflections | https://www.youtube.com/watch?v=agxBFr1WCYA	 | •
• | 	3:48:53 | Reflections | Critical Role | Campaign 2, Episode 68 | https://www.youtube.com/watch?v=5GAclNF61Xs	 | •
• | 	3:58:15 | The Search For Bob | https://www.youtube.com/watch?v=AfEZF5G9HV4	 | •
• | 	59:30 | Talks Machina: Discussing C2E67 - Beyond the Eyes of Angels | https://www.youtube.com/watch?v=AXpJrvV7n5M	 | •
• | 	1:00:59 | MAME Drop: Anime Games with Erica Lindbeck! | https://www.youtube.com/watch?v=L7rWQHYIrFc	 | •
• | 	4:02 | Handbooker Helper: Dwarf (Quick Build) | https://www.youtube.com/watch?v=KB0ZuQ3s1OI	 | •
• | 	5:41 | Critical Recap -- Episode 67: Beyond the Eyes of Angels | https://www.youtube.com/watch?v=3cA8zgNN5t4	 | •
• | 	7:00 | A Special Anniversary Update (State of the Role) | https://www.youtube.com/watch?v=Fc6qD6ALGKw	 | •
• | 	4:24:26 | Beyond the Eyes of Angels | Critical Role | Campaign 2, Episode 67 | https://www.youtube.com/watch?v=hdtabnXnckw	 | •
• | 	59:26 | #EverythingIsContent: Knights of Pen & Paper II | https://www.youtube.com/watch?v=_2x7bGnVlXU	 | •
• | 	1:00:01 | Talks Machina: Discussing C2E66 - Beneath Bazzoxan | https://www.youtube.com/watch?v=qF59qP1WHSE	 | •
• | 	1:04:10 | Travis' Yee-Haw Game Ranch: TowerFall Ascension | S1E8 | https://www.youtube.com/watch?v=QLTZvsMiqE0	 | •
• | 	3:33 | Handbooker Helper: Half-Orc (Quick Build) | https://www.youtube.com/watch?v=feR2BWWJou4	 | •
• | 	5:55 | Critical Recap -- Episode 66: Beneath Bazzoxan | https://www.youtube.com/watch?v=AdKire4QAq4	 | •
• | 	4:25:05 | Beneath Bazzoxan | Critical Role | Campaign 2, Episode 66 | https://www.youtube.com/watch?v=JGnGZbuvSJY&t=11959s	 | •
• | 	1:05:10 | Talks Machina: Discussing C2E65 - Chases and Trees | https://www.youtube.com/watch?v=Ck2K4IN9krc	 | •
• | 	6:58 | Handbooker Helper: Backgrounds | https://www.youtube.com/watch?v=QDeXA7dxDSA&t=317s	 | •
• | 	1:17:13 | Between the Sheets: Ashley Johnson | https://www.youtube.com/watch?v=0kAeCN8UahA	 | •
• | 	6:01 | Critical Recap -- Episode 65: Chases and Trees | https://www.youtube.com/watch?v=ApxIHBWdyzI	 | •
• | 	3:56:28 | Chases and Trees | Critical Role | Campaign 2, Episode 65 | https://www.youtube.com/watch?v=HNODkS9gZmM&t=709s	 | •
• | 	3:39:19 | Tails of Equestria One-Shot | https://www.youtube.com/watch?v=F_yjWbguXW4	 | •
• | 	1:00:05 | Talks Machina: Discussing C2E64 - A Dangerous Chase | https://www.youtube.com/watch?v=zHlEwihWaHo	 | •
• | 	1:01:13 | Travis' Yee-Haw Game Ranch: Overcooked! | S1E7 | https://www.youtube.com/watch?v=ymuf1bTst28	 | •
• | 	3:26 | Handbooker Helper: Half-Elf (Quick Build) | https://www.youtube.com/watch?v=WNK0V07hwj0	 | •
• | 	6:09 | Critical Recap -- Episode 64: A Dangerous Chase | https://www.youtube.com/watch?v=mH4WxWniih0	 | •
• | 	3:28:58 | A Dangerous Chase | Critical Role | Campaign 2, Episode 64 | https://www.youtube.com/watch?v=3yfLht7w7Yk	 | •
• | 	1:11:18 | Talks Machina: Discussing C2E63 - Intervention | https://www.youtube.com/watch?v=8RwnQMg4ITQ	 | •
• | 	52:32 | Stephen Colbert's D&D Adventure with Matthew Mercer (Red Nose Day 2019) | https://www.youtube.com/watch?v=3658C2y4LlA	 | •
• | 	1:02:45 | MAME Drop: Mech Games with Mark Hulmes! | https://www.youtube.com/watch?v=fYbmMpnI8n8	 | •
• | 	3:25 | Handbooker Helper: Feats | https://www.youtube.com/watch?v=EWZIiL3vGYM	 | •
• | 	5:42 | Critical Recap -- Episode 63: Intervention | https://www.youtube.com/watch?v=ujtWDVZc9dU	 | •
• | 	3:53:18 | Intervention | Critical Role | Campaign 2, Episode 63 | https://www.youtube.com/watch?v=CQWv6zQZTGo	 | •
• | 	55:05 | Talks Machina: Discussing C2E62 - Domestic Respite | https://www.youtube.com/watch?v=mqLHs__ckwI	 | •
• | 	1:05:15 | Laura Bailey's Yee-Haw Game Ranch: Saints Row IV | S1E6 | https://www.youtube.com/watch?v=ekYdPmlr82g	 | •
• | 	4:34 | Handbooker Helper: Gnome (Quick Build) | https://www.youtube.com/watch?v=Qky3ZqepvvU	 | •
• | 	5:53 | Critical Recap -- Episode 62: Domestic Respite | https://www.youtube.com/watch?v=IGyrng_YXpQ	 | •
• | 	3:58:58 | Domestic Respite | Critical Role | Campaign 2, Episode 62 | https://www.youtube.com/watch?v=-EfuYx_YWC8	 | •
• | 	59:33 | Talks Machina: Discussing C2E61 - Agreements | https://www.youtube.com/watch?v=Wfqm5SXRNbI	 | •
• | 	1:01:49 | MAME Drop: Gale Force Five! | https://www.youtube.com/watch?v=lsf_cFXxWfs	 | •
• | 	8:25 | Handbooker Helper: Skills | https://www.youtube.com/watch?v=MdndSpFbzCU	 | •
• | 	5:57 | Critical Recap -- Episode 61: Agreements | https://www.youtube.com/watch?v=Tm3z7UReMgo	 | •
• | 	3:26:38 | Agreements | Critical Role | Campaign 2, Episode 61 | https://www.youtube.com/watch?v=Ck_yuplT8O8	 | •
• | 	59:59 | Talks Machina: Discussing C2E60 - A Turtle By Any Other Name | https://www.youtube.com/watch?v=cuHnQfEdDH4	 | •
• | 	1:09:35 | Travis' Yee-Haw Game Ranch: Portal 2 | S1E5 | https://www.youtube.com/watch?v=XN1_pffRp9M	 | •
• | 	3:58 | Handbooker Helper: Dragonborn (Quick Build) | https://www.youtube.com/watch?v=VvtQeeLAKeA	 | •
• | 	5:48 | Critical Recap -- Episode 60: A Turtle By Any Other Name | https://www.youtube.com/watch?v=MuzNved-aus	 | •
• | 	3:56:02 | A Turtle By Any Other Name | Critical Role | Campaign 2, Episode 60 | https://www.youtube.com/watch?v=yJgaEh_GZ6M	 | •
• | 	1:02:18 | Talks Machina: Discussing Campaign 2, Episode 59 - Perspective | https://www.youtube.com/watch?v=vE1nSdHkK4E	 | •
• | 	12:44 | Handbooker Helper: Condition Effects | https://www.youtube.com/watch?v=qk0X_Y_Xpgo	 | •
• | 	6:18 | Critical Recap -- Episode 59: Perspective | https://www.youtube.com/watch?v=DnGSFrWctAY	 | •
• | 	3:56:06 | Perspective | Critical Role | Campaign 2, Episode 59 | https://www.youtube.com/watch?v=-qveongNOUI	 | •
• | 	30:38 | Kickstarter Campaign End Party with Joel Hodgson! | https://www.youtube.com/watch?v=txCHuNZ_KMI	 | •
• | 	56:35 | Talks Machina: Discussing Campaign 2, Episode 58 - Wood and Steel | https://www.youtube.com/watch?v=jQbo3G_uD_w	 | •
• | 	1:00:31 | MAME Drop: Fantasy Games | https://www.youtube.com/watch?v=78e6iOJ1a_Y	 | •
• | 	4:09 | Handbooker Helper: Halfling (Quick Build) | https://www.youtube.com/watch?v=Zol3XT0gMDs	 | •
• | 	6:00 | Critical Recap -- Episode 58: Wood and Steel | https://www.youtube.com/watch?v=dBABw1T2goU	 | •
• | 	3:48:20 | Wood and Steel | Critical Role | Campaign 2, Episode 58 | https://www.youtube.com/watch?v=7Z610fSoifk	 | •
• | 	1:44:39 | Draw Gilmore with Matt! | Pub Draw | https://www.youtube.com/watch?v=FTcrogoB-rQ	 | •
• | 	1:00:51 | Talks Machina: Discussing Campaign 2, Episode 57 - In Love and War | https://www.youtube.com/watch?v=VlD0LBWmols	 | •
• | 	1:03:24 | Travis' Yee-Haw Game Ranch: New Super Mario Bros. U Deluxe | S1E4 | https://www.youtube.com/watch?v=Ojlh_0l0srk	 | •
• | 	8:13 | Handbooker Helper: Multiclassing | https://www.youtube.com/watch?v=100wR825ImI	 | •
• | 	6:59 | Critical Recap -- Episode 57: In Love and War | https://www.youtube.com/watch?v=vptM0rBX7rM	 | •
• | 	3:45:15 | In Love and War | Critical Role | Campaign 2, Episode 57 | https://www.youtube.com/watch?v=fUfCP184L0I	 | •
• | 	1:34:49 | Lighting and Shading | Pub Draw | https://www.youtube.com/watch?v=6DaR6Q6wf1w	 | •
• | 	57:55 | MAME Drop: Mixed Bag o' Games | https://www.youtube.com/watch?v=u2eTfD9Nxic	 | •
• | 	4:03 | Handbooker Helper: Elf (Quick Build) | https://www.youtube.com/watch?v=wVhthZ4a0t0	 | •
• | 	1:54 | The Legend of Vox Machina: Animatic Sneak Peek! | https://www.youtube.com/watch?v=Ry571LRYOcM	 | •
• | 	1:36:25 | Inking Basics | Pub Draw | https://www.youtube.com/watch?v=GfOv5DpdXes	 | •
• | 	1:00:02 | Talks Machina: Discussing Campaign 2, Episode 56 - The Favor | https://www.youtube.com/watch?v=vz5TV0piHs8	 | •
• | 	1:04:18 | Travis' Yee-Haw Game Ranch: Call of Duty WWII | S1E3 | https://www.youtube.com/watch?v=GkIK2ZHmSZw	 | •
• | 	4:08 | Handbooker Helper: Spell Components | https://www.youtube.com/watch?v=gPP_13-kwBo	 | •
• | 	1:36:55 | Between the Sheets: Ashly Burch | https://www.youtube.com/watch?v=sixWpWtD0q4	 | •
• | 	6:02 | Critical Recap -- Episode 56: The Favor | https://www.youtube.com/watch?v=gcw2fFkYPKE	 | •
• | 	6:54 | The Making of "Your Turn to Roll" | The Legend of Vox Machina | https://www.youtube.com/watch?v=v681w8OMxzs	 | •
• | 	3:01:17 | The Favor | Critical Role | Campaign 2, Episode 56 | https://www.youtube.com/watch?v=ZtcAs7jCDvw	 | •
• | 	1:37:05 | Draw Caleb with Liam O'Brien aka Art Dad! | Pub Draw | https://www.youtube.com/watch?v=PLsTaVj8yb4	 | •
• | 	1:03:01 | Talks Machina: Discussing Campaign 2, Episode 55 - Duplicity | https://www.youtube.com/watch?v=bW7HKOWxM5E	 | •
• | 	59:07 | MAME Drop: METAL Games with Whitney Moore | https://www.youtube.com/watch?v=iZmKbzp-Tg0	 | •
• | 	3:33 | Handbooker Helper: Human (Quick Build) | https://www.youtube.com/watch?v=Q8D-cB2-XHo	 | •
• | 	1:52:30 | Between the Sheets: Mary Elizabeth McGlynn | https://www.youtube.com/watch?v=ADNzGbDU1Po	 | •
• | 	6:05 | Critical Recap -- Episode 55: Duplicity | https://www.youtube.com/watch?v=MN4N_oxV9TY	 | •
• | 	4:25:29 | Duplicity | Critical Role | Campaign 2, Episode 55 | https://www.youtube.com/watch?v=k1PRExWXj8o&t=314s	 | •
• | 	1:40:20 | Drawing Bodies (Part 2) | Pub Draw | https://www.youtube.com/watch?v=wTGziOFu3iM	 | •
• | 	1:10:24 | Talks Machina: Discussing Campaign 2, Episode 54 - Well Beneath | https://www.youtube.com/watch?v=daTRTmj8VkA	 | •
• | 	1:04:13 | Travis' Yee-Haw Game Ranch: Grand Theft Auto V | S1E2 | https://www.youtube.com/watch?v=HTjiKOKnfy8	 | •
• | 	4:34 | Handbooker Helper: Perception vs. Investigation | https://www.youtube.com/watch?v=mYzuFErjMtU	 | •
• | 	2:04:02 | Between the Sheets: Christopher Perkins | https://www.youtube.com/watch?v=e1YtFalQhI8	 | •
• | 	5:42 | Critical Recap -- Episode 54: Well Beneath | https://www.youtube.com/watch?v=z-ApNmU094s	 | •
• | 	3:34:58 | Well Beneath | Critical Role | Campaign 2, Episode 54 | https://www.youtube.com/watch?v=iA0rVPoBK5E	 | •
• | 	1:44 | DARK HORSE NEWS: The Return of Vox Machina Origins & Mighty Nein Art Book! | https://www.youtube.com/watch?v=gRQKWnsyz5w	 | •
• | 	1:32:18 | Draw Grog with Travis Willingham | Pub Draw | https://www.youtube.com/watch?v=3GtatoU1jEA	 | •
• | 	1:03:56 | Talks Machina: Discussing Campaign 2, Episode 53 - Cornered | https://www.youtube.com/watch?v=4iwn11bYPOk	 | •
• | 	1:02:06 | MAME Drop: Comic Book Games with Amy Dallen! | https://www.youtube.com/watch?v=fbjZAEzF8G8	 | •
• | 	3:27 | Handbooker Helper: Tiefling (Quick Build) | https://www.youtube.com/watch?v=eRQcA-dJ82o	 | •
• | 	1:10:48 | The Legend of Vox Machina Kickstarter Q&A | https://www.youtube.com/watch?v=CHtkAfkOYgI	 | •
• | 	1:18 | The Legend of Vox Machina Animated Intro | https://www.youtube.com/watch?v=HUpfKPkDdRw	 | •
• | 	6:02 | Critical Recap -- Episode 53: Cornered | https://www.youtube.com/watch?v=S3oIRSbReWQ	 | •
• | 	3:35:06 | Cornered | Critical Role | Campaign 2, Episode 53 | https://www.youtube.com/watch?v=tdP3yCRPtJY	 | •
• | 	6:32 | The Legend of Vox Machina Kickstarter is LIVE! | https://www.youtube.com/watch?v=IAi9xjcNFus	 | •
• | 	1:42:05 | Learn to Draw Body Basics | Pub Draw | https://www.youtube.com/watch?v=9E0kenW0vjc	 | •
• | 	1:12:21 | Talks Machina: Discussing Campaign 2 Episode 52 - Feral Business | https://www.youtube.com/watch?v=SZrUq9RSp4A	 | •
• | 	1:05:11 | Travis' Yee-Haw Game Ranch: Red Dead 2 | S1E1 | https://www.youtube.com/watch?v=ODIWk4BeQIs	 | •
• | 	5:37 | Critical Recap -- Episode 52: Feral Business | https://www.youtube.com/watch?v=jWxZo9C8zsk	 | •
• | 	3:24 | Handbooker Helper: Ranged Weapons | https://www.youtube.com/watch?v=TcH7xoDmIu0	 | •
• | 	4:08:50 | Feral Business | Critical Role | Campaign 2, Episode 52 | https://www.youtube.com/watch?v=REyVoebe06E	 | •
• | 	3:00 | Introducing Travis Willingham's Yee-Haw Game Ranch! | https://www.youtube.com/watch?v=NPtNhDjGfoU	 | •
• | 	4:41:09 | The Search For Grog | Critical Role One-Shot | https://www.youtube.com/watch?v=hi5pEHs76TE&t=5026s	 | •
• | 	1:35:55 | Draw Nott with Sam Riegel | Pub Draw | https://www.youtube.com/watch?v=9zDe3QI2-vE	 | •
• | 	1:01:52 | MAME Drop: Licensed Toy Classics | https://www.youtube.com/watch?v=aOqeIhAvJsE	 | •
• | 	3:19 | Critical Recap -- Episode 51: Xhorhas | https://www.youtube.com/watch?v=mcrKSRctLIM	 | •
• | 	5:39 | Handbooker Helper: Monk (Quick Build) | https://www.youtube.com/watch?v=4ATXsErMpHQ	 | •
• | 	2:04:32 | Between the Sheets: Noelle Stevenson | https://www.youtube.com/watch?v=iEfmqxkHDig	 | •
• | 	1:33:22 | Draw Percy Using the Loomis Method | Pub Draw | https://www.youtube.com/watch?v=PXW8ihxUjQ0	 | •
• | 	1:01:12 | MAME Drop: D&D Games! | https://www.youtube.com/watch?v=u5kpzOlf_rM&t=324s	 | •
• | 	2:47 | Handbooker Helper: Melee Weapons | https://www.youtube.com/watch?v=VISVxpCrVQg	 | •
• | 	1:41:22 | Between the Sheets: Will Friedle | https://www.youtube.com/watch?v=Vv75ZUh78gI	 | •
• | 	1:44:55 | Draw Jester with Laura Bailey | Pub Draw | https://www.youtube.com/watch?v=mUuIXCsoK-M&t=911s	 | •
• | 	1:01:31 | MAME Drop: Sports Games! | https://www.youtube.com/watch?v=p4xR3X0uqBM	 | •
• | 	3:52 | Handbooker Helper: Paladin (Quick Build) | https://www.youtube.com/watch?v=GMsg3QskvtU	 | •
• | 	1:32:32 | Between the Sheets: Quyen Tran | https://www.youtube.com/watch?v=QApOHH3VrX8	 | •
• | 	1:37:20 | Learn To Draw Faces with Marisha & Babs | Pub Draw | https://www.youtube.com/watch?v=MIX7VxN6qLU	 | •
• | 	1:01:42 | MAME Drop: LaserDisc Classics | https://www.youtube.com/watch?v=YRpzf8nhu74	 | •
• | 	3:21 | Handbooker Helper: Spell Range & Area of Effect | https://www.youtube.com/watch?v=-eRyWCeMK9k	 | •
• | 	1:43:15 | Between the Sheets: Logic | https://www.youtube.com/watch?v=OD6osbAU1Uo	 | •
• | 	1:02 | Between the Sheets Season 2 Premieres Jan 28! | https://www.youtube.com/watch?v=a4ubZdN2osw	 | •
• | 	1:36:11 | Pub Draw: Head Basics | https://www.youtube.com/watch?v=0hnpw-2Hp6s	 | •
• | 	1:01:56 | MAME Drop: Versus! | https://www.youtube.com/watch?v=tgHWhHQrMUQ	 | •
• | 	4:21 | Handbooker Helper: Warlock (Quick Build) | https://www.youtube.com/watch?v=fPIkwvAiwQ8	 | •
• | 	1:07 | Pub Draw Premieres Jan 23 on Twitch! | https://www.youtube.com/watch?v=KNuRfCvJyaY	 | •
• | 	1:02:10 | MAME Drop: NES Tour | https://www.youtube.com/watch?v=gALo5KXqC-0	 | •
• | 	5:16 | Handbooker Helper: Passive Abilities | https://www.youtube.com/watch?v=emHtNULI6c0	 | •
• | 	1:35 | MAME Drop Premieres Jan 15th on Twitch! | https://www.youtube.com/watch?v=RYyCPlFk6KM	 | •
• | 	3:56 | Handbooker Helper: Wizard (Quick Build) | https://www.youtube.com/watch?v=k04sCi_cwtY	 | •
• | 	3:56 | Handbooker Helper: Leveling Up | https://www.youtube.com/watch?v=w8N0nyfZE3E	 | •
• | 	1:57 | Between the Sheets: Marisha's Jalapeño Margarita | https://www.youtube.com/watch?v=SxBk_vDP91c	 | •
• | 	4:38:34 | The Night Before Critmas | https://www.youtube.com/watch?v=8zxeGydXY98	 | •
• | 	1:33 | Between the Sheets: Sam's Sidecar | https://www.youtube.com/watch?v=Jkj07uDs0a8	 | •
• | 	5:07 | Handbooker Helper: Sorcerer (Quick Build) | https://www.youtube.com/watch?v=B-EW_aIP4NI	 | •
• | 	2:41 | Between the Sheets: Liam's Mulled Wine | https://www.youtube.com/watch?v=33jVLILlqoQ	 | •
• | 	5:59 | State of the Role: Winter Updates! | https://www.youtube.com/watch?v=3G8t4ADJwvk	 | •
• | 	1:10:02 | Travis' Black Ops 4 Live Stream Extravaganza | https://www.youtube.com/watch?v=RW1tMCu7qm4	 | •
• | 	4:12 | Handbooker Helper: Advantage & Disadvantage | https://www.youtube.com/watch?v=HTB-g1gkmKU	 | •
• | 	53:51 | #EverythingIsContent: Fortnite feat. Pumat Sol Voice Pack | https://www.youtube.com/watch?v=IMTQdUesOvU&t=2288s	 | •
• | 	1:25 | Pumat Sol Voice Pack for Killer Voices | https://www.youtube.com/watch?v=uIgRGxJyaRw	 | •
• | 	1:37 | Between the Sheets: Laura's Maple Bourbon Sour | https://www.youtube.com/watch?v=oC-tvSnpRrM	 | •
• | 	1:03:56 | #EverythingIsContent: MAME Drop | https://www.youtube.com/watch?v=ly9iqHAcT8M	 | •
• | 	3:58 | Handbooker Helper: Spellcasting Basics | https://www.youtube.com/watch?v=i9ZnlZ7VudM	 | •
• | 	1:36 | Pumat Week Is Here! | https://www.youtube.com/watch?v=jGJ5UueTPH8	 | •
• | 	2:10 | Between the Sheets: Travis' Old Fashioned | https://www.youtube.com/watch?v=ngVYIBHcd_0	 | •
• | 	1:05:58 | #EverythingIsContent: Drawing Beau | https://www.youtube.com/watch?v=W-nMNe6-jwg&t=1s	 | •
• | 	1:15:03 | Fireside Chat with Sam Riegel | https://www.youtube.com/watch?v=2sUpEMJAo6Q	 | •
• | 	2:09 | Handbooker Helper: Bard (Quick Build) | https://www.youtube.com/watch?v=zvlROPHLdec	 | •
• | 	3:10:01 | Honey Heist 3: Tova's Honeys | https://www.youtube.com/watch?v=whbc64O0Yik	 | •
• | 	1:30 | Between the Sheets: Taliesin's Blonde Manhattan | https://www.youtube.com/watch?v=qQCygMn2O20	 | •
• | 	1:07:10 | #EverythingIsContent: Dungeon Mayhem | https://www.youtube.com/watch?v=sBvCFVggojM	 | •
• | 	4:11 | Handbooker Helper: Combat Actions | https://www.youtube.com/watch?v=ej-fYQe7VqQ	 | •
• | 	43:49 | All Work No Play: Hot Tub Spectacular | https://www.youtube.com/watch?v=Kp-Pi3DHvFg	 | •
• | 	1:15:55 | #EverythingIsContent: Soul Calibur VI (11.13.18) | https://www.youtube.com/watch?v=gs86d2aNEA0	 | •
• | 	2:34 | Handbooker Helper: Druid (Quick Build) | https://www.youtube.com/watch?v=aFWAxkl1Ms8	 | •
• | 	3:34 | The Chronicles of Exandria Vol. II: The Legend of Vox Machina | https://www.youtube.com/watch?v=t2W2kDv_s9Y	 | •
• | 	55:10 | All Work No Play: MAME Cabinet | https://www.youtube.com/watch?v=cfNeoVHU8nw	 | •
• | 	1:02:13 | #EverythingIsContent: CriticalDad (11.6.18) | https://www.youtube.com/watch?v=Y7Zm8GF6Ph8	 | •
• | 	3:06 | Handbooker Helper: Weapons 101 | https://www.youtube.com/watch?v=XAAm3WEpwjI	 | •
• | 	34:58 | All Work No Play: Fire Spinning | https://www.youtube.com/watch?v=OxJ3TTyj5VM	 | •
• | 	4:34 | Critical Role & Operation Supply Drop | https://www.youtube.com/watch?v=0udMil8fO-0	 | •
• | 	2:59 | Handbooker Helper: Fighter (Quick Build) | https://www.youtube.com/watch?v=Cnb18Y2UEzc	 | •
• | 	2:11:01 | Between the Sheets: Matthew Mercer | https://www.youtube.com/watch?v=iN6A82H6VCI&t=187s	 | •
• | 	47:05 | All Work No Play: Creature Makeup | https://www.youtube.com/watch?v=O_wAatC8ulE	 | •
• | 	4:19 | Handbooker Helper: Armor 101 | https://www.youtube.com/watch?v=V36iOTmG6-c	 | •
• | 	1:58:03 | Between the Sheets: Marisha Ray | https://www.youtube.com/watch?v=i6UxCDopt-U	 | •
• | 	39:09 | All Work No Play: Goat Yoga | https://www.youtube.com/watch?v=SizPQqu3-GA	 | •
• | 	50:54 | #EverythingIsContent: Critical Vote with NerdsVote | https://www.youtube.com/watch?v=fuYUPHs_FV0&t=36s	 | •
• | 	2:09 | Handbooker Helper: Cleric (Quick Build) | https://www.youtube.com/watch?v=kTg1GxaFTt4	 | •
• | 	1:37:09 | Between the Sheets: Sam Riegel | https://www.youtube.com/watch?v=Ecsjoa7_enY	 | •
• | 	40:10 | All Work No Play: Rage Room | https://www.youtube.com/watch?v=l5qMyHlyuTw	 | •
• | 	4:18 | Handbooker Helper: Ability Checks, Proficiencies & Saving Throws | https://www.youtube.com/watch?v=nVEX4J2Sh4A	 | •
• | 	1:26:20 | Between the Sheets: Liam O'Brien | https://www.youtube.com/watch?v=iRsbq1wfeNA	 | •
• | 	39:24 | All Work No Play: Tap Dancing | https://www.youtube.com/watch?v=C0DGzRiauY4	 | •
• | 	2:20 | Handbooker Helper: Barbarian (Quick Build) | https://www.youtube.com/watch?v=TRUuhZxWxEk	 | •
• | 	1:05:11 | Between the Sheets: Laura Bailey | https://www.youtube.com/watch?v=kjuSZYsuP-I&t=409s	 | •
• | 	32:14 | All Work No Play: Sword Fighting | https://www.youtube.com/watch?v=CD1CXWE7KwM	 | •
• | 	0:52 | Critical Role is Coming to ECCC in 2019 | https://www.youtube.com/watch?v=24qTCvf0zuw	 | •
• | 	3:11 | Handbooker Helper: Death Saving Throws | https://www.youtube.com/watch?v=qo7zMVrdyXo	 | •
• | 	1:21:11 | Between the Sheets: Travis Willingham | https://www.youtube.com/watch?v=0Rn8pTW2y-A	 | •
• | 	0:56 | Critical Role is Coming to MCM Comic Con London | https://www.youtube.com/watch?v=GqB9y5WuiNM	 | •
• | 	2:53:16 | Sam Riegel's Crash Pandas One-Shot | https://www.youtube.com/watch?v=c9EP7jiVJnU&t=293s	 | •
• | 	1:48 | All Work No Play - Premieres Sept 28 on Twitch! | https://www.youtube.com/watch?v=fght-xHAJJQ	 | •
• | 	1:00:49 | #EverythingIsContent: CriticalMom (09.18.18) | https://www.youtube.com/watch?v=1I4B6quH_sM	 | •
• | 	2:03 | Handbooker Helper: Ranger (Quick Build) | https://www.youtube.com/watch?v=ajE6VZIiPmI	 | •
• | 	1:14:33 | Between the Sheets: Taliesin Jaffe | https://www.youtube.com/watch?v=gZyspWOP0o8	 | •
• | 	1:20 | Critical Role LIVE in NYC (10.4.18) | https://www.youtube.com/watch?v=MNGRfa6BLWs	 | •
• | 	59:44 | Pub Crawl with Marisha, Taliesin, Liam & Sam | https://www.youtube.com/watch?v=IMC7km5oVZo	 | •
• | 	5:28 | Handbooker Helper: Ability Scores | https://www.youtube.com/watch?v=WoV5iM7peOg	 | •
• | 	8:09 | State of the Role: Twitch Subscriptions | https://www.youtube.com/watch?v=6D6zJPwCybM	 | •
• | 	1:25 | Between the Sheets with Brian W. Foster (Trailer) | https://www.youtube.com/watch?v=shDBQGF26jc	 | •
• | 	2:35 | Handbooker Helper: Rogue (Quick Build) | https://www.youtube.com/watch?v=anybhrieUqg	 | •
• | 	3:35 | Handbooker Helper: Dice 101 | https://www.youtube.com/watch?v=qQq_WsPFiDs	 | •
• | 	2:04 | A Message From Sam & Our Friend Blair Herter | https://www.youtube.com/watch?v=3_Q7px_TFpU	 | •
• | 	1:20 | What is Handbooker Helper? | https://www.youtube.com/watch?v=hD-LWHhiseE	 | •
• | 	2:46:14 | Honey Heist 2: Electric Beargaloo | https://www.youtube.com/watch?v=MSNK4ThPHqc	 | •
• | 	1:07:40 | Fireside Chat & NPC Build with Matthew Mercer | https://www.youtube.com/watch?v=_QhqUCB4rPI	 | •
• | 	33:06 | State of the Role: Studio Tour with Marisha Ray | https://www.youtube.com/watch?v=LxCqClaRAZs&t=912s	 | •
• | 	0:35 | Critical Role in Pillars of Eternity II: Deadfire | https://www.youtube.com/watch?v=b9qATcuDPYE	 | •
• | 	4:21 | Taliesin & Brian Get Turnt for Gen Con | https://www.youtube.com/watch?v=6SeA1rhEGJc	 | •
• | 	1:10:49 | Matt Mercer Builds Vox Machina In Deadfire | https://www.youtube.com/watch?v=6xVaOfQc4io	 | •
• | 	0:56 | Critical Role Is Going To New York Comic Con! | https://www.youtube.com/watch?v=3Zu-7wzbocY	 | •
• | 	0:34 | Critical Role Miniatures (Steamforged Kickstarter Launch!) | https://www.youtube.com/watch?v=GrxlzhZbRDU	 | •
• | 	3:45 | A Special Announcement from Critical Role (State of the Role #1) | https://www.youtube.com/watch?v=jD0tuRPJCds	 | •
• | 	1:25 | Between the Sheets with Brian W. Foster (Trailer) | https://www.youtube.com/watch?v=shDBQGF26jc	 | •
• | 	2:35 | Handbooker Helper: Rogue (Quick Build) | https://www.youtube.com/watch?v=anybhrieUqg	 | •
• | 	3:35 | Handbooker Helper: Dice 101 | https://www.youtube.com/watch?v=qQq_WsPFiDs	 | •
• | 	2:04 | A Message From Sam & Our Friend Blair Herter | https://www.youtube.com/watch?v=3_Q7px_TFpU	 | •
• | 	1:20 | What is Handbooker Helper? | https://www.youtube.com/watch?v=hD-LWHhiseE	 | •
• | 	2:46:14 | Honey Heist 2: Electric Beargaloo | https://www.youtube.com/watch?v=MSNK4ThPHqc	 | •
• | 	1:07:40 | Fireside Chat & NPC Build with Matthew Mercer | https://www.youtube.com/watch?v=_QhqUCB4rPI	 | •
• | 	33:06 | State of the Role: Studio Tour with Marisha Ray | https://www.youtube.com/watch?v=LxCqClaRAZs&t=912s	 | •
• | 	0:35 | Critical Role in Pillars of Eternity II: Deadfire | https://www.youtube.com/watch?v=b9qATcuDPYE	 | •
• | 	4:21 | Taliesin & Brian Get Turnt for Gen Con | https://www.youtube.com/watch?v=6SeA1rhEGJc	 | •
• | 	1:10:49 | Matt Mercer Builds Vox Machina In Deadfire | https://www.youtube.com/watch?v=6xVaOfQc4io	 | •
• | 	0:56 | Critical Role Is Going To New York Comic Con! | https://www.youtube.com/watch?v=3Zu-7wzbocY	 | •
• | 	0:34 | Critical Role Miniatures (Steamforged Kickstarter Launch!) | https://www.youtube.com/watch?v=GrxlzhZbRDU	 | •
• | 	3:45 | A Special Announcement from Critical Role (State of the Role #1) | https://www.youtube.com/watch?v=jD0tuRPJCds	 | •
`;