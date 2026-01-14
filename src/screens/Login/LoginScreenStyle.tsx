import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 260,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    fontSize: 48,
    fontWeight: '500',
  },

  imagePlaceholder: {
    marginTop: 30,
  },

  placeholderIcon: {
    width: 60,
    height: 60,
    tintColor: '#333',
  },

  form: {
    paddingHorizontal: 24,
    marginTop: 20,
  },

  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight:'400'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 14,
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    height: 48,
  },

  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#777',
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  forgotText: {
    color: '#777',
    fontSize: 12,
  },

  signInButton: {
    backgroundColor: '#5cc98a',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf:'flex-end',
    width:'30%'
  },

  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf:'flex-end'
  },

  signupText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 12,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#666',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },

  socialIcon: {
    width: 40,
    height: 40,
  },

  guestContainer: {
    alignItems: 'flex-end',
  },

  guestText: {
    fontSize: 12,
    color: '#777',
  },
});
