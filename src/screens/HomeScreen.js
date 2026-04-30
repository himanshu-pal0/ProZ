import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "react-native-vector-icons";

/* -------------------- MOCK DATA -------------------- */
const CATEGORIES = [
  { key: "Healthcare", icon: "heart-pulse", lib: "mci" },
  { key: "Legal", icon: "file-document-outline", lib: "mci" },
  { key: "Finance", icon: "chart-line", lib: "mci" },
  { key: "Infrastructure", icon: "office-building", lib: "mci" },
];

const CONSULT_BANNERS = [
  {
    id: "in-person",
    title: "In-Person Consultation",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    id: "video",
    title: "Instant Video Consultation",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
];

const PROFESSIONALS = [
  { name: "Dr. Anjali Me...", avatar: "https://i.pravatar.cc/150?img=47" },
  { name: "Dr. Riddhi...", avatar: "https://i.pravatar.cc/150?img=44" },
  { name: "Dr. Anuj Ja...", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Dr. JS Kap...", avatar: "https://i.pravatar.cc/150?img=68" },
  { name: "Dr. A...", avatar: "https://i.pravatar.cc/150?img=33" },
];

const SPECIALTIES = [
  { key: "General Physician", icon: "stethoscope", lib: "fa5", color: "#7B5CD6", bg: "#F3EBFF" },
  { key: "Dermatology", icon: "face-woman", lib: "mci", color: "#D67BB6", bg: "#FBE9F3" },
  { key: "Cardiology", icon: "heart-pulse", lib: "mci", color: "#A046C9", bg: "#F3EBFF" },
  { key: "Dental", icon: "tooth-outline", lib: "mci", color: "#F08AAA", bg: "#FBE9F3" },
  { key: "Preventive\nHealth Check-Up", icon: "magnify", lib: "mci", color: "#7B5CD6", bg: "#F3EBFF" },
  { key: "Ayurvedic", icon: "leaf", lib: "mci", color: "#9B7BD6", bg: "#F3EBFF" },
  { key: "Neurology", icon: "brain", lib: "mci", color: "#A046C9", bg: "#F3EBFF" },
  { key: "Ophthalmology", icon: "eye-outline", lib: "mci", color: "#7B5CD6", bg: "#F3EBFF" },
];

const POPULAR_SERVICES = [
  {
    id: "1",
    title: "Free Follow-Up",
    subtitle: "For 3 Days With Every Consultation",
    cta: "Know More",
    bg: "#3B7AE8",
  },
  {
    id: "2",
    title: "Online\nConsultation",
    subtitle: "Chat with doctors instantly",
    cta: "Start Now",
    bg: "#E8364A",
  },
  {
    id: "3",
    title: "Lab Tests",
    subtitle: "At your doorstep",
    cta: "Book Now",
    bg: "#1FA37C",
  },
];

/* -------------------- ICON HELPER -------------------- */
function Icon({ lib, name, size, color }) {
  if (lib === "mci")
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  if (lib === "fa5")
    return <FontAwesome5 name={name} size={size} color={color} />;
  return <Ionicons name={name} size={size} color={color} />;
}

/* -------------------- HOME SCREEN -------------------- */
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Healthcare");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#7A2BD9" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ============ Purple Gradient Header ============ */}
        <LinearGradient colors={["#7A2BD9", "#6A1FBF"]} style={styles.header}>
          {/* Top row: location + bell */}
          <View style={styles.headerTopRow}>
            <View style={{ flex: 1 }}>
              <View style={styles.locationRow}>
                <Ionicons name="navigate" size={18} color="#fff" />
                <Text style={styles.locationCity}>Bengaluru</Text>
                <Ionicons name="chevron-down" size={18} color="#fff" />
              </View>
              <Text style={styles.locationSub}>
                Cubbon Park, Vidhana Soudha
              </Text>
            </View>
            <TouchableOpacity style={styles.bellBtn}>
              <Ionicons name="notifications-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Search bar */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#9B9B9B" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Specialty..."
              placeholderTextColor="#9B9B9B"
            />
            <TouchableOpacity>
              <Ionicons name="options-outline" size={20} color="#7A2BD9" />
            </TouchableOpacity>
          </View>

          {/* Category tabs */}
          <View style={styles.catRow}>
            {CATEGORIES.map((c) => {
              const active = activeCategory === c.key;
              return (
                <TouchableOpacity
                  key={c.key}
                  onPress={() => setActiveCategory(c.key)}
                  style={[styles.catCard, active && styles.catCardActive]}
                >
                  <Icon
                    lib={c.lib}
                    name={c.icon}
                    size={28}
                    color={active ? "#7A2BD9" : "#fff"}
                  />
                  <Text
                    style={[
                      styles.catLabel,
                      active && { color: "#7A2BD9", fontWeight: "700" },
                    ]}
                    numberOfLines={1}
                  >
                    {c.key}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </LinearGradient>

        {/* ============ Consultation Banners ============ */}

        <View style={styles.bannerRow}>
          {CONSULT_BANNERS.map((b) => (
            <TouchableOpacity key={b.id} style={styles.bannerCard}>
              <Image 
                source={{ uri: b.image }} 
                style={styles.bannerImg}
                onError={(e) => console.log("Banner load error:", e.nativeEvent.error)}
              />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.6)"]}
                style={styles.bannerGradient}
              />
              <Text style={styles.bannerLabel}>{b.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ============ Professionals You Have Connected ============ */}
        <Text style={styles.sectionTitle}>
          Professionals You Have Connected
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.profRow}
        >
          {PROFESSIONALS.map((p, i) => (
            <TouchableOpacity key={i} style={styles.profItem}>
              <View style={styles.avatarWrap}>
              {/* <Image 
                source={{ uri: p.avatar }} 
                style={styles.avatar}
                defaultSource={require("../assets/placeholder-avatar.png")}
                onError={(e) => console.log("Avatar load error:", e.nativeEvent.error)}
              /> */}

                <View style={styles.onlineDot}>
                  <Text style={styles.onlineO}>O</Text>
                </View>
              </View>
              <Text style={styles.profName} numberOfLines={1}>
                {p.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ============ Find A Doctor Grid ============ */}
        <Text style={styles.sectionTitle}>
          Find A Doctor For Your Health Problem
        </Text>
        <View style={styles.specGrid}>
          {SPECIALTIES.map((s, i) => (
            <TouchableOpacity key={i} style={styles.specItem}>
              <View style={[styles.specIconBox, { backgroundColor: s.bg }]}>
                <Icon lib={s.lib} name={s.icon} size={36} color={s.color} />
              </View>
              <Text style={styles.specLabel} numberOfLines={2}>
                {s.key}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ============ Popular Services ============ */}
        <Text style={styles.sectionTitle}>Popular Services</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.popRow}
        >
          {POPULAR_SERVICES.map((p) => (
            <TouchableOpacity
              key={p.id}
              style={[styles.popCard, { backgroundColor: p.bg }]}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.popTitle}>{p.title}</Text>
                <Text style={styles.popSub}>{p.subtitle}</Text>
                <Text style={styles.popCta}>{p.cta}</Text>
              </View>
              <MaterialCommunityIcons
                name="chat-processing"
                size={50}
                color="rgba(255,255,255,0.85)"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

/* -------------------- STYLES -------------------- */
const PURPLE = "#7A2BD9";

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  scroll: { flex: 1, backgroundColor: "#fff" },

  /* Header */
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 40 : 10,
    paddingHorizontal: 18,
    paddingBottom: 28,
  },

  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  locationCity: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 6,
    marginRight: 2,
  },
  locationSub: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    marginTop: 4,
    marginLeft: 24,
  },
  bellBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Search */
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
    marginTop: 18,
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  searchInput: { flex: 1, fontSize: 15, color: "#222" },

  /* Category tabs */
  catRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },
  catCard: {
    width: "23%",
    aspectRatio: 1,
    borderRadius: 14,
    borderWidth: 1.2,
    borderColor: "rgba(255,255,255,0.55)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  catCardActive: {
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  catLabel: {
    color: "#fff",
    fontSize: 11,
    marginTop: 6,
    fontWeight: "500",
  },

  /* Consultation banners */
  bannerRow: {
    flexDirection: "row",
    paddingHorizontal: 14,
    marginTop: 14,
    gap: 10,
  },
  bannerCard: {
    flex: 1,
    height: 130,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: PURPLE,
  },
  bannerImg: { 
    width: "100%", 
    height: "100%",
    backgroundColor: "#f0f0f0"
  },

  bannerGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
  bannerLabel: {
    position: "absolute",
    bottom: 8,
    left: 10,
    right: 10,
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  /* Section Title */
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1B1B1B",
    marginTop: 22,
    marginBottom: 12,
    paddingHorizontal: 18,
  },

  /* Professionals */
  profRow: { paddingHorizontal: 14, gap: 14 },
  profItem: { alignItems: "center", width: 76 },
  avatarWrap: { position: "relative" },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#F3EBFF",
  },
  onlineDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: PURPLE,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  onlineO: { color: "#fff", fontSize: 10, fontWeight: "700" },
  profName: {
    marginTop: 6,
    fontSize: 12,
    color: "#1B1B1B",
    textAlign: "center",
  },

  /* Specialties grid */
  specGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
    justifyContent: "space-between",
    rowGap: 16,
  },
  specItem: { width: "23%", alignItems: "center" },
  specIconBox: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  specLabel: {
    marginTop: 8,
    fontSize: 11,
    color: "#1B1B1B",
    textAlign: "center",
    fontWeight: "500",
  },

  /* Popular services */
  popRow: { paddingHorizontal: 14, gap: 12, paddingRight: 30 },
  popCard: {
    width: 300,
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 110,
  },
  popTitle: { color: "#fff", fontSize: 18, fontWeight: "800" },
  popSub: { color: "rgba(255,255,255,0.95)", fontSize: 12, marginTop: 4 },
  popCta: {
    color: "#FFE066",
    fontWeight: "700",
    marginTop: 10,
    textDecorationLine: "underline",
    fontSize: 13,
  },
});