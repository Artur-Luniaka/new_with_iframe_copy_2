const websiteData = {
  header: {
    logo: "domain.com",
    navigation: [
      { text: "Home", url: "./" },
      { text: "Warrior Updates", url: "carrot-news.html" },
      { text: "Dojo Chat", url: "hollow-talk.html" },
      { text: "Ninja Code", url: "bunny-rules.html" },
      { text: "How to Train", url: "./#how-to-hop" },
    ],
  },
  footer: {
    links: [
      { text: "Cookies Policy", url: "cookie-policy.html" },
      { text: "Privacy Policy", url: "privacy-policy.html" },
    ],
    contact: {
      address: "221 George Street, Sydney NSW 2000, Australia",
      phone: "+61 2 9250 7111",
      email: "master@domain.com",
    },
    copyright: `© ${new Date().getFullYear()} Domain.com | All rights reserved.`,
  },
  home: {
    burrowEntrance: {
      title: "Embark on Your Ninja Rabbit Adventure!",
      subtitle: "Guide Your Hero to Victory",
      description:
        "Leap through dangerous lands, dodge monstrous obstacles, and rescue the stolen children in this thrilling ninja adventure!",
      features: [
        "Challenging ninja levels",
        "Exciting monster battles",
        "Daily warrior trials",
        "Global hero leaderboard",
      ],
      stats: [
        { number: "1M+", label: "Players" },
        { number: "100+", label: "Missions" },
        { number: "4.9", label: "Rating" },
        { number: "50K+", label: "Reviews" },
      ],
      backgroundImage: "images/img-1.jpg",
      actionButton: {
        text: "Play Now",
        url: "#burrow-play",
      },
    },
    carrotReview: {
      title: "What Warriors Are Saying",
      subtitle: "Join the Ninja Rabbit Community",
      description:
        "Players love guiding their ninja through challenging quests! See what the Ninja Rabbit community has to say.",
      reviews: [
        {
          text: "So much fun dodging monsters and saving kids!",
          author: "ShadowLeap99",
          rating: 5,
          avatar: "images/img-2.jpg",
          date: "March 15, 2024",
        },
        {
          text: "The bamboo forest graphics are amazing, and the combat is smooth!",
          author: "SilentStrike23",
          rating: 5,
          avatar: "images/img-3.jpg",
          date: "March 12, 2024",
        },
        {
          text: "Perfect for quick ninja missions. Love it!",
          author: "BushidoBunny2024",
          rating: 4,
          avatar: "images/img-4.jpg",
          date: "March 10, 2024",
        },
      ],
      highlights: [
        { icon: "🏆", text: "Top Action Game 2024" },
        { icon: "⭐", text: "Hero's Choice" },
        { icon: "🥋", text: "Best Casual Adventure" },
      ],
    },
    howToHop: {
      title: "How to Play Ninja Rabbit",
      subtitle: "Master Your Ninja Skills",
      description:
        "Learn to guide your ninja rabbit through monster-filled lands and rescue the villagers with these simple steps.",
      steps: [
        {
          title: "Begin Your Quest",
          description:
            "Click 'Play' to start your journey through ancient villages.",
          icon: "🎮",
          tips: [
            "Create your ninja profile",
            "Select your starting mission",
            "Check the training grounds",
          ],
        },
        {
          title: "Guide Your Ninja",
          description:
            "Use arrow keys or WASD to steer your ninja around obstacles and enemies.",
          icon: "⌨️",
          tips: [
            "Press SPACE to jump",
            "Hold SHIFT for a speed burst",
            "Double-tap for quick dodges",
          ],
        },
        {
          title: "Rescue & Collect",
          description:
            "Save children to score points and collect hidden scrolls for special rewards.",
          icon: "📜",
          tips: [
            "Golden scrolls give extra points",
            "Chain rescues for bonus combos",
            "Search for hidden villagers",
          ],
        },
        {
          title: "Dodge Monsters",
          description:
            "Avoid traps and monstrous creatures to keep your ninja fighting!",
          icon: "⚡",
          tips: [
            "Study enemy attack patterns",
            "Time your jumps and dodges carefully",
            "Use boosts strategically",
          ],
        },
      ],
      videoTutorial: {
        thumbnail: "images/img-5.jpg",
        url: "#tutorial-video",
      },
    },
    bunnyGear: {
      title: "Ninja Tools & Power-Ups",
      subtitle: "Supercharge Your Rabbit",
      description:
        "Unlock awesome power-ups and special tools to help your ninja move faster and defeat more monsters!",
      categories: [
        {
          name: "Speed Boosters",
          icon: "🚀",
          items: [
            {
              name: "Shadow Dash",
              description: "Zoom through levels at double speed",
              duration: "30 seconds",
              cooldown: "60 seconds",
              image: "images/img-6.jpg",
            },
            {
              name: "Aura Burst",
              description: "Speed up your ninja for a quick burst of agility",
              duration: "20 seconds",
              cooldown: "45 seconds",
              image: "images/img-7.jpg",
            },
          ],
        },
        {
          name: "Special Abilities",
          icon: "✨",
          items: [
            {
              name: "Scroll Magnet",
              description: "Attract nearby scrolls to your ninja",
              duration: "15 seconds",
              cooldown: "40 seconds",
              image: "images/img-8.jpg",
            },
            {
              name: "Barrier Aura",
              description: "Protect your ninja from enemy attacks and traps",
              duration: "10 seconds",
              cooldown: "50 seconds",
              image: "images/img-1.jpg",
            },
          ],
        },
      ],
      unlockInfo: {
        title: "How to Unlock",
        methods: [
          "Complete daily warrior challenges",
          "Reach mission milestones",
          "Find hidden treasure chests",
          "Win dojo tournaments",
        ],
      },
    },
    bunnyTrails: {
      title: "Ninja Tips & Tricks",
      subtitle: "Fight Like a Master",
      description:
        "Boost your skills with these expert tips for mastering Ninja Rabbit!",
      categories: [
        {
          title: "Basic Techniques",
          tips: [
            {
              title: "Perfect Jump Timing",
              description:
                "Time your jumps to clear chasms and reach high platforms",
              difficulty: "Easy",
              image: "images/img-2.jpg",
            },
            {
              title: "Rescue Combos",
              description: "Save multiple children in a row for bonus points",
              difficulty: "Medium",
              image: "images/img-3.jpg",
            },
            {
              title: "Hidden Paths",
              description: "Discover secret routes in treacherous levels",
              difficulty: "Hard",
              image: "images/img-4.jpg",
            },
          ],
        },
        {
          title: "Master Strategies",
          tips: [
            {
              title: "Speed Runs",
              description: "Plan your route for the fastest mission clear time",
              difficulty: "Expert",
              image: "images/img-5.jpg",
            },
            {
              title: "Power-Up Combos",
              description: "Stack power-ups for maximum efficiency in battle",
              difficulty: "Expert",
              image: "images/img-6.jpg",
            },
          ],
        },
      ],
      funFacts: [
        {
          title: "Fun Ninja Facts",
          facts: [
            "Fastest mission cleared in 10.5 seconds",
            "Over 500 million monsters defeated",
            "Longest rescue combo: 120 children saved",
          ],
        },
      ],
    },
  },
  news: {
    latestUpdates: {
      title: "Ninja Rabbit Updates",
      subtitle: "Fresh from the Training Grounds",
      description:
        "Stay in the loop with the latest features and events in Ninja Rabbit!",
      articles: [
        {
          title: "Bamboo Forest Expansion",
          date: "2024-03-15",
          category: "Update",
          badge: "New",
          image: "images/img-7.jpg",
          content:
            "Dive into the Bamboo Forest Expansion with new levels, enemy types, and exclusive ninja outfits for your rabbit!",
          features: [
            "12 new challenging levels",
            "Shuriken power-up",
            "Forest-themed ninja skins",
            "Mystical fog effects",
          ],
        },
        {
          title: "Weekly Monster Hunt",
          date: "2024-03-10",
          category: "Event",
          badge: "Active",
          image: "images/img-8.jpg",
          content:
            "Join the Monster Hunt event! Defeat elite monsters to earn rewards and top the leaderboard.",
          rewards: [
            "Exclusive legendary ninja skin",
            "Special warrior badge",
            "1500 bonus scrolls",
            "Unique emotes",
          ],
        },
        {
          title: "Gameplay Enhancements",
          date: "2024-03-05",
          category: "Technical",
          image: "images/img-1.jpg",
          content:
            "We've improved Ninja Rabbit for a smoother and more exciting experience!",
          improvements: [
            "Quicker load times",
            "Enhanced combat animations",
            "Improved mobile controls",
            "Fixed minor bugs",
          ],
        },
      ],
    },
    communitySpotlight: {
      title: "Ninja Community Highlights",
      subtitle: "Celebrating Our Warrior Stars",
      description:
        "Check out the amazing achievements and creations from the Ninja Rabbit community!",
      highlights: [
        {
          title: "Warrior of the Month",
          player: "ShadowLeap99",
          avatar: "images/img-2.jpg",
          achievement: "First to master all 100 challenging missions!",
          stats: {
            carrots: "50,000+",
            levels: "100/100",
            badges: "25",
          },
          quote: "Keep training and aim for those golden scrolls to win big!",
        },
        {
          title: "Community Event Winners",
          type: "Dojo Challenge",
          image: "images/img-3.jpg",
          teams: [
            {
              name: "Silent Assassins",
              position: "1st Place",
              score: "125,000 points",
            },
            {
              name: "Crimson Blades",
              position: "2nd Place",
              score: "120,000 points",
            },
            {
              name: "Emerald Fists",
              position: "3rd Place",
              score: "115,000 points",
            },
          ],
        },
        {
          title: "Ninja Art Gallery",
          description: "See the incredible fan art from our community!",
          submissions: [
            {
              artist: "RabbitRonin",
              title: "Ninja Rabbit's Fierce Leap",
              image: "images/img-4.jpg",
              likes: 1500,
            },
            {
              artist: "DojoSketcher",
              title: "Ninja Rabbit's Epic Quest",
              image: "images/img-5.jpg",
              likes: 1200,
            },
          ],
        },
      ],
    },
  },
  contact: {
    title: "Reach the Grand Master",
    description: "Have questions or ideas for Ninja Rabbit? Send us a message!",
    formFields: [
      { label: "Name", type: "text", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Subject", type: "text", required: true },
      { label: "Message", type: "textarea", required: true },
    ],
  },
  rules: {
    title: "Ninja Rabbit Code of Honor",
    sections: [
      {
        title: "Gameplay Ethics",
        content:
          "Play with honor and enjoy the adventure! Cheating or exploiting glitches is forbidden in the dojo.",
      },
      {
        title: "Community Guidelines",
        content: "Be respectful and kind to fellow warriors in the community.",
      },
      {
        title: "Technical Scrolls",
        content:
          "Minimum system requirements and supported browsers information for your ninja journey.",
      },
    ],
  },
};
