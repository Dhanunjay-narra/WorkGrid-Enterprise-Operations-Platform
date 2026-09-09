export type IotLocationsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsPayloadStateMachine {
  private allowedTransitions: Record<IotLocationsPayloadState, IotLocationsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsPayloadState, to: IotLocationsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsPayloadState, to: IotLocationsPayloadState): IotLocationsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
