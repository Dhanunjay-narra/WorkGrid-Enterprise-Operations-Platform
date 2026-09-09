export type ProjectTasksPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksPayloadStateMachine {
  private allowedTransitions: Record<ProjectTasksPayloadState, ProjectTasksPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksPayloadState, to: ProjectTasksPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksPayloadState, to: ProjectTasksPayloadState): ProjectTasksPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksPayload: " + from + " -> " + to);
    }
    return to;
  }
}
