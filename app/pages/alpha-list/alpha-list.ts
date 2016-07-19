import {Component} from '@angular/core';
import {Modal, Platform, NavController, NavParams, ViewController} from 'ionic-angular';
import { IonAlphaScroll } from 'ionic2-alpha-scroll';
import * as _ from 'lodash';

@Component({
  templateUrl: 'build/pages/alpha-list/alpha-list.html',
  directives: [IonAlphaScroll]
})
export class AlphaListPage {
  breeds: any;
  currentPageClass = this;
  alphaScrollItemTemplate: string = `
    <div (click)="currentPageClass.onItemClick(item)">
      {{item.$t}}
    </div>
  `;
  triggerAlphaScrollChange: number = 0;

  constructor() {
    this.assignBreeds();
  }

  onItemClick(item) {
    let itemIndex = _.findIndex(this.breeds, (b: any) => {
      return b.$t === item.$t;
    });
    this.breeds.splice(itemIndex, 1);
    this.triggerAlphaScrollChange++;
  }

  assignBreeds() {
    this.breeds = [
      {
        "$t": "Affenpinscher"
      },
      {
        "$t": "Afghan Hound"
      },
      {
        "$t": "Airedale Terrier"
      },
      {
        "$t": "Akbash"
      },
      {
        "$t": "Akita"
      },
      {
        "$t": "Alaskan Malamute"
      },
      {
        "$t": "American Bulldog"
      },
      {
        "$t": "American Eskimo Dog"
      },
      {
        "$t": "American Hairless Terrier"
      },
      {
        "$t": "American Staffordshire Terrier"
      },
      {
        "$t": "American Water Spaniel"
      },
      {
        "$t": "Anatolian Shepherd"
      },
      {
        "$t": "Appenzell Mountain Dog"
      },
      {
        "$t": "Australian Cattle Dog (Blue Heeler)"
      },
      {
        "$t": "Australian Kelpie"
      },
      {
        "$t": "Australian Shepherd"
      },
      {
        "$t": "Australian Terrier"
      },
      {
        "$t": "Basenji"
      },
      {
        "$t": "Basset Hound"
      },
      {
        "$t": "Beagle"
      },
      {
        "$t": "Bearded Collie"
      },
      {
        "$t": "Beauceron"
      },
      {
        "$t": "Bedlington Terrier"
      },
      {
        "$t": "Belgian Shepherd Dog Sheepdog"
      },
      {
        "$t": "Belgian Shepherd Laekenois"
      },
      {
        "$t": "Belgian Shepherd Malinois"
      },
      {
        "$t": "Belgian Shepherd Tervuren"
      },
      {
        "$t": "Bernese Mountain Dog"
      },
      {
        "$t": "Bichon Frise"
      },
      {
        "$t": "Black and Tan Coonhound"
      },
      {
        "$t": "Black Labrador Retriever"
      },
      {
        "$t": "Black Mouth Cur"
      },
      {
        "$t": "Black Russian Terrier"
      },
      {
        "$t": "Bloodhound"
      },
      {
        "$t": "Blue Lacy"
      },
      {
        "$t": "Bluetick Coonhound"
      },
      {
        "$t": "Boerboel"
      },
      {
        "$t": "Bolognese"
      },
      {
        "$t": "Border Collie"
      },
      {
        "$t": "Border Terrier"
      },
      {
        "$t": "Borzoi"
      },
      {
        "$t": "Boston Terrier"
      },
      {
        "$t": "Bouvier des Flanders"
      },
      {
        "$t": "Boxer"
      },
      {
        "$t": "Boykin Spaniel"
      },
      {
        "$t": "Briard"
      },
      {
        "$t": "Brittany Spaniel"
      },
      {
        "$t": "Brussels Griffon"
      },
      {
        "$t": "Bull Terrier"
      },
      {
        "$t": "Bullmastiff"
      },
      {
        "$t": "Cairn Terrier"
      },
      {
        "$t": "Canaan Dog"
      },
      {
        "$t": "Cane Corso Mastiff"
      },
      {
        "$t": "Carolina Dog"
      },
      {
        "$t": "Catahoula Leopard Dog"
      },
      {
        "$t": "Cattle Dog"
      },
      {
        "$t": "Caucasian Sheepdog (Caucasian Ovtcharka)"
      },
      {
        "$t": "Cavalier King Charles Spaniel"
      },
      {
        "$t": "Chesapeake Bay Retriever"
      },
      {
        "$t": "Chihuahua"
      },
      {
        "$t": "Chinese Crested Dog"
      },
      {
        "$t": "Chinese Foo Dog"
      },
      {
        "$t": "Chinook"
      },
      {
        "$t": "Chocolate Labrador Retriever"
      },
      {
        "$t": "Chow Chow"
      },
      {
        "$t": "Cirneco dell'Etna"
      },
      {
        "$t": "Clumber Spaniel"
      },
      {
        "$t": "Cockapoo"
      },
      {
        "$t": "Cocker Spaniel"
      },
      {
        "$t": "Collie"
      },
      {
        "$t": "Coonhound"
      },
      {
        "$t": "Corgi"
      },
      {
        "$t": "Coton de Tulear"
      },
      {
        "$t": "Curly-Coated Retriever"
      },
      {
        "$t": "Dachshund"
      },
      {
        "$t": "Dalmatian"
      },
      {
        "$t": "Dandi Dinmont Terrier"
      },
      {
        "$t": "Doberman Pinscher"
      },
      {
        "$t": "Dogo Argentino"
      },
      {
        "$t": "Dogue de Bordeaux"
      },
      {
        "$t": "Dutch Shepherd"
      },
      {
        "$t": "English Bulldog"
      },
      {
        "$t": "English Cocker Spaniel"
      },
      {
        "$t": "English Coonhound"
      },
      {
        "$t": "English Pointer"
      },
      {
        "$t": "English Setter"
      },
      {
        "$t": "English Shepherd"
      },
      {
        "$t": "English Springer Spaniel"
      },
      {
        "$t": "English Toy Spaniel"
      },
      {
        "$t": "Entlebucher"
      },
      {
        "$t": "Eskimo Dog"
      },
      {
        "$t": "Feist"
      },
      {
        "$t": "Field Spaniel"
      },
      {
        "$t": "Fila Brasileiro"
      },
      {
        "$t": "Finnish Lapphund"
      },
      {
        "$t": "Finnish Spitz"
      },
      {
        "$t": "Flat-coated Retriever"
      },
      {
        "$t": "Fox Terrier"
      },
      {
        "$t": "Foxhound"
      },
      {
        "$t": "French Bulldog"
      },
      {
        "$t": "Galgo Spanish Greyhound"
      },
      {
        "$t": "German Pinscher"
      },
      {
        "$t": "German Shepherd Dog"
      },
      {
        "$t": "German Shorthaired Pointer"
      },
      {
        "$t": "German Spitz"
      },
      {
        "$t": "German Wirehaired Pointer"
      },
      {
        "$t": "Giant Schnauzer"
      },
      {
        "$t": "Glen of Imaal Terrier"
      },
      {
        "$t": "Golden Retriever"
      },
      {
        "$t": "Gordon Setter"
      },
      {
        "$t": "Great Dane"
      },
      {
        "$t": "Great Pyrenees"
      },
      {
        "$t": "Greater Swiss Mountain Dog"
      },
      {
        "$t": "Greyhound"
      },
      {
        "$t": "Harrier"
      },
      {
        "$t": "Havanese"
      },
      {
        "$t": "Hound"
      },
      {
        "$t": "Hovawart"
      },
      {
        "$t": "Husky"
      },
      {
        "$t": "Ibizan Hound"
      },
      {
        "$t": "Icelandic Sheepdog"
      },
      {
        "$t": "Illyrian Sheepdog"
      },
      {
        "$t": "Irish Setter"
      },
      {
        "$t": "Irish Terrier"
      },
      {
        "$t": "Irish Water Spaniel"
      },
      {
        "$t": "Irish Wolfhound"
      },
      {
        "$t": "Italian Greyhound"
      },
      {
        "$t": "Italian Spinone"
      },
      {
        "$t": "Jack Russell Terrier"
      },
      {
        "$t": "Jack Russell Terrier (Parson Russell Terrier)"
      },
      {
        "$t": "Japanese Chin"
      },
      {
        "$t": "Jindo"
      },
      {
        "$t": "Kai Dog"
      },
      {
        "$t": "Karelian Bear Dog"
      },
      {
        "$t": "Keeshond"
      },
      {
        "$t": "Kerry Blue Terrier"
      },
      {
        "$t": "Kishu"
      },
      {
        "$t": "Klee Kai"
      },
      {
        "$t": "Komondor"
      },
      {
        "$t": "Kuvasz"
      },
      {
        "$t": "Kyi Leo"
      },
      {
        "$t": "Labrador Retriever"
      },
      {
        "$t": "Lakeland Terrier"
      },
      {
        "$t": "Lancashire Heeler"
      },
      {
        "$t": "Leonberger"
      },
      {
        "$t": "Lhasa Apso"
      },
      {
        "$t": "Lowchen"
      },
      {
        "$t": "Maltese"
      },
      {
        "$t": "Manchester Terrier"
      },
      {
        "$t": "Maremma Sheepdog"
      },
      {
        "$t": "Mastiff"
      },
      {
        "$t": "McNab"
      },
      {
        "$t": "Miniature Pinscher"
      },
      {
        "$t": "Mountain Cur"
      },
      {
        "$t": "Mountain Dog"
      },
      {
        "$t": "Munsterlander"
      },
      {
        "$t": "Neapolitan Mastiff"
      },
      {
        "$t": "New Guinea Singing Dog"
      },
      {
        "$t": "Newfoundland Dog"
      },
      {
        "$t": "Norfolk Terrier"
      },
      {
        "$t": "Norwegian Buhund"
      },
      {
        "$t": "Norwegian Elkhound"
      },
      {
        "$t": "Norwegian Lundehund"
      },
      {
        "$t": "Norwich Terrier"
      },
      {
        "$t": "Nova Scotia Duck-Tolling Retriever"
      },
      {
        "$t": "Old English Sheepdog"
      },
      {
        "$t": "Otterhound"
      },
      {
        "$t": "Papillon"
      },
      {
        "$t": "Patterdale Terrier (Fell Terrier)"
      },
      {
        "$t": "Pekingese"
      },
      {
        "$t": "Peruvian Inca Orchid"
      },
      {
        "$t": "Petit Basset Griffon Vendeen"
      },
      {
        "$t": "Pharaoh Hound"
      },
      {
        "$t": "Pit Bull Terrier"
      },
      {
        "$t": "Plott Hound"
      },
      {
        "$t": "Podengo Portugueso"
      },
      {
        "$t": "Pointer"
      },
      {
        "$t": "Polish Lowland Sheepdog"
      },
      {
        "$t": "Pomeranian"
      },
      {
        "$t": "Poodle"
      },
      {
        "$t": "Portuguese Water Dog"
      },
      {
        "$t": "Presa Canario"
      },
      {
        "$t": "Pug"
      },
      {
        "$t": "Puli"
      },
      {
        "$t": "Pumi"
      },
      {
        "$t": "Rat Terrier"
      },
      {
        "$t": "Redbone Coonhound"
      },
      {
        "$t": "Retriever"
      },
      {
        "$t": "Rhodesian Ridgeback"
      },
      {
        "$t": "Rottweiler"
      },
      {
        "$t": "Saint Bernard St. Bernard"
      },
      {
        "$t": "Saluki"
      },
      {
        "$t": "Samoyed"
      },
      {
        "$t": "Sarplaninac"
      },
      {
        "$t": "Schipperke"
      },
      {
        "$t": "Schnauzer"
      },
      {
        "$t": "Scottish Deerhound"
      },
      {
        "$t": "Scottish Terrier Scottie"
      },
      {
        "$t": "Sealyham Terrier"
      },
      {
        "$t": "Setter"
      },
      {
        "$t": "Shar Pei"
      },
      {
        "$t": "Sheep Dog"
      },
      {
        "$t": "Shepherd"
      },
      {
        "$t": "Shetland Sheepdog Sheltie"
      },
      {
        "$t": "Shiba Inu"
      },
      {
        "$t": "Shih Tzu"
      },
      {
        "$t": "Siberian Husky"
      },
      {
        "$t": "Silky Terrier"
      },
      {
        "$t": "Skye Terrier"
      },
      {
        "$t": "Sloughi"
      },
      {
        "$t": "Smooth Fox Terrier"
      },
      {
        "$t": "South Russian Ovtcharka"
      },
      {
        "$t": "Spaniel"
      },
      {
        "$t": "Spitz"
      },
      {
        "$t": "Staffordshire Bull Terrier"
      },
      {
        "$t": "Standard Poodle"
      },
      {
        "$t": "Sussex Spaniel"
      },
      {
        "$t": "Swedish Vallhund"
      },
      {
        "$t": "Terrier"
      },
      {
        "$t": "Thai Ridgeback"
      },
      {
        "$t": "Tibetan Mastiff"
      },
      {
        "$t": "Tibetan Spaniel"
      },
      {
        "$t": "Tibetan Terrier"
      },
      {
        "$t": "Tosa Inu"
      },
      {
        "$t": "Toy Fox Terrier"
      },
      {
        "$t": "Treeing Walker Coonhound"
      },
      {
        "$t": "Vizsla"
      },
      {
        "$t": "Weimaraner"
      },
      {
        "$t": "Welsh Corgi"
      },
      {
        "$t": "Welsh Springer Spaniel"
      },
      {
        "$t": "Welsh Terrier"
      },
      {
        "$t": "West Highland White Terrier Westie"
      },
      {
        "$t": "Wheaten Terrier"
      },
      {
        "$t": "Whippet"
      },
      {
        "$t": "White German Shepherd"
      },
      {
        "$t": "Wire Fox Terrier"
      },
      {
        "$t": "Wire-haired Pointing Griffon"
      },
      {
        "$t": "Wirehaired Terrier"
      },
      {
        "$t": "Xoloitzcuintle (Mexican Hairless)"
      },
      {
        "$t": "Yellow Labrador Retriever"
      },
      {
        "$t": "Yorkshire Terrier Yorkie"
      }
    ]
  }

}
