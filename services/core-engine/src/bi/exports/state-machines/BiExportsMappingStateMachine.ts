export type BiExportsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsMappingStateMachine {
  private allowedTransitions: Record<BiExportsMappingState, BiExportsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsMappingState, to: BiExportsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsMappingState, to: BiExportsMappingState): BiExportsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
