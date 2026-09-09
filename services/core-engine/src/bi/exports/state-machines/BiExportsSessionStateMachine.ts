export type BiExportsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsSessionStateMachine {
  private allowedTransitions: Record<BiExportsSessionState, BiExportsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsSessionState, to: BiExportsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsSessionState, to: BiExportsSessionState): BiExportsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsSession: " + from + " -> " + to);
    }
    return to;
  }
}
