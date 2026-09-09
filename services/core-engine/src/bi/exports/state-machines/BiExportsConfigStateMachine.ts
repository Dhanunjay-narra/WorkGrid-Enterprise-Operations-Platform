export type BiExportsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsConfigStateMachine {
  private allowedTransitions: Record<BiExportsConfigState, BiExportsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsConfigState, to: BiExportsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsConfigState, to: BiExportsConfigState): BiExportsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
