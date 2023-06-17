import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function HomePage() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    // Check if there's a saved scroll position in local storage
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      setLastScrollPosition(parseInt(savedScrollPosition));
    }

    // Set up a scroll event listener to save the scroll position in local storage
    const updateScrollPosition = () => {
      // Only update if the new scroll position is further down the page
      if (window.scrollY > lastScrollPosition) {
        setLastScrollPosition(window.scrollY);
        localStorage.setItem("scrollPosition", window.scrollY.toString());
      }
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [lastScrollPosition]);

  const scrollToLastReadPosition = () => {
    if (lastScrollPosition) {
      scroll.scrollTo(lastScrollPosition);
    }
  };

  return (
    <div className="prose">
      <button
        onClick={scrollToLastReadPosition}
        className="p-1 mx-3 my-6 border rounded-sm"
      >
        Go to last read position ({lastScrollPosition} px)
      </button>
      <div>
        <p>
          The only young people remaining in the drawing room, not counting the
          young lady visitor and the countess’ eldest daughter (who was four
          years older than her sister and behaved already like a grown-up
          person), were Nicholas and Sónya, the niece. Sónya was a slender
          little brunette with a tender look in her eyes which were veiled by
          long lashes, thick black plaits coiling twice round her head, and a
          tawny tint in her complexion and especially in the color of her
          slender but graceful and muscular arms and neck. By the grace of her
          movements, by the softness and flexibility of her small limbs, and by
          a certain coyness and reserve of manner, she reminded one of a pretty,
          half-grown kitten which promises to become a beautiful little cat.
        </p>
        <p>
          She evidently considered it proper to show an interest in the general
          conversation by smiling, but in spite of herself her eyes under their
          thick long lashes watched her cousin who was going to join the army,
          with such passionate girlish adoration that her smile could not for a
          single instant impose upon anyone, and it was clear that the kitten
          had settled down only to spring up with more energy and again play
          with her cousin as soon as they too could, like Natásha and Borís,
          escape from the drawing room. “Ah yes, my dear,” said the count,
          addressing the visitor and pointing to Nicholas, “his friend Borís has
          become an officer, and so for friendship’s sake he is leaving the
          university and me, his old father, and entering the military service,
          my dear. And there was a place and everything waiting for him in the
          Archives Department! Isn’t that friendship?” remarked the count in an
          inquiring tone. “But they say that war has been declared,” replied the
          visitor.
        </p>
        <p>
          “They’ve been saying so a long while,” said the count, “and they’ll
          say so again and again, and that will be the end of it. My dear,
          there’s friendship for you,” he repeated. “He’s joining the hussars.”
          The visitor, not knowing what to say, shook her head. “It’s not at all
          from friendship,” declared Nicholas, flaring up and turning away as if
          from a shameful aspersion. “It is not from friendship at all; I simply
          feel that the army is my vocation.” He glanced at his cousin and the
          young lady visitor; and they were both regarding him with a smile of
          approbation. “Schubert, the colonel of the Pávlograd Hussars, is
          dining with us today. He has been here on leave and is taking Nicholas
          back with him. It can’t be helped!” said the count, shrugging his
          shoulders and speaking playfully of a matter that evidently distressed
          him. “I have already told you, Papa,” said his son, “that if you don’t
          wish to let me go, I’ll stay. But I know I am no use anywhere except
          in the army; I am not a diplomat or a government clerk.—I don’t know
          how to hide what I feel.” As he spoke he kept glancing with the
          flirtatiousness of a handsome youth at Sónya and the young lady
          visitor. The little kitten, feasting her eyes on him, seemed ready at
          any moment to start her gambols again and display her kittenish
          nature. “All right, all right!” said the old count. “He always flares
          up! This Buonaparte has turned all their heads; they all think of how
          he rose from an ensign and became Emperor. Well, well, God grant it,”
          he added, not noticing his visitor’s sarcastic smile. The elders began
          talking about Bonaparte. Julie Karágina turned to young Rostóv. “What
          a pity you weren’t at the Arkhárovs’ on Thursday. It was so dull
          without you,” said she, giving him a tender smile. The young man,
          flattered, sat down nearer to her with a coquettish smile, and engaged
          the smiling Julie in a confidential conversation without at all
          noticing that his involuntary smile had stabbed the heart of Sónya,
          who blushed and smiled unnaturally. In the midst of his talk he
          glanced round at her. She gave him a passionately angry glance, and
          hardly able to restrain her tears and maintain the artificial smile on
          her lips, she got up and left the room. All Nicholas’ animation
          vanished. He waited for the first pause in the conversation, and then
          with a distressed face left the room to find Sónya. “How plainly all
          these young people wear their hearts on their sleeves!” said Anna
          Mikháylovna, pointing to Nicholas as he went out. “Cousinage—dangereux
          voisinage,” * she added. * Cousinhood is a dangerous neighborhood.
          “Yes,” said the countess when the brightness these young people had
          brought into the room had vanished; and as if answering a question no
          one had put but which was always in her mind, “and how much suffering,
          how much anxiety one has had to go through that we might rejoice in
          them now! And yet really the anxiety is greater now than the joy. One
          is always, always anxious! Especially just at this age, so dangerous
          both for girls and boys.” “It all depends on the bringing up,”
          remarked the visitor. “Yes, you’re quite right,” continued the
          countess. “Till now I have always, thank God, been my children’s
          friend and had their full confidence,” said she, repeating the mistake
          of so many parents who imagine that their children have no secrets
          from them. “I know I shall always be my daughters’ first confidante,
          and that if Nicholas, with his impulsive nature, does get into
          mischief (a boy can’t help it), he will all the same never be like
          those Petersburg young men.” “Yes, they are splendid, splendid
          youngsters,” chimed in the count, who always solved questions that
          seemed to him perplexing by deciding that everything was splendid.
        </p>
        <p>
          “Just fancy: wants to be an hussar. What’s one to do, my dear?” “What
          a charming creature your younger girl is,” said the visitor; “a little
          volcano!” “Yes, a regular volcano,” said the count. “Takes after me!
          And what a voice she has; though she’s my daughter, I tell the truth
          when I say she’ll be a singer, a second Salomoni! We have engaged an
          Italian to give her lessons.” “Isn’t she too young? I have heard that
          it harms the voice to train it at that age.” “Oh no, not at all too
          young!” replied the count. “Why, our mothers used to be married at
          twelve or thirteen.” “And she’s in love with Borís already. Just
          fancy!” said the countess with a gentle smile, looking at Borís and
          went on, evidently concerned with a thought that always occupied her:
          “Now you see if I were to be severe with her and to forbid it ...
          goodness knows what they might be up to on the sly” (she meant that
          they would be kissing), “but as it is, I know every word she utters.
          She will come running to me of her own accord in the evening and tell
          me everything. Perhaps I spoil her, but really that seems the best
          plan. With her elder sister I was stricter.” “Yes, I was brought up
          quite differently,” remarked the handsome elder daughter, Countess
          Véra, with a smile. But the smile did not enhance Véra’s beauty as
          smiles generally do; on the contrary it gave her an unnatural, and
          therefore unpleasant, expression. Véra was good-looking, not at all
          stupid, quick at learning, was well brought up, and had a pleasant
          voice; what she said was true and appropriate, yet, strange to say,
          everyone—the visitors and countess alike—turned to look at her as if
          wondering why she had said it, and they all felt awkward. “People are
          always too clever with their eldest children and try to make something
          exceptional of them,” said the visitor. “What’s the good of denying
          it, my dear? Our dear countess was too clever with Véra,” said the
          count. “Well, what of that? She’s turned out splendidly all the same,”
          he added, winking at Véra. The guests got up and took their leave,
          promising to return to dinner. “What manners! I thought they would
          never go,” said the countess, when she had seen her guests out.
        </p>

        <h2>CHAPTER XIII</h2>
        <p>
          {" "}
          When Natásha ran out of the drawing room she only went as far as the
          conservatory. There she paused and stood listening to the conversation
          in the drawing room, waiting for Borís to come out. She was already
          growing impatient, and stamped her foot, ready to cry at his not
          coming at once, when she heard the young man’s discreet steps
          approaching neither quickly nor slowly. At this Natásha dashed swiftly
          among the flower tubs and hid there. Borís paused in the middle of the
          room, looked round, brushed a little dust from the sleeve of his
          uniform, and going up to a mirror examined his handsome face. Natásha,
          very still, peered out from her ambush, waiting to see what he would
          do. He stood a little while before the glass, smiled, and walked
          toward the other door. Natásha was about to call him but changed her
          mind. “Let him look for me,” thought she. Hardly had Borís gone than
          Sónya, flushed, in tears, and muttering angrily, came in at the other
          door. Natásha checked her first impulse to run out to her, and
          remained in her hiding place, watching—as under an invisible cap—to
          see what went on in the world. She was experiencing a new and peculiar
          pleasure. Sónya, muttering to herself, kept looking round toward the
          drawing room door. It opened and Nicholas came in. “Sónya, what is the
          matter with you? How can you?” said he, running up to her. “It’s
          nothing, nothing; leave me alone!” sobbed Sónya. “Ah, I know what it
          is.” “Well, if you do, so much the better, and you can go back to
          her!” “Só-o-onya! Look here! How can you torture me and yourself like
          that, for a mere fancy?” said Nicholas taking her hand. Sónya did not
          pull it away, and left off crying. Natásha, not stirring and scarcely
          breathing, watched from her ambush with sparkling eyes. “What will
          happen now?” thought she. “Sónya! What is anyone in the world to me?
          You alone are everything!” said Nicholas. “And I will prove it to
          you.” “I don’t like you to talk like that.” “Well, then, I won’t; only
          forgive me, Sónya!” He drew her to him and kissed her. “Oh, how nice,”
          thought Natásha; and when Sónya and Nicholas had gone out of the
          conservatory she followed and called Borís to her. “Borís, come here,”
          said she with a sly and significant look. “I have something to tell
          you. Here, here!” and she led him into the conservatory to the place
          among the tubs where she had been hiding. Borís followed her, smiling.
          “What is the something?” asked he. She grew confused, glanced round,
          and, seeing the doll she had thrown down on one of the tubs, picked it
          up.
        </p>
        <p>
          “Kiss the doll,” said she. Borís looked attentively and kindly at her
          eager face, but did not reply. “Don’t you want to? Well, then, come
          here,” said she, and went further in among the plants and threw down
          the doll. “Closer, closer!” she whispered. She caught the young
          officer by his cuffs, and a look of solemnity and fear appeared on her
          flushed face. “And me? Would you like to kiss me?” she whispered
          almost inaudibly, glancing up at him from under her brows, smiling,
          and almost crying from excitement. Borís blushed. “How funny you are!”
          he said, bending down to her and blushing still more, but he waited
          and did nothing. Suddenly she jumped up onto a tub to be higher than
          he, embraced him so that both her slender bare arms clasped him above
          his neck, and, tossing back her hair, kissed him full on the lips.
          Then she slipped down among the flowerpots on the other side of the
          tubs and stood, hanging her head. “Natásha,” he said, “you know that I
          love you, but....” “You are in love with me?” Natásha broke in. “Yes,
          I am, but please don’t let us do like that.... In another four years
          ... then I will ask for your hand.” Natásha considered. “Thirteen,
          fourteen, fifteen, sixteen,” she counted on her slender little
          fingers. “All right! Then it’s settled?” A smile of joy and
          satisfaction lit up her eager face. “Settled!” replied Borís.
          “Forever?” said the little girl. “Till death itself?” She took his arm
          and with a happy face went with him into the adjoining sitting room.
          CHAPTER XIV After receiving her visitors, the countess was so tired
          that she gave orders to admit no more, but the porter was told to be
          sure to invite to dinner all who came “to congratulate.” The countess
          wished to have a tête-à-tête talk with the friend of her childhood,
          Princess Anna Mikháylovna, whom she had not seen properly since she
          returned from Petersburg. Anna Mikháylovna, with her tear-worn but
          pleasant face, drew her chair nearer to that of the countess. “With
          you I will be quite frank,” said Anna Mikháylovna. “There are not many
          left of us old friends! That’s why I so value your friendship.” Anna
          Mikháylovna looked at Véra and paused. The countess pressed her
          friend’s hand. “Véra,” she said to her eldest daughter who was
          evidently not a favorite, “how is it you have so little tact? Don’t
          you see you are not wanted here? Go to the other girls, or...”
        </p>
        <p>
          The handsome Véra smiled contemptuously but did not seem at all hurt.
          “If you had told me sooner, Mamma, I would have gone,” she replied as
          she rose to go to her own room. But as she passed the sitting room she
          noticed two couples sitting, one pair at each window. She stopped and
          smiled scornfully. Sónya was sitting close to Nicholas who was copying
          out some verses for her, the first he had ever written. Borís and
          Natásha were at the other window and ceased talking when Véra entered.
          Sónya and Natásha looked at Véra with guilty, happy faces. It was
          pleasant and touching to see these little girls in love; but
          apparently the sight of them roused no pleasant feeling in Véra. “How
          often have I asked you not to take my things?” she said. “You have a
          room of your own,” and she took the inkstand from Nicholas. “In a
          minute, in a minute,” he said, dipping his pen. “You always manage to
          do things at the wrong time,” continued Véra. “You came rushing into
          the drawing room so that everyone felt ashamed of you.” Though what
          she said was quite just, perhaps for that very reason no one replied,
          and the four simply looked at one another. She lingered in the room
          with the inkstand in her hand. “And at your age what secrets can there
          be between Natásha and Borís, or between you two? It’s all nonsense!”
          “Now, Véra, what does it matter to you?” said Natásha in defense,
          speaking very gently. She seemed that day to be more than ever kind
          and affectionate to everyone. “Very silly,” said Véra. “I am ashamed
          of you. Secrets indeed!” “All have secrets of their own,” answered
          Natásha, getting warmer. “We don’t interfere with you and Berg.” “I
          should think not,” said Véra, “because there can never be anything
          wrong in my behavior. But I’ll just tell Mamma how you are behaving
          with Borís.” “Natálya Ilyníchna behaves very well to me,” remarked
          Borís. “I have nothing to complain of.” “Don’t, Borís! You are such a
          diplomat that it is really tiresome,” said Natásha in a mortified
          voice that trembled slightly. (She used the word “diplomat,” which was
          just then much in vogue among the children, in the special sense they
          attached to it.) “Why does she bother me?” And she added, turning to
          Véra, “You’ll never understand it, because you’ve never loved anyone.
          You have no heart! You are a Madame de Genlis and nothing more” (this
          nickname, bestowed on Véra by Nicholas, was considered very stinging),
          “and your greatest pleasure is to be unpleasant to people! Go and
          flirt with Berg as much as you please,” she finished quickly. “I shall
          at any rate not run after a young man before visitors...” “Well, now
          you’ve done what you wanted,” put in Nicholas—“said unpleasant things
          to everyone and upset them. Let’s go to the nursery.” All four, like a
          flock of scared birds, got up and left the room. “The unpleasant
          things were said to me,” remarked Véra, “I said none to anyone.”
          “Madame de Genlis! Madame de Genlis!” shouted laughing voices through
          the door. The handsome Véra, who produced such an irritating and
          unpleasant effect on everyone, smiled and, evidently unmoved by what
          had been said to her, went to the looking glass and arranged her hair
          and scarf. Looking at her own handsome face she seemed to become still
          colder and calmer. In the drawing room the conversation was still
          going on. “Ah, my dear,” said the countess, “my life is not all roses
          either. Don’t I know that at the rate we are living our means won’t
          last long? It’s all the Club and his easygoing nature. Even in the
          country do we get any rest? Theatricals, hunting, and heaven knows
          what besides! But don’t let’s talk about me; tell me how you managed
          everything. I often wonder at you, Annette—how at your age you can
          rush off alone in a carriage to Moscow, to Petersburg, to those
          ministers and great people, and know how to deal with them all! It’s
          quite astonishing. How did you get things settled? I couldn’t possibly
          do it.” “Ah, my love,” answered Anna Mikháylovna, “God grant you never
          know what it is to be left a widow without means and with a son you
          love to distraction! One learns many things then,” she added with a
          certain pride. “That lawsuit taught me much. When I want to see one of
          those big people I write a note: ‘Princess So-and-So desires an
          interview with So and-So,’ and then I take a cab and go myself two,
          three, or four times—till I get what I want. I don’t mind what they
          think of me.” “Well, and to whom did you apply about Bóry?” asked the
          countess. “You see yours is already an officer in the Guards, while my
          Nicholas is going as a cadet. There’s no one to interest himself for
          him. To whom did you apply?” “To Prince Vasíli. He was so kind. He at
          once agreed to everything, and put the matter before the Emperor,”
          said Princess Anna Mikháylovna enthusiastically, quite forgetting all
          the humiliation she had endured to gain her end. “Has Prince Vasíli
          aged much?” asked the countess. “I have not seen him since we acted
          together at the Rumyántsovs’ theatricals. I expect he has forgotten
          me. He paid me attentions in those days,” said the countess, with a
          smile. “He is just the same as ever,” replied Anna Mikháylovna,
          “overflowing with amiability. His position has not turned his head at
          all. He said to me, ‘I am sorry I can do so little for you, dear
          Princess. I am at your command.’ Yes, he is a fine fellow and a very
          kind relation. But, Nataly, you know my love for my son: I would do
          anything for his happiness! And my affairs are in such a bad way that
          my position is now a terrible one,” continued Anna Mikháylovna, sadly,
          dropping her voice. “My wretched lawsuit takes all I have and makes no
          progress. Would you believe it, I have literally not a penny and don’t
          know how to equip Borís.” She took out her handkerchief and began to
          cry. “I need five hundred rubles, and have only one twenty-five-ruble
          note. I am in such a state.... My only hope now is in Count Cyril
          Vladímirovich Bezúkhov. If he will not assist his godson—you know he
          is Bóry’s godfather—and allow him something for his maintenance, all
          my trouble will have been thrown away.... I shall not be able to equip
          him.” The countess’ eyes filled with tears and she pondered in
          silence. “I often think, though, perhaps it’s a sin,” said the
          princess, “that here lives Count Cyril Vladímirovich Bezúkhov so rich,
          all alone... that tremendous fortune... and what is his life worth?
          It’s a burden to him, and Bóry’s life is only just beginning....”
          “Surely he will leave something to Borís,” said the countess. “Heaven
          only knows, my dear! These rich grandees are so selfish. Still, I will
          take Borís and go to see him at once, and I shall speak to him
          straight out. Let people think what they will of me, it’s really all
          the same to me when my son’s fate is at stake.” The princess rose.
          “It’s now two o’clock and you dine at four. There will just be time.”
          And like a practical Petersburg lady who knows how to make the most of
          time, Anna Mikháylovna sent someone to call her son, and went into the
          anteroom with him. “Good-by, my dear,” said she to the countess who
          saw her to the door, and added in a whisper so that her son should not
          hear, “Wish me good luck.” “Are you going to Count Cyril
          Vladímirovich, my dear?” said the count coming out from the dining
          hall into the anteroom, and he added: “If he is better, ask Pierre to
          dine with us. He has been to the house, you know, and danced with the
          children. Be sure to invite him, my dear. We will see how Tarás
          distinguishes himself today. He says Count Orlóv never gave such a
          dinner as ours will be!” CHAPTER XV “My dear Borís,” said Princess
          Anna Mikháylovna to her son as Countess Rostóva’s carriage in which
          they were seated drove over the straw covered street and turned into
          the wide courtyard of Count Cyril Vladímirovich Bezúkhov’s house. “My
          dear Borís,” said the mother, drawing her hand from beneath her old
          mantle and laying it timidly and tenderly on her son’s arm, “be
          affectionate and attentive to him. Count Cyril Vladímirovich is your
          godfather after all, and your future depends on him. Remember that, my
          dear, and be nice to him, as you so well know how to be.” “If only I
          knew that anything besides humiliation would come of it...” answered
          her son coldly. “But I have promised and will do it for your sake.”
          Although the hall porter saw someone’s carriage standing at the
          entrance, after scrutinizing the mother and son (who without asking to
          be announced had passed straight through the glass porch between the
          rows of statues in niches) and looking significantly at the lady’s old
          cloak, he asked whether they wanted the count or the princesses, and,
          hearing that they wished to see the count, said his excellency was
          worse today, and that his excellency was not receiving anyone. “We may
          as well go back,” said the son in French. “My dear!” exclaimed his
          mother imploringly, again laying her hand on his arm as if that touch
          might soothe or rouse him. Borís said no more, but looked inquiringly
          at his mother without taking off his cloak. “My friend,” said Anna
          Mikháylovna in gentle tones, addressing the hall porter, “I know Count
          Cyril Vladímirovich is very ill... that’s why I have come... I am a
          relation. I shall not disturb him, my friend... I only need see Prince
          Vasíli Sergéevich: he is staying here, is he not? Please announce me.”
          The hall porter sullenly pulled a bell that rang upstairs, and turned
          away. “Princess Drubetskáya to see Prince Vasíli Sergéevich,” he
          called to a footman dressed in knee breeches, shoes, and a
          swallow-tail coat, who ran downstairs and looked over from the halfway
          landing. The mother smoothed the folds of her dyed silk dress before a
          large Venetian mirror in the wall, and in her trodden-down shoes
          briskly ascended the carpeted stairs. “My dear,” she said to her son,
          once more stimulating him by a touch, “you promised me!” The son,
          lowering his eyes, followed her quietly. They entered the large hall,
          from which one of the doors led to the apartments assigned to Prince
          Vasíli. Just as the mother and son, having reached the middle of the
          hall, were about to ask their way of an elderly footman who had sprung
          up as they entered, the bronze handle of one of the doors turned and
          Prince Vasíli came out—wearing a velvet coat with a single star on his
          breast, as was his custom when at home—taking leave of a good-looking,
          dark-haired man. This was the celebrated Petersburg doctor, Lorrain.
          “Then it is certain?” said the prince. “Prince, humanum est errare, *
          but...” replied the doctor, swallowing his r’s, and pronouncing the
          Latin words with a French accent. * To err is human. “Very well, very
          well...” Seeing Anna Mikháylovna and her son, Prince Vasíli dismissed
          the doctor with a bow and approached them silently and with a look of
          inquiry. The son noticed that an expression of profound sorrow
          suddenly clouded his mother’s face, and he smiled slightly. “Ah,
          Prince! In what sad circumstances we meet again! And how is our dear
          invalid?” said she, as though unaware of the cold offensive look fixed
          on her.
        </p>
        <p>
          {" "}
          Prince Vasíli stared at her and at Borís questioningly and perplexed.
          Borís bowed politely. Prince Vasíli without acknowledging the bow
          turned to Anna Mikháylovna, answering her query by a movement of the
          head and lips indicating very little hope for the patient. “Is it
          possible?” exclaimed Anna Mikháylovna. “Oh, how awful! It is terrible
          to think.... This is my son,” she added, indicating Borís. “He wanted
          to thank you himself.” Borís bowed again politely. “Believe me,
          Prince, a mother’s heart will never forget what you have done for us.”
          “I am glad I was able to do you a service, my dear Anna Mikháylovna,”
          said Prince Vasíli, arranging his lace frill, and in tone and manner,
          here in Moscow to Anna Mikháylovna whom he had placed under an
          obligation, assuming an air of much greater importance than he had
          done in Petersburg at Anna Schérer’s reception. “Try to serve well and
          show yourself worthy,” added he, addressing Borís with severity. “I am
          glad.... Are you here on leave?” he went on in his usual tone of
          indifference. “I am awaiting orders to join my new regiment, your
          excellency,” replied Borís, betraying neither annoyance at the
          prince’s brusque manner nor a desire to enter into conversation, but
          speaking so quietly and respectfully that the prince gave him a
          searching glance. “Are you living with your mother?” “I am living at
          Countess Rostóva’s,” replied Borís, again adding, “your excellency.”
          “That is, with Ilyá Rostóv who married Nataly Shinshiná,” said Anna
          Mikháylovna. “I know, I know,” answered Prince Vasíli in his
          monotonous voice. “I never could understand how Nataly made up her
          mind to marry that unlicked bear! A perfectly absurd and stupid
          fellow, and a gambler too, I am told.”
        </p>
      </div>
    </div>
  );
}
