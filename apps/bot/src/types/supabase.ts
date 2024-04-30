export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      archetypestats: {
        Row: {
          archetypeid: string
          attack: number
          defense: number
          hp: number
          lvl: number
          speed: number
        }
        Insert: {
          archetypeid: string
          attack: number
          defense: number
          hp: number
          lvl: number
          speed: number
        }
        Update: {
          archetypeid?: string
          attack?: number
          defense?: number
          hp?: number
          lvl?: number
          speed?: number
        }
        Relationships: [
          {
            foreignKeyName: "archetypestats_archetypeid_fkey"
            columns: ["archetypeid"]
            isOneToOne: false
            referencedRelation: "characterarchetype"
            referencedColumns: ["id"]
          },
        ]
      }
      character: {
        Row: {
          archetypeid: string
          experience: number
          id: string
          lvl: number
          playerid: string
        }
        Insert: {
          archetypeid: string
          experience: number
          id: string
          lvl: number
          playerid: string
        }
        Update: {
          archetypeid?: string
          experience?: number
          id?: string
          lvl?: number
          playerid?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_archetypeid_fkey"
            columns: ["archetypeid"]
            isOneToOne: false
            referencedRelation: "characterarchetype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_playerid_fkey"
            columns: ["playerid"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
        ]
      }
      characterarchetype: {
        Row: {
          archetypedescription: string
          archetypename: string
          id: string
          model: string
        }
        Insert: {
          archetypedescription: string
          archetypename: string
          id: string
          model: string
        }
        Update: {
          archetypedescription?: string
          archetypename?: string
          id?: string
          model?: string
        }
        Relationships: []
      }
      clan: {
        Row: {
          blason: string
          clandescription: string
          clanname: string
          id: number
        }
        Insert: {
          blason: string
          clandescription: string
          clanname: string
          id: number
        }
        Update: {
          blason?: string
          clandescription?: string
          clanname?: string
          id?: number
        }
        Relationships: []
      }
      experiencerequirement: {
        Row: {
          lvl: number
          requirednextlevel: number
        }
        Insert: {
          lvl: number
          requirednextlevel: number
        }
        Update: {
          lvl?: number
          requirednextlevel?: number
        }
        Relationships: []
      }
      gamestore: {
        Row: {
          archetypeid: string | null
          description: string
          gold: number
          id: number
          name: string
          price: number
        }
        Insert: {
          archetypeid?: string | null
          description: string
          gold?: number
          id: number
          name: string
          price?: number
        }
        Update: {
          archetypeid?: string | null
          description?: string
          gold?: number
          id?: number
          name?: string
          price?: number
        }
        Relationships: [
          {
            foreignKeyName: "gamestore_archetypeid_fkey"
            columns: ["archetypeid"]
            isOneToOne: false
            referencedRelation: "characterarchetype"
            referencedColumns: ["id"]
          },
        ]
      }
      player: {
        Row: {
          clanid: number | null
          gold: number
          id: string
        }
        Insert: {
          clanid?: number | null
          gold?: number
          id: string
        }
        Update: {
          clanid?: number | null
          gold?: number
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "player_clanid_fkey"
            columns: ["clanid"]
            isOneToOne: false
            referencedRelation: "clan"
            referencedColumns: ["id"]
          },
        ]
      }
      playerteam: {
        Row: {
          characterids: string[] | null
          id: number
          playerid: string
        }
        Insert: {
          characterids?: string[] | null
          id: number
          playerid: string
        }
        Update: {
          characterids?: string[] | null
          id?: number
          playerid?: string
        }
        Relationships: [
          {
            foreignKeyName: "playerteam_playerid_fkey"
            columns: ["playerid"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
        ]
      }
      referral: {
        Row: {
          referred_id: string
          referrer_id: string
        }
        Insert: {
          referred_id: string
          referrer_id: string
        }
        Update: {
          referred_id?: string
          referrer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "referral_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
        ]
      }
      storetracking: {
        Row: {
          id: number
          offerid: number
          playerid: string
        }
        Insert: {
          id: number
          offerid: number
          playerid: string
        }
        Update: {
          id?: number
          offerid?: number
          playerid?: string
        }
        Relationships: [
          {
            foreignKeyName: "storetracking_offerid_fkey"
            columns: ["offerid"]
            isOneToOne: false
            referencedRelation: "gamestore"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "storetracking_playerid_fkey"
            columns: ["playerid"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      characterpowerlevel: {
        Row: {
          id: string | null
          playerid: string | null
          powerlevel: number | null
        }
        Relationships: [
          {
            foreignKeyName: "character_playerid_fkey"
            columns: ["playerid"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
        ]
      }
      clanpowerlevel: {
        Row: {
          clanid: number | null
          clanname: string | null
          clanpower: number | null
        }
        Relationships: [
          {
            foreignKeyName: "player_clanid_fkey"
            columns: ["clanid"]
            isOneToOne: false
            referencedRelation: "clan"
            referencedColumns: ["id"]
          },
        ]
      }
      playerpawns: {
        Row: {
          attack: number | null
          class: string | null
          defense: number | null
          experience: number | null
          hp: number | null
          id: string | null
          isinteam: boolean | null
          lvl: number | null
          playerid: string | null
          speed: number | null
          tonextlevel: number | null
        }
        Relationships: [
          {
            foreignKeyName: "character_playerid_fkey"
            columns: ["playerid"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
        ]
      }
      playerpower: {
        Row: {
          playerid: string | null
          playerpower: number | null
        }
        Relationships: [
          {
            foreignKeyName: "character_playerid_fkey"
            columns: ["playerid"]
            isOneToOne: false
            referencedRelation: "player"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
