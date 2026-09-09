import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>NEXORA Mobile</Text>
          <Text style={styles.subtitle}>Enterprise Field & Operations Hub</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📍 Geofenced Attendance</Text>
          <Text style={styles.cardDesc}>Checked in at HQ (San Francisco Campus)</Text>
          <TouchableOpacity style={styles.btnSage}>
            <Text style={styles.btnText}>Clock Out (8h 12m)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧾 Expense OCR Scanner</Text>
          <Text style={styles.cardDesc}>Instant receipt parsing with auto-ledger entry</Text>
          <TouchableOpacity style={styles.btnIndigo}>
            <Text style={styles.btnText}>Scan New Receipt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>💬 Secure Executive Chat</Text>
          <Text style={styles.cardDesc}>End-to-end encrypted direct channel</Text>
          <TouchableOpacity style={styles.btnNeutral}>
            <Text style={styles.btnTextNeutral}>Open Communication Hub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBFBF9' },
  scroll: { padding: 20 },
  header: { marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '700', color: '#1E2022' },
  subtitle: { fontSize: 13, color: '#1E2022', opacity: 0.6, marginTop: 4 },
  card: { backgroundColor: '#F7F6F3', borderColor: '#E2DFD8', borderWidth: 1, borderRadius: 20, padding: 18, marginBottom: 16 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#1E2022' },
  cardDesc: { fontSize: 12, color: '#1E2022', opacity: 0.6, marginVertical: 8 },
  btnSage: { backgroundColor: '#6B8E7B', borderRadius: 12, paddingVertical: 10, alignItems: 'center' },
  btnIndigo: { backgroundColor: '#5E6AD2', borderRadius: 12, paddingVertical: 10, alignItems: 'center' },
  btnNeutral: { backgroundColor: '#EFECE6', borderRadius: 12, paddingVertical: 10, alignItems: 'center' },
  btnText: { color: '#FFFFFF', fontWeight: '600', fontSize: 13 },
  btnTextNeutral: { color: '#1E2022', fontWeight: '600', fontSize: 13 }
});
