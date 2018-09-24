'use strict';

var HashMap = require('hashmap');

var god_map = new HashMap();

const god_shiva = [
    'Shiva is the oldest Hindu God who was mentioned as early as the Vedic period by the name of Rudra.',

    'There are references to Shiva as the all powerful God in the Ramayana and Mahabharata.',

    'He is a part of the Holy trinity of Hindu Gods along with Brahma and Vishnu.',

    'Shiva consumed the dangerous poison Halahala which came out after Samudra Manthan (churning of the milk ocean), thus saving the Universe.',

    'Parvati, an incarnation of Goddess Shakti is Lord Shiva’s companion.',

    'Mount Kailash is known as the abode of Shiva, where he resides with his family.',

    'Ganesha and Murugan are the children of Shiva and Shakti.',

    'Nandi the holy bull is the Vahana of Shiva.',

    'Shakti’s Vahana is a lion.',

    'Shiva is associated with the masculine energy or Purusha and Shakti is associated with the feminine energy or Prakriti.',

    'The Ganga river flows from the matted locks of Shiva.',

    'Shakti is the Goddess of power and also the Divine force of the Universe.',

    'Hanuman is the 11th incarnation of Shiva',

    'The Nataraja form of Lord Shiva is associated with the destruction and the re-creation of the Universe.',

    'Shiva’s weapon is the trident or Trishul, which signifies the forces of creation, preservation and destruction.',

    'Lord Shiva has 19 Avatars or reincarnations including Bhairav, Hanuman, Ashvatama, Pipladd etc. among others.',

    'Maa Shakti has 9 Avatars including Shailaputri, Brahmacharini and Maha Gauri',

    'Ardhnarishwar is the half Shiva-half Shakti form of Lord Shiva and Maa Shakti and it represents the absoluteness of God.',

    'Shakti is the nurturer of fertility and strength in the material world.',

    'Shiva is the protector of the spirit realm and the regulator of Shakti in the Universe.',

    'Shiva and Shakti are considered the Father and Mother of the Universe'
    ];

