export type BiKpisSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisSessionStateMachine {
  private allowedTransitions: Record<BiKpisSessionState, BiKpisSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisSessionState, to: BiKpisSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisSessionState, to: BiKpisSessionState): BiKpisSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisSession: " + from + " -> " + to);
    }
    return to;
  }
}
