export type BiKpisProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisProfileStateMachine {
  private allowedTransitions: Record<BiKpisProfileState, BiKpisProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisProfileState, to: BiKpisProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisProfileState, to: BiKpisProfileState): BiKpisProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisProfile: " + from + " -> " + to);
    }
    return to;
  }
}