const god_vishnu = [
    'Vishnu has taken more than 25 Avataras than the know 10 popular ones - Hayagriva, Mohini, Nara-Narayana, Kuja Vruksha, Hari etc',

    'Vishnu complexion is not dark - According to Vishnu Sahasra Nama it is white - shuklAmbaradaram vishnum shashi varnam',

    'Vishnu abode is called paramam padam [the highest abode] tad vishnor paramam padam by the Vedas',

    'Vishnu means all pervading',

    'Vishnu purAnam is one of the most quoted puranam',

    'Of all the gods only Vishnu has a Rudy name (fixed name) nArayaNa - which cannot be assigned to any other god',

    'Vishnu has 5 modes of existence - Para [Vaikuntam], Vyuha [KsheRabdi], vibhava [avataras], antaryAmi [in our heart] and Archa [Vigraha in temples]',

    'Vishnu is identified as Sriyaf Pathi in Vedas [this is like saying he is Lakshmi\'s husband, Importance is given to Lakshmi]',

    'Vishnu is careful about giving boons. He never gets in to trouble',

    'Vishnu is name of one of the 12 AdityAs [AdityAnAm aham vishnu: B.G]',

    'There are 8 Svayam vyakta (svayambu) Kshetra’s of Vishnu in India [4 in the south & 4 in the north]',

    'Vishnu Sahasranama is the most popular and the first sahasranama - Adi Shankara, Parashashara Bhatta and Shri Ragavendra are come of the noted acharyAs who have written commentaries on this',

    'Vishnu is known for his humility. Sage Brighu kicks vishnu on his chest, despite this Vishnu honors Brigu maharshi and massages his feet',

    'Vishnu has destroyed maximum number of demons',

    'The Top 3 largest temples of the world are dedicated to Vishnu [ Angkor Wat 500 acres, Srirangam Ranganatha Temple 156 acres, Akshardam Temple 100 acres',

    'Vishnu gives more importance to Tamil Poems over Sanskrit vEdas',

    'Vishnu bhaktAs is considered more special than Vishnu himself',
    ];

    const god_bhrama = [
        'As the Creator of the Universe, Brahma’s penchant for giving birth to new and unique forms of life is well known. When he created Goddess Saraswati, the goddess of learning and wisdom, he bestowed upon her the ability to take on a hundred different forms, which gave her the name Shatarupa, since shata means hundred and rupa means form, in Sanskrit.',

        'Unlike most Hindu Gods, Brahma does not have any weapon. His hand holds a book and a sceptre. The former is a symbol of wisdom and the latter of power.',
        
        'Brahma is not to be confused with spiritual concept of Brahman. The latter is a gender neutral abstract metaphysical concept in Hinduism, while the former is one of the many masculine gods in Hindu mythology. The spiritual concept of Brahman is far older, and some scholars suggest deity Brahma may have emerged as a personal conception and visible icon of the impersonal universal principle called Brahman.',
        
        'He also has four hands. Each arm points to the four directions of north, west, south and east. The back left hand represents intellect, the back right hand, the mind. The front left hand stands for self-confidence and the front right hand for ego. Since Brahma is the creator, his depiction is an amalgamation of the dominant traits of any living being.',
        
        'Brahma’s being the Creator, his deed was done once he finished creating the universe and life. The onus of preserving the good and destroying the evil now lies with Vishnu and and Shiva respectively. Hence they have assumed many forms as needed to deal with a situation. And thus they are worshipped a lot and in each of their forms are separately worshipped as well. However, Brahma is hardly worshipped.',
        
        'Brahma is often portrayed as having four faces, one in each direction. They signify the four Vedas – Atharva, Yajur, Sama and Rig, which are said to hold the comprehensive wisdom of the universe'
    ];

    const god_ganesh = [
        'Lord Ganesh belongs to a family of divine figures. He is the son of Lord Shiva – the Hindu God of Destruction and Goddess Parvati – the Hindu Goddess of fertility & love. Lord Ganesh has a brother in Lord Kartik – the Hindu God of War & Victory and two sisters in Goddess Lakshmi – the Hindu Goddess of Wealth and Goddess Saraswati – the Hindi Goddess of Knowledge.',

        'According to scriptures, Lord Ganesh had two wives Ridhhi (representing Prosperity) and Sidhhi (representing Intellectual Enlightenment). Furthermore, he had two sons – Ridhhi bore him Subha (representing Auspiciousness) while Sidhhi bore him Labha (representing Profit). His images are frequently flanked by the images of his wives.',
        
        'At the time of his birth Lord Ganesh had a normal human head. He got his Elephant head after his original head was destroyed. Three specific stories explain how this happened – his battle with Lord Shiva, the cursed gaze of Shani Dev – the Hindu God of Justice and the dying wish of the Elephant-headed demon Gajasura.',
        
        'Ganesha is also referred to by the name ‘Ekdant’ meaning ‘one-toothed’. He is almost always represented with a broken tusk which signifies another physical imperfection in addition to his Elephant Head and his large belly. Scriptures explain his broken tusk through various stories – the writing of the Mahabharata, the battle with Sage Parshurama and Ganesha’s argument with the Moon.',
        
        'Ganesha is the original writer of the great Hindu epic Mahabharat. It is believed that the narrator of the Mahabharat – Sage Ved Vyasa – chose Ganesha to be his scribe because no other being in the Universe had the wisdom to take up the monumental task of penning the treatise of ancient wisdom.',
        
        'Lord Ganesh’s representations frequently show a snake tied around his belly. The story behind involves the Moon mocking Ganesha’s physical appearance. Symbolically, however, it is believed that Lord Ganesh’s stomach houses the entire Cosmos and the snake represents the cosmic energy that holds the cosmos together. A thing to note is that Lord Ganesh’s father, Lord Shiva is also represented with a snake coiled around his neck though it has completely different symbolic interpretations.',
        
        'Lord Ganesha idol with snake tied to belly',
        
        'Lord Ganesh is Hinduism’s most popular deity. This is no accident as scriptures succinctly explain the reasons behind this. It is believed that when Ganesha got his Elephant Head, the Gods declared that a prayer to him must precede any other holy Hindu ritual. As a result Lord Ganesh is a worshipped before the invoking of any other deity.',
        
        'Hindu deities are frequently attached to animal vehicles or ‘vahana’ which serve as their primary mode of transport. Lord Ganesh’s animal vehicle is the Mouse which represents the ego. Observers popularly interpret Lord Ganesha’s riding of a Mouse as a representation of the human duty to control one’s ego and stay constantly grounded.',
        
        'While the Tulsi plant has a holy relevance in most Hindu rituals, the worship of Lord Ganesh specifically excludes any involvement of the Tulsi plant. This is because Tulsi once cursed Lord Ganesh when he refused to marry her and in turn ended up receiving a curse from the Elephant God himself which excluded her from ever being linked to his worship.',
        
        'Ganesha is often worshiped alone but there is one occasion when he is worshipped with his entire family – Lord Shiva, Goddess Parvati, Lord Kartik, Goddess Lakshmi and Goddess Saraswati. This happens specifically during the festival of Durga Puja which is centered on Goddess Durga – an incarnation of Goddess Parvati.',
    ];

    const god_murugan = [
        'Muruga is the son of Supreme Lord Shiva and Goddess Parvati and is worshipped and venerated mainly in south India.',

        'Muruga is known by different names – Lord Murugan, Lord Swaminatha, Sanmukha, Subramaniam, Skanda, Shadanana, Guha, and more.',

        'Muruga is the commander of the Devas and the God of war. He is the most fierce and masculine of all the Hindu Gods. He is also fire and is very fiery in nature. More importantly, he symbolizes perfection and the need for every living being to aim towards being perfect.',

        'Muruga birth was with the intent to kill the demon (asura) Tarakasura, that repeatedly defeated the Hindu gods until heaven was on the verge of collapse. In addition, the demon had a boon that he should only be killed by a son of Lord Shiva.',

        'The ancient sacred text – Skanda Purana, one of the Puranas created by Veda Vyasa, describes the circumstances that led to the divine ”appearance” of Lord Skanda. He is said to have been created from the sparks from Supreme Lord Shiva’s third eye. Agni Deva and Vayu carried the sparks and dropped it in the Ganges that was carried to the Saravana Poigai.',

        'In another description of his origin, the Mahabharata (one of the two major Sanskrit epics of India), Lord Skanda is said to have been born from Svaha and Agni after Svaha impersonated the 6 of the 7 wives of the Saptarishi.',

        'More references of Lord Skanda can be traced back to the 1st millennium BCE. For instance, there are references of Lord Skanda in Kalidasa’s epic poem the Kumarasambhava, in Kautilya’s Arthashastra, and in the works of Patanjali.',

        'The 6 sites where Lord Skanda lived while leading his armies against Surapadman (all are in Tamil Nadu) are: Swamimalai, Palani, Pazhamudirsolai, Thiruparamkundram, Thiruchendur, and Thiruthani.',

        'The emergence of Lord Skanda as a popular Hindu God in Tamil Nadu dates back as the Sangam Era during the 3 B.C to 4 B.C. Moreover, the Thirumurugatruppadai, a profound ancient devotional poem by Nakeerar, glorifies the Lord Skanda as the God of Eternal Youth.',

        'The esteemed brother of Lord Skanda is Lord Ganesha, the Lord of Obstacles. Lord Ganesha has elephant ears and trunk, plus, he is one of the 5 main Hindu deities along with Lord Shiva and Goddess Parvati.Lord Ganesha',

        'Saundaravalli and Amaratavalli, the daughters of Lord Vishnu, the creator of the world, were ardent followers of Lord Skanda.',

        'Muruga has two wives: Deyvayanai and Valli. Devasena is the daughter of Indra, the king of the Devas and Valli is a tribal girl. One is Kriya-shakti (power of action) and the other Iccha-shakti (will power). Both these characteristics come together with the Kundalini Shakti.',

        'In ancient India, Muruga was acknowledged as the patron deity of thieves, as may be inferred from the Vetala Panchvimshati, a medieval collection of tales, and the Mrichchakatikam, a Sanskrit play by Shudraka.',

        'In Bengal, Muruga is recognized and venerated as the most handsome of the demi Gods. For example, on Durga Puja, Lord Skanda has to be adored along with Mother Durga and Lord Ganesh.',

        'The existence of many temples dedicated to him leads to the conclusion that Lord Skanda’s worship is popular in South India. For instance, In Tamilnadu, it is equal in popularity to Lord Shiva’s worship. However, in North India, his worship seems to have declined slowly.',

        'South India, Muruga is referred as the younger son of Lord Shiva and Goddess Parvati and is shown as married to a woman known as Kumari or VaIli or Devasena. In North India, he appears as never been married. Lord Shiva',

        'One of the most important holidays dedicated to the worship of Lord Skanda is Thaipusam. It is also held outside of India, mainly by the Tamil-speaking community settled in Singapore, Malaysia, Sri Lanka, and South Africa.',

        'Muruga is usually portrayed with one head. However, some describe him with 6 heads, that symbolized the legend surrounding his birth, where 6 mothers representing the 6 stars of Pleiades took care of him.',

        'Muruga\'s favorite weapon is the spear or vel, hence the famous name Velayudhan, that translates as ”he whose weapon is a spear.”',

        ' Muruga\'s vehicle is a peacock, a pious bird which grips with its feet a serpent. His peacock symbolizes him as the conqueror of sensual desires and a destroyer of all bad habits.',

        ' By worshipping Lord Skanda with deep and sincere devotion, good days start appearing, and all the difficulties and troubles in one’s life dissolve. More importantly, he can instill courage and hope in your mind and consciousness as well as he can help you to accomplish success in your professional life. Additionally, his benevolence destroys ignorance, negativity, and disease and can also help you overcome external and internal battles.',
    ];


    god_map.set("Shiva",god_shiva);
    god_map.set("Vishnu",god_vishnu);
    god_map.set("Bhrama",god_bhrama);
    god_map.set("Murugan",god_murugan);
    god_map.set("Ganesh",god_ganesh);

module.exports = {

    fact : function(name){
        return god_map.get(name);
    }

};