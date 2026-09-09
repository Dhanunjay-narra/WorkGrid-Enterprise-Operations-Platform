export type BiExportsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsProfileStateMachine {
  private allowedTransitions: Record<BiExportsProfileState, BiExportsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsProfileState, to: BiExportsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsProfileState, to: BiExportsProfileState): BiExportsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
