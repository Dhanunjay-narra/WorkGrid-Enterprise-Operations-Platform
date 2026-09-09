export type BiExportsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsPayloadStateMachine {
  private allowedTransitions: Record<BiExportsPayloadState, BiExportsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsPayloadState, to: BiExportsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsPayloadState, to: BiExportsPayloadState): BiExportsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
