import { StyleSheet, Platform } from 'react-native';

const COLORS = {
    background: '#0F0F0F',
    surface: '#1A1A1A',
    surfaceElevated: '#222222',
    border: '#2E2E2E',
    borderFocus: '#F5A623',
    accent: '#F5A623',
    accentDark: '#C4841A',
    text: '#F0F0F0',
    textSecondary: '#A0A0A0',
    textMuted: '#606060',
    placeholder: '#4A4A4A',
    buttonText: '#0F0F0F',
    error: '#FF4D4D',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        paddingBottom: 48,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        color: COLORS.text,
        letterSpacing: -0.5,
        marginBottom: 32,
        borderLeftWidth: 3,
        borderLeftColor: COLORS.accent,
        paddingLeft: 12,
    },

    label: {
        fontSize: 11,
        fontWeight: '600',
        color: COLORS.textSecondary,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        marginBottom: 8,
        marginTop: 20,
    },

    input: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        color: COLORS.text,
        fontWeight: '400',
    },

    inputFocused: {
        borderColor: COLORS.borderFocus,
        backgroundColor: COLORS.surfaceElevated,
    },

    button: {
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36,
        shadowColor: COLORS.accent,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },

    buttonPressed: {
        backgroundColor: COLORS.accentDark,
        shadowOpacity: 0.1,
    },

    buttonText: {
        color: COLORS.buttonText,
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.5,
    },

    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: 24,
    },

    errorText: {
        fontSize: 12,
        color: COLORS.error,
        marginTop: 4,
        marginLeft: 2,
    },

    requiredMark: {
        color: COLORS.accent,
    },
});
export default styles;